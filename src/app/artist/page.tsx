import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArtistPage() {
  // Mock data for the artist profile
  const artist = {
    name: 'Jane Smith',
    bio: 'Contemporary artist working with various media including oil painting, digital art, and sculpture. Explores themes of nature, identity, and the relationship between technology and humanity.',
    location: 'New York, NY',
    email: 'jane.smith@example.com',
    website: 'www.janesmith.art',
    imageUrl: '/images/artist-placeholder.jpg'
  };

  // Mock data for artist's artwork
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
        {/* Artist Profile */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gray-200 flex items-center justify-center h-64 md:h-auto">
              {/* Artist image placeholder */}
              <span className="text-gray-500">Artist Image</span>
            </div>
            <div className="md:w-2/3 p-6">
              <h1 className="text-4xl font-bold mb-4">{artist.name}</h1>
              <p className="text-gray-600 mb-6">{artist.bio}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">{artist.location}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600">{artist.email}</p>
                  <p className="text-gray-600">{artist.website}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artist's Artwork */}
        <h2 className="text-3xl font-bold mb-8">Artwork by {artist.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="card">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                {/* Replace with actual image in production */}
                <span className="text-gray-500">Artwork Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                <p className="text-gray-600 mb-4">{artwork.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${artwork.price.toFixed(2)}</span>
                  <button className="btn-primary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artist's Collections */}
        <h2 className="text-3xl font-bold my-8">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Collection Preview</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">2023 Collection</h3>
              <p className="text-gray-600 mb-4">Recent works exploring urban environments.</p>
              <button className="btn-primary w-full">View Collection</button>
            </div>
          </div>
          <div className="card">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Collection Preview</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Nature Studies</h3>
              <p className="text-gray-600 mb-4">Studies of natural forms and landscapes.</p>
              <button className="btn-primary w-full">View Collection</button>
            </div>
          </div>
          <div className="card">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">3D Gallery</span>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Virtual Exhibition</h3>
              <p className="text-gray-600 mb-4">Explore artworks in a 3D virtual gallery space.</p>
              <button className="btn-primary w-full">Enter 3D Gallery</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 