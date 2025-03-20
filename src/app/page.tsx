import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Showcase Your Art in a New Dimension</h1>
            <p className="text-lg mb-6 text-gray-600">
              Upload, manage, and sell your artwork in both traditional and immersive 3D galleries.
            </p>
            <div className="flex gap-4">
              <Link href="/gallery" className="btn-primary">Explore Gallery</Link>
              <Link href="/gallery3d" className="btn-secondary">Experience in 3D</Link>
            </div>
          </div>
          <div className="md:w-1/2 relative h-[400px]">
            <div className="absolute top-0 right-0 bg-secondary w-64 h-64 rounded-lg transform translate-x-8 -translate-y-8 opacity-20"></div>
            <div className="absolute bottom-0 left-0 bg-primary w-64 h-64 rounded-lg transform -translate-x-8 translate-y-8 opacity-20"></div>
            <div className="relative z-10 h-full w-full rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder for hero image */}
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600 text-lg">Featured Artwork</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Discover the Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold mb-2">Traditional Gallery</h3>
              <p className="text-gray-600">
                Showcase your artwork in a classic gallery layout with detailed descriptions and purchase options.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">3D Gallery Experience</h3>
              <p className="text-gray-600">
                Create immersive 3D exhibitions where visitors can walk through and experience your art in a virtual space.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-primary text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">Flexible Payments</h3>
              <p className="text-gray-600">
                Accept payments via Stripe for credit cards or Bitcoin with LNbits for a truly modern marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 