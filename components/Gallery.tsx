import React, { useState } from 'react';
import { GalleryContent, GalleryItem } from '../types';
import { Camera, X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  data: GalleryContent;
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Camera className="text-purple-400" />
            <span className="text-white">{data.title}</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.items.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative break-inside-avoid cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-900 border border-white/5 relative shadow-lg">
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <ZoomIn className="text-white/80" size={32} />
                </div>

                {/* Grid Caption (Visible on Hover) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                  <p className="text-sm text-white font-medium line-clamp-2">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Placeholder for layout balance if needed */}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedItem(null);
            }}
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-full max-h-full flex justify-center items-center" 
            onClick={e => e.stopPropagation()}
          >
            <img 
              src={selectedItem.src} 
              alt={selectedItem.alt} 
              className="max-h-[85vh] max-w-full w-auto h-auto rounded-lg shadow-2xl select-none"
            />
            
            {/* Floating Caption in Bottom Right of Image */}
            <div className="absolute bottom-4 right-4 max-w-[90%] md:max-w-md bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg">
              <p className="text-gray-100 text-sm md:text-base font-medium leading-relaxed">
                {selectedItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;