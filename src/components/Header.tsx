import React from 'react';
import { Brain, Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/50 backdrop-blur-lg z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            PromptSphere
          </span>
        </div>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search prompts, models, or users..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors">
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      </nav>
    </header>
  );
}