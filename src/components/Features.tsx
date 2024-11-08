import React from 'react';
import { Sliders, Keyboard, Cpu, Zap, Clock, Lock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Sliders className="w-8 h-8" />,
      title: "Precise Control",
      description: "Fine-tune your keyboard brightness with an intuitive slider"
    },
    {
      icon: <Keyboard className="w-8 h-8" />,
      title: "Global Shortcut",
      description: "Toggle keyboard light from anywhere with customizable shortcuts"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Resource Efficient",
      description: "Minimal CPU and memory usage, even when running in background"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Response",
      description: "Zero delay between command and keyboard light adjustment"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Auto Schedule",
      description: "Set automatic adjustments based on time or system events"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Secure Design",
      description: "No unnecessary permissions, completely open source"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Powerful Features, Simple Interface
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-800/80 transition-colors">
              <div className="w-12 h-12 mb-4 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}