'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useTexture } from '@react-three/drei';

// Simple Wall component for the gallery
function Wall({ position, rotation, size = [10, 4, 0.1] }: { position: [number, number, number], rotation: [number, number, number], size?: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
}

// Artwork Frame component
function ArtworkFrame({ position, rotation, size = [2, 1.5, 0.05], artwork }: { 
  position: [number, number, number], 
  rotation: [number, number, number], 
  size?: [number, number, number],
  artwork: any 
}) {
  const texture = useTexture('/images/placeholder1.jpg');
  
  return (
    <group position={position} rotation={rotation}>
      {/* Frame */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[size[0] + 0.1, size[1] + 0.1, size[2]]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* Artwork */}
      <mesh position={[0, 0, size[2] + 0.01]}>
        <planeGeometry args={[size[0] - 0.1, size[1] - 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
      {/* Artwork info label - would be displayed on click in real implementation */}
      {artwork && (
        <mesh position={[0, -size[1]/2 - 0.3, size[2] + 0.01]}>
          <planeGeometry args={[size[0] - 0.2, 0.3]} />
          <meshBasicMaterial color="#f0f0f0" />
        </mesh>
      )}
    </group>
  );
}

// Gallery Room component
function GalleryRoom() {
  const artworks = [
    { id: '1', title: 'Abstract Composition', artist: 'Artist Name' },
    { id: '2', title: 'Urban Landscape', artist: 'Artist Name' },
    { id: '3', title: 'Nature Study', artist: 'Artist Name' },
    { id: '4', title: 'Portrait Series', artist: 'Artist Name' },
  ];

  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#CCC" />
      </mesh>
      
      {/* Walls */}
      <Wall position={[0, 0, -5]} rotation={[0, 0, 0]} />
      <Wall position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />
      <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
      
      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 2, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#EEE" />
      </mesh>
      
      {/* Artworks */}
      <ArtworkFrame position={[0, 0, -4.9]} rotation={[0, 0, 0]} artwork={artworks[0]} />
      <ArtworkFrame position={[-4.9, 0, -2]} rotation={[0, Math.PI / 2, 0]} artwork={artworks[1]} />
      <ArtworkFrame position={[4.9, 0, -2]} rotation={[0, -Math.PI / 2, 0]} artwork={artworks[2]} />
      <ArtworkFrame position={[0, 0, 4.9]} rotation={[0, Math.PI, 0]} artwork={artworks[3]} />
      
      {/* Add lighting */}
      <ambientLight intensity={0.8} />
      <spotLight position={[0, 5, 0]} angle={0.3} penumbra={1} intensity={0.8} castShadow />
      
      {/* Controls */}
      <OrbitControls 
        minDistance={1} 
        maxDistance={8}
        maxPolarAngle={Math.PI / 2}
      />
      <Environment preset="city" />
    </>
  );
}

export default function Gallery3DPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">3D Gallery Experience</h1>
        <p className="mb-6 text-gray-600">Navigate through the 3D space to explore the artwork. Use mouse to rotate, scroll to zoom, and right-click to pan.</p>
        
        <div className="h-[70vh] bg-gray-100 rounded-lg overflow-hidden">
          <Canvas camera={{ position: [0, 0, 2], fov: 70 }}>
            <GalleryRoom />
          </Canvas>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 