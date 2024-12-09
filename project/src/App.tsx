import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { DataInput } from './components/DataInput';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Account } from './pages/Account';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-gray-50"
      style={{
          backgroundImage: `url('/src/assets/Bg.webp')`, 
        }}
        >
        <div className="bg-black bg-opacity-50 min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Match Data</h2>
                <DataInput />
              </div>
            </main>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;