import React, { useState } from 'react';
import { Mail, Lock, User, Phone, LogIn, UserPlus } from 'lucide-react';

const BACKEND_API = import.meta.env.VITE_BACKEND_API;

const LoginForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    otp: '',
    name: '',
    phone: '',
  });

  const [step, setStep] = useState(1); // 1: Email input, 2: OTP input (and name/phone for signup)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = (email) => /^[^\s@]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

  // Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!formData.email) return setError('Email is required.');
    if (!validateEmail(formData.email)) return setError('Please enter a valid email.');

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8080/auth/send-otp?email=${encodeURIComponent(formData.email)}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed to send OTP');

      setStep(2);
      if (data.isNew) setIsSignup(true);
      setSuccess(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP / Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.otp || (isSignup && (!formData.name || !formData.phone))) {
      return setError('All required fields must be filled.');
    }

    setLoading(true);
    const endpoint = isSignup ? '/register' : '/login';
    const payload = isSignup
      ? { email: formData.email, otp: formData.otp, name: formData.name, phone: formData.phone }
      : { email: formData.email, otp: formData.otp };

    try {
      const res = await fetch(`${BACKEND_API}/auth${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message || 'Failed to process request');

      localStorage.setItem('token', data.token);
      setSuccess(data.message);

      setFormData({ email: '', otp: '', name: '', phone: '' });
      setStep(1);
      setIsSignup(false);

      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setIsSignup(!isSignup);
    setStep(1);
    setError('');
    setSuccess('');
    setFormData({ ...formData, name: '', phone: '', otp: '' });
  };

  const handleBack = () => {
    setStep(1);
    setError('');
    setSuccess('');
    setFormData({ ...formData, otp: '', name: '', phone: '' });
  };

  return (
    <div className="p-6 w-full max-w-sm sm:max-w-md mx-auto bg-white rounded-lg">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        {isSignup ? 'Sign Up' : 'Login'}
      </h2>

      <form onSubmit={step === 1 ? handleSendOtp : handleSubmit} className="space-y-4">
        {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded">{error}</p>}
        {success && <p className="text-black text-sm text-center bg-spring-leaves-100 p-2 rounded">{success}</p>}

        {step === 1 ? (
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="flex items-center">
              <Mail className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-leaves-500 text-gray-800 text-sm sm:text-base"
                placeholder="Enter your email"
                disabled={loading}
              />
            </div>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-600 text-center mb-4">
              OTP sent to <span className="font-medium text-spring-leaves-500">{formData.email}</span>
            </p>
            <div className="relative">
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">OTP</label>
              <div className="flex items-center">
                <Lock className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-leaves-500 text-gray-800 text-sm sm:text-base"
                  placeholder="Enter the OTP"
                  disabled={loading}
                />
              </div>
            </div>

            {isSignup && (
              <>
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <div className="flex items-center">
                    <User className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-leaves-500 text-gray-800 text-sm sm:text-base"
                      placeholder="Enter your name"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="flex items-center">
                    <Phone className="absolute left-3 top-9 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-spring-leaves-500 text-gray-800 text-sm sm:text-base"
                      placeholder="Enter your phone number"
                      disabled={loading}
                    />
                  </div>
                </div>
              </>
            )}

            <button
              type="button"
              onClick={handleBack}
              className="w-full py-2 px-4 bg-spring-leaves-50 text-gray-700 hover:bg-spring-leaves-200 transition duration-200 text-sm sm:text-base"
              disabled={loading}
            >
              Back to Email
            </button>
          </>
        )}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white hover:bg-spring-leaves-800 transition duration-200 text-sm sm:text-base flex items-center justify-center rounded-sm"
          disabled={loading}
        >
          {loading ? 'Processing...' : step === 1 ? 'Get OTP' : isSignup ? <><UserPlus className="w-5 h-5 mr-2" />Sign Up</> : <><LogIn className="w-5 h-5 mr-2" />Login</>}
        </button>
      </form>

      <p className="text-sm text-center text-gray-600 mt-4">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={handleToggle} className="text-spring-leaves-500 hover:underline ml-1">
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default LoginForm;
