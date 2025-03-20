import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function GalleryPage() {
  // Mock data for artwork, in a real app this would come from the database
  const artworks = [
    {
      id: '1',
      title: 'Abstract Composition',
      description: 'A colorful abstract composition with geometric shapes.',
      price: 499.99,
      imageUrl: '/images/placeholder1.jpg',
    },
    {
      id: '2',
      title: 'Urban Landscape',
      description: 'A moody cityscape with dramatic lighting.',
      price: 699.99,
      imageUrl: '/images/placeholder2.jpg',
    },
    {
      id: '3',
      title: 'Nature Study',
      description: 'Detailed study of natural elements with rich textures.',
      price: 599.99,
      imageUrl: '/images/placeholder3.jpg',
    },
    {
      id: '4',
      title: 'Portrait Series',
      description: 'Expressive portrait with bold color palette.',
      price: 799.99,
      imageUrl: '/images/placeholder4.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Art Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="card">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Replace with actual image in production */}
                <span className="text-gray-500">Artwork Image</span>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
                <p className="text-gray-600 mb-4">{artwork.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${artwork.price.toFixed(2)}</span>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
} 