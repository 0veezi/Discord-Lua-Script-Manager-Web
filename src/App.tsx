import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Settings from './pages/Settings';
import Scripts from './pages/Scripts';
import Editor from './pages/Editor';
import Console from './pages/Console';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/settings" element={<Settings />} />
            <Route path="/scripts" element={<Scripts />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/console" element={<Console />} />
            <Route path="/" element={<Navigate to="/scripts" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;