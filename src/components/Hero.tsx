import React from 'react';
import { ArrowRight, Sparkles, Users, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Create AI Magic with Prompts
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Join the community of prompt engineers and AI enthusiasts.
            Share, discover, and create amazing AI experiences together.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#explore" 
               className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center space-x-2 transition-all hover:scale-105">
              <span>Explore Prompts</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#create" 
               className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-105">
              Share Your Prompt
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-gray-400">Create amazing content with state-of-the-art AI models</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <Users className="w-8 h-8 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Community</h3>
              <p className="text-gray-400">Connect with fellow prompt engineers and creators</p>
            </div>
            <div className="p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Instant</h3>
              <p className="text-gray-400">Get results instantly with our optimized platform</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}