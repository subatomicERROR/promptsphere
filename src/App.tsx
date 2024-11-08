import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PromptFeed from './components/PromptFeed';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <PromptFeed />
    </div>
  );
}

export default App;