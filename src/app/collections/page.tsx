import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CollectionsPage() {
  // Mock data for collections
  const collections = [
    {
      id: '1',
      name: 'Abstract Geometries',
      description: 'A collection of abstract works featuring geometric shapes and bold colors.',
      is3dGallery: true,
      artworkCount: 8,
      artist: 'Jane Smith',
      coverImageUrl: '/images/collection1.jpg',
    },
    {
      id: '2',
      name: 'Urban Landscapes',
      description: 'Cityscapes and architectural studies exploring the modern urban environment.',
      is3dGallery: false,
      artworkCount: 12,
      artist: 'John Doe',
      coverImageUrl: '/images/collection2.jpg',
    },
    {
      id: '3',
      name: 'Nature Studies',
      description: 'Detailed studies of natural forms, flora, and landscapes.',
      is3dGallery: true,
      artworkCount: 10,
      artist: 'Jane Smith',
      coverImageUrl: '/images/collection3.jpg',
    },
    {
      id: '4',
      name: 'Portrait Series',
      description: 'A series of expressive portraits exploring identity and emotion.',
      is3dGallery: false,
      artworkCount: 6,
      artist: 'Sarah Johnson',
      coverImageUrl: '/images/collection4.jpg',
    },
    {
      id: '5',
      name: 'Digital Dreams',
      description: 'Digital artworks exploring the intersection of technology and creativity.',
      is3dGallery: true,
      artworkCount: 9,
      artist: 'Michael Chen',
      coverImageUrl: '/images/collection5.jpg',
    },
    {
      id: '6',
      name: 'Mixed Media Explorations',
      description: 'Works combining various media and techniques to create textured compositions.',
      is3dGallery: false,
      artworkCount: 7,
      artist: 'Alex Rivera',
      coverImageUrl: '/images/collection6.jpg',
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Art Collections</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore curated collections of artwork, from traditional galleries to immersive 3D experiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div key={collection.id} className="card group">
              <div className="h-64 bg-gray-200 flex items-center justify-center relative overflow-hidden">
                {/* Replace with actual image in production */}
                <span className="text-gray-500">Collection Cover</span>
                
                {/* 3D gallery badge */}
                {collection.is3dGallery && (
                  <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    3D Gallery
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{collection.name}</h2>
                  <span className="text-gray-500 text-sm">{collection.artworkCount} artworks</span>
                </div>
                <p className="text-gray-600 mb-4">{collection.description}</p>
                <p className="text-primary mb-4 text-sm font-medium">By {collection.artist}</p>
                <div className="flex gap-2">
                  <Link href={`/collections/${collection.id}`} className="btn-primary flex-1 text-center">
                    View Collection
                  </Link>
                  {collection.is3dGallery && (
                    <Link href={`/gallery3d/${collection.id}`} className="btn-secondary flex-1 text-center">
                      Enter 3D Gallery
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create a collection CTA */}
        <div className="bg-gray-100 rounded-lg p-8 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Create Your Own Collection</h2>
            <p className="text-lg text-gray-600 mb-8">
              Showcase your artwork in a curated collection or create an immersive 3D gallery experience for your viewers.
            </p>
            <Link href="/admin/collections/new" className="btn-primary text-lg px-8 py-3">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
} 