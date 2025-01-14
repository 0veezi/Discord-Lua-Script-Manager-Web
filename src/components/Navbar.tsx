import React from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Code, Terminal, Layout } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <NavLink
              to="/scripts"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Layout className="w-5 h-5" />
              <span>Dashboard</span>
            </NavLink>
            <NavLink
              to="/editor"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Code className="w-5 h-5" />
              <span>Editor</span>
            </NavLink>
            <NavLink
              to="/console"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Terminal className="w-5 h-5" />
              <span>Console</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-700 hover:text-blue-600 ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;