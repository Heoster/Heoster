import React, { useState } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

export default function Header() {
  const [user, setUser] = useState(null);
  
  const handleLogin = async () => {
    try {
      // In a real app, this would actually sign in with Firebase
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login failed", error);
    }
  };
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="bg-primary text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">HEOSTER</span>
          <span className="bg-white text-primary px-2 py-1 rounded text-sm font-bold">2024</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#gallery" className="hover:text-white/80 transition-colors">Gallery</a></li>
            <li><a href="#chat" className="hover:text-white/80 transition-colors">Chat</a></li>
            <li><a href="#upload" className="hover:text-white/80 transition-colors">Upload</a></li>
          </ul>
        </nav>
        
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center space-x-3">
              <div className="hidden md:block">
                <p className="text-sm font-medium">{user.displayName}</p>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-secondary">
                    {user.displayName?.charAt(0) || "U"}
                  </div>
                )}
              </div>
              
              <button 
                onClick={handleLogout}
                className="hidden md:block text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLogin}
              className="bg-white text-primary hover:bg-white/90 px-4 py-1.5 rounded-full font-medium transition-colors"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
