import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">ArtGallery</Link>
            <p className="text-gray-400 mt-2">Showcase your art in a new dimension</p>
          </div>
          <div className="flex gap-6">
            <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link>
            <Link href="/gallery3d" className="text-gray-300 hover:text-white transition-colors">3D Gallery</Link>
            <Link href="/collections" className="text-gray-300 hover:text-white transition-colors">Collections</Link>
            <Link href="/artist" className="text-gray-300 hover:text-white transition-colors">Artist</Link>
            <Link href="/admin" className="text-gray-300 hover:text-white transition-colors">Admin</Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          &copy; {new Date().getFullYear()} ArtGallery. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 