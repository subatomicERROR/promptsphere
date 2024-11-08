import React from 'react';
import { Heart, MessageSquare, Share2, Bookmark } from 'lucide-react';

const prompts = [
  {
    id: 1,
    user: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
      handle: "@sarahchen"
    },
    title: "Create Photorealistic Nature Scenes",
    description: "A powerful prompt for generating stunning nature photography with perfect lighting and composition.",
    tags: ["photography", "nature", "midjourney"],
    likes: 1234,
    comments: 89,
    saved: 456
  },
  {
    id: 2,
    user: {
      name: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
      handle: "@arivera"
    },
    title: "Advanced Code Explanation Assistant",
    description: "Transform complex code into clear, educational explanations with this carefully crafted prompt.",
    tags: ["coding", "education", "gpt-4"],
    likes: 892,
    comments: 45,
    saved: 234
  }
];

export default function PromptFeed() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Trending Prompts
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {prompts.map(prompt => (
            <div key={prompt.id} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <img 
                  src={prompt.user.avatar} 
                  alt={prompt.user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{prompt.user.name}</h3>
                  <p className="text-gray-400 text-sm">{prompt.user.handle}</p>
                </div>
              </div>
              
              <h4 className="text-xl font-semibold mb-2">{prompt.title}</h4>
              <p className="text-gray-300 mb-4">{prompt.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {prompt.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center space-x-6 text-gray-400">
                <button className="flex items-center space-x-2 hover:text-purple-400">
                  <Heart className="w-5 h-5" />
                  <span>{prompt.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-purple-400">
                  <MessageSquare className="w-5 h-5" />
                  <span>{prompt.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-purple-400">
                  <Bookmark className="w-5 h-5" />
                  <span>{prompt.saved}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-purple-400">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}