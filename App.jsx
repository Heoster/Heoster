import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import GallerySection from './components/GallerySection';
import './index.css';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Class of 2024</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8">
              Preserving our memories, celebrating our journey, and staying connected beyond graduation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#gallery" className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                View Gallery
              </a>
              <a href="#upload" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Upload Photos
              </a>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <GallerySection />
        
        {/* Chat Section Placeholder */}
        <section id="chat" className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Class Chat</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Stay connected with your classmates through our real-time chat.
            </p>
            <div className="bg-gray-100 rounded-lg p-8 max-w-3xl mx-auto text-center">
              <p>Chat functionality will be implemented here.</p>
            </div>
          </div>
        </section>
        
        {/* Upload Section Placeholder */}
        <section id="upload" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Share Your Memories</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Upload your photos to share with the class.
            </p>
            <div className="bg-white rounded-lg p-8 max-w-xl mx-auto">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <p className="text-gray-500">Upload functionality will be implemented here.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Heoster 2024</h2>
          <p className="mb-6">Class Memories Project</p>
          <p className="text-gray-400">&copy; 2024 - All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
