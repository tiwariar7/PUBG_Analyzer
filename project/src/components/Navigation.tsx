import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Gamepad, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navigation: React.FC = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Gamepad className="w-8 h-8 text-blue-600 mr-3" />
            <Link to="/" className="text-2xl font-bold text-gray-900">
              PUBG Analytics
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className="flex items-center text-gray-700 hover:text-blue-600">
                  <User className="w-5 h-5 mr-1" />
                  Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};