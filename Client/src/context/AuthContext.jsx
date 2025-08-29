import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModelOpen, setModelOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      setUser(decoded);

      // Fetch profile immediately using decoded.sub (email)
      fetchUserProfile(decoded.sub);

      // Auto logout on expiry
      const expiresIn = decoded.exp * 1000 - Date.now();
      setTimeout(() => logout(), expiresIn);
    } catch {
      logout();
    }
  };

  const fetchUserProfile = async (email) => {
    if (!email) return;

    try {
      const res = await fetch(
        `http://localhost:8080/user/profile?email=${encodeURIComponent(email)}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
    
      if (res.ok && data.success) {
        setProfile(data.userName);
        console.log(data.userName);
      } else {
        setProfile(null);
      }
    } catch {
      setProfile(null);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setProfile(null);
    window.location.href = "/";
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const isExpired = decoded.exp < Math.floor(Date.now() / 1000);

        if (isExpired) {
          logout();
        } else {
          setUser(decoded);
          fetchUserProfile(decoded.sub);
        }
      } catch {
        logout();
      }
    }

    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, loading, isModelOpen, setModelOpen, profile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
