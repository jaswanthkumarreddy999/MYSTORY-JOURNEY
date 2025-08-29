import React, { createContext, useContext, useState, useEffect } from "react";

import {jwtDecode} from "jwt-decode";

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
      
      //fetchUserProfile();
      console.log(decoded);
      // Optional: Auto logout on token expiry
      const expiresIn = decoded.exp * 1000 - Date.now();
      setTimeout(() => {
        logout();
      }, expiresIn);
      
    } catch (err) {
      console.error("Invalid token", err);
    }
  };
  const fetchUserProfile = async () => {
    if (!user || !user.sub) return;
    try {
      const res = await fetch(`http://localhost:8080/user/profile?userEmail=${encodeURIComponent(user.sub)}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setProfile(data.profile);
      } else {
        console.error('Failed to fetch profile:', data.message);
      }
    } catch (err) {
      console.error('Error fetching profile:', err);
    }
  }
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to login page
    setUser(null);
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
          console.log(decoded)
        }
      } catch (err) {
        logout();
      }
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulate loading delay
   
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, loading,isModelOpen,setModelOpen,profile}}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => useContext(AuthContext);
