import React from 'react';
import { Windows, Apple, Linux } from 'lucide-react';

export default function Download() {
  const downloads = [
    {
      icon: <Windows className="w-8 h-8" />,
      name: "Windows",
      version: "1.0.0",
      file: "KeyBeam-Setup-1.0.0.exe",
      size: "68.2 MB"
    },
    {
      icon: <Apple className="w-8 h-8" />,
      name: "macOS",
      version: "1.0.0",
      file: "KeyBeam-1.0.0.dmg",
      size: "65.8 MB"
    },
    {
      icon: <Linux className="w-8 h-8" />,
      name: "Linux",
      version: "1.0.0",
      file: "KeyBeam-1.0.0.AppImage",
      size: "63.4 MB"
    }
  ];

  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Download KeyBeam Toggle
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {downloads.map((download, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-xl text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                {download.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{download.name}</h3>
              <p className="text-gray-400 mb-4">Version {download.version}</p>
              <p className="text-sm text-gray-500 mb-4">{download.size}</p>
              <a
                href={`https://github.com/subatomicERROR/KeyBeam-Toggle/releases/download/v${download.version}/${download.file}`}
                className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-full transition-colors"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}