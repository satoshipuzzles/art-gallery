import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">ArtGallery</Link>
        <div className="flex gap-6">
          <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="/gallery3d" className="hover:text-primary transition-colors">3D Gallery</Link>
          <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
          <Link href="/artist" className="hover:text-primary transition-colors">Artist</Link>
          <Link href="/admin" className="hover:text-primary transition-colors">Admin</Link>
        </div>
      </div>
    </nav>
  );
} 