'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Simple dashboard card component
function DashboardCard({ title, value, icon, bgColor }) {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${bgColor}`}>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-white text-sm opacity-80 mb-1">{title}</p>
            <h3 className="text-white text-2xl font-bold">{value}</h3>
          </div>
          <div className="text-white text-3xl opacity-70">{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Stats for the dashboard
  const stats = {
    totalArtworks: 24,
    totalCollections: 5,
    totalSales: '$4,250.00',
    pendingOrders: 3,
  };

  // Mock data for recent sales
  const recentSales = [
    { id: '1', artwork: 'Abstract Composition', customer: 'John D.', date: '2023-11-15', amount: '$499.99', status: 'Delivered' },
    { id: '2', artwork: 'Urban Landscape', customer: 'Sarah M.', date: '2023-11-12', amount: '$699.99', status: 'Shipped' },
    { id: '3', artwork: 'Nature Study', customer: 'Michael P.', date: '2023-11-10', amount: '$599.99', status: 'Processing' },
  ];

  // Mock data for recent artworks
  const recentArtworks = [
    { id: '1', title: 'Abstract Composition', date: '2023-11-08', views: 145, likes: 24 },
    { id: '2', title: 'Urban Landscape', date: '2023-11-05', views: 98, likes: 15 },
    { id: '3', title: 'Nature Study', date: '2023-11-01', views: 120, likes: 19 },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-3">
            <Link href="/admin/artworks/new" className="btn-primary">
              Add Artwork
            </Link>
            <Link href="/admin/collections/new" className="btn-secondary">
              Create Collection
            </Link>
          </div>
        </div>
        
        {/* Admin navigation tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'dashboard' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('artworks')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'artworks' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Artworks
            </button>
            <button 
              onClick={() => setActiveTab('collections')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'collections' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Collections
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'orders' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Orders
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings' 
                  ? 'border-primary text-primary' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
        
        {activeTab === 'dashboard' && (
          <div>
            {/* Stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <DashboardCard 
                title="Total Artworks" 
                value={stats.totalArtworks} 
                icon="🖼️" 
                bgColor="bg-blue-600" 
              />
              <DashboardCard 
                title="Collections" 
                value={stats.totalCollections} 
                icon="📚" 
                bgColor="bg-purple-600" 
              />
              <DashboardCard 
                title="Total Sales" 
                value={stats.totalSales} 
                icon="💰" 
                bgColor="bg-green-600" 
              />
              <DashboardCard 
                title="Pending Orders" 
                value={stats.pendingOrders} 
                icon="📦" 
                bgColor="bg-amber-600" 
              />
            </div>
            
            {/* Recent sales */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Recent Sales</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Artwork</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                      <tr key={sale.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{sale.artwork}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{sale.customer}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{sale.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{sale.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${sale.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                              sale.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'}`}>
                            {sale.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/admin/orders" className="text-primary text-sm font-medium hover:underline">
                  View all orders →
                </Link>
              </div>
            </div>
            
            {/* Recent artworks */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold">Recently Added Artworks</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Added</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Likes</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentArtworks.map((artwork) => (
                      <tr key={artwork.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{artwork.title}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{artwork.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{artwork.views}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{artwork.likes}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <Link href={`/admin/artworks/${artwork.id}/edit`} className="text-primary hover:underline mr-4">
                            Edit
                          </Link>
                          <button className="text-red-500 hover:underline">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-4 border-t border-gray-200">
                <Link href="/admin/artworks" className="text-primary text-sm font-medium hover:underline">
                  View all artworks →
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {/* We would include the other tabs' content here */}
        {activeTab !== 'dashboard' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-500">This is a placeholder for the {activeTab} tab content.</p>
            <p className="mt-2">In a complete implementation, this would display the {activeTab} management interface.</p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
} 