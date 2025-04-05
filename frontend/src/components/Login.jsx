import React, { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
function Login({ closeModal, switchToRegister, onLoginSuccess }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const deployedURL = "https://test-trp1.onrender.com";
  // const localURL = "http://localhost:5001";
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(deployedURL+'/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        onLoginSuccess(); // ✅ ONLY here
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      // 1. Sign in with Firebase popup
      const result = await signInWithPopup(auth, provider);
      
      // 2. Get Firebase ID token
      const idToken = await result.user.getIdToken();
      const { displayName, photoURL, email } = result.user;
      console.log("USERRR", result.user)
      localStorage.setItem('user', JSON.stringify({ displayName, photoURL, email }));
      localStorage.setItem('token', idToken);
      console.log("Firebase sign-in successful, sending ID token to backend...");
  
      // 3. Send Firebase ID token to backend
      const res = await fetch(deployedURL+'/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });
      console.log("HERHEHRKE", res)
  
      const data = await res.json();
  
      if (res.ok) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        window.location.reload();
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Google login error:', err);
      alert('Google login failed');
    }
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded shadow text-gray-800 dark:text-white"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded dark:bg-gray-700 dark:border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Login
        </button>
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full mt-3 bg-red-500 text-white py-2 rounded hover:bg-red-600"
        >
          🔐 Sign in with Google
        </button>
        <p className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          Don’t have an account?{' '}
          <button
            type="button"
            onClick={switchToRegister}
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Register here
          </button>
        </p>

       
      </form>
    </div>
  );
}

export default Login;