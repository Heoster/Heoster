import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// Sample photo data
const SAMPLE_PHOTOS = [
  {
    id: 1,
    url: "https://example.com/photo1.jpg",
    description: "Graduation Ceremony",
    timestamp: new Date("2024-05-15"),
    category: "Graduation"
  },
  {
    id: 2,
    url: "https://example.com/photo2.jpg",
    description: "Senior Prom",
    timestamp: new Date("2024-04-10"),
    category: "Parties"
  }
];

const categories = ["All", "Events", "Graduation", "Parties", "Sports"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [photos, setPhotos] = useState([]);
  const [displayPhotos, setDisplayPhotos] = useState([]);
  const [isDownloading, setIsDownloading] = useState(false);
  
  // Load photos
  useEffect(() => {
    // In a real app, this would fetch from Firebase
    setPhotos(SAMPLE_PHOTOS);
  }, []);
  
  // Filter photos based on active category
  useEffect(() => {
    if (activeCategory === "All") {
      setDisplayPhotos(photos);
    } else {
      setDisplayPhotos(photos.filter(photo => photo.category === activeCategory));
    }
  }, [activeCategory, photos]);

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  
  // Download all images as a zip file
  const downloadAllImages = async () => {
    if (displayPhotos.length === 0) {
      alert("No images to download");
      return;
    }
    
    setIsDownloading(true);
    try {
      const zip = new JSZip();
      const imgFolder = zip.folder("class-memories-2024");
      
      // In a real app, this would download actual images
      // For this sample, we'll just create placeholder content
      displayPhotos.forEach((photo, index) => {
        const fileName = photo.description
          ? `${photo.description.replace(/\s+/g, '-').toLowerCase()}.jpg`
          : `image-${index + 1}.jpg`;
          
        // Creating a placeholder text file instead of real images
        imgFolder?.file(fileName, "This would be image data in a real app");
      });
      
      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });
      
      // Save and download the zip file
      const zipFileName = activeCategory === "All" 
        ? "class-memories-2024.zip" 
        : `class-memories-2024-${activeCategory.toLowerCase()}.zip`;
        
      saveAs(content, zipFileName);
      
      alert("Download Complete!");
    } catch (error) {
      console.error("Error creating zip file:", error);
      alert("Download Failed: " + error.message);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-bold text-3xl mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 mb-8">
            Browse through our collection of memories from the Class of 2024.
          </p>
          
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-primary/10 text-primary"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Download All button */}
          <button
            onClick={downloadAllImages}
            disabled={isDownloading || displayPhotos.length === 0}
            className={`flex items-center justify-center gap-2 mx-auto px-6 py-2.5 rounded-full font-medium text-white ${
              isDownloading 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-primary hover:bg-primary/90 transform hover:-translate-y-1 transition-all duration-300"
            }`}
          >
            {isDownloading ? "Processing..." : "Download All Images"}
          </button>
        </div>
        
        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPhotos.map(photo => (
            <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-[4/3] bg-gray-300">
                {/* In a real app, this would be an actual image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Image Placeholder
                </div>
                
                {/* Download button */}
                <div className="absolute top-2 right-2">
                  <button className="bg-white p-2 rounded-full shadow">
                    ↓
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{photo.description}</h3>
                <p className="text-gray-600 text-sm">{formatDate(photo.timestamp)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
