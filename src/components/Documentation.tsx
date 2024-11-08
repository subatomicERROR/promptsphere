import React from 'react';
import { Book } from 'lucide-react';

export default function Documentation() {
  return (
    <section id="docs" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-12">
            <Book className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold">Documentation</h2>
          </div>
          <div className="prose prose-invert max-w-none">
            <h3>Quick Start</h3>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`# Clone the repository
git clone https://github.com/subatomicERROR/KeyBeam-Toggle.git

# Navigate to the project directory
cd KeyBeam-Toggle

# Install dependencies
npm install

# Start development
npm run electron:dev

# Build for production
npm run electron:build`}
            </pre>

            <h3>Configuration</h3>
            <p>
              KeyBeam Toggle can be configured through the settings panel or by editing the config file:
            </p>
            <pre className="bg-gray-800 p-4 rounded-lg">
              {`{
  "shortcuts": {
    "toggleLight": "CommandOrControl+Shift+L",
    "increaseBrightness": "CommandOrControl+Shift+Up",
    "decreaseBrightness": "CommandOrControl+Shift+Down"
  },
  "startup": {
    "launchAtLogin": true,
    "startMinimized": true
  }
}`}
            </pre>

            <h3>Features</h3>
            <ul>
              <li>Global keyboard shortcuts for quick access</li>
              <li>Brightness slider with precise control (0-100%)</li>
              <li>System tray integration for easy access</li>
              <li>Auto-start with system option</li>
              <li>Dark mode UI</li>
              <li>Cross-platform compatibility</li>
            </ul>

            <h3>System Requirements</h3>
            <ul>
              <li>Windows 10/11</li>
              <li>macOS 10.15 or later</li>
              <li>Linux with X11 or Wayland</li>
              <li>Keyboard with adjustable backlight</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}