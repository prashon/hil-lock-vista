import { useState } from 'react';
import { X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm.jpeg',
      title: 'Swimming Pool',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm_(1).jpeg',
      title: 'Property Exterior',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm.jpeg',
      title: 'Luxury Room',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm_(1).jpeg',
      title: 'Pool View',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm.jpeg',
      title: 'Hill Views',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm_(1).jpeg',
      title: 'Property View',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm.jpeg',
      title: 'Premium Suite',
    },
    {
      url: '/images/whatsapp_image_2026-01-25_at_4.31.52_pm_(1).jpeg',
      title: 'Resort Area',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our beautiful property and stunning surroundings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
