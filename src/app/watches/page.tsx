'use client'
import { useState } from 'react'
import { watches } from '@/data/watches'
import { Watch } from '@/types'
import { Filter, Grid, List, Search } from 'lucide-react'

export default function WatchesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('name')

  const categories = ['All', 'Professional', 'Classic']

  const filteredWatches = watches
    .filter(watch => 
      watch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      watch.model.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(watch => selectedCategory === 'All' || watch.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price
        case 'price-high': return b.price - a.price
        case 'name': return a.name.localeCompare(b.name)
        default: return 0
      }
    })

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Our Watch Collection</h1>
          <p className="text-gray-300">Discover our exclusive range of luxury timepieces</p>
        </div>

        {/* Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search watches..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <select
              className="px-4 py-2 bg-gray-800 rounded-lg text-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
              className="px-4 py-2 bg-gray-800 rounded-lg text-white"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>

            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'bg-gray-800'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-yellow-400 text-black' : 'bg-gray-800'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-400">{filteredWatches.length} watches found</p>
        </div>

        {/* Watch Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
          : 'space-y-6'
        }>
          {filteredWatches.map((watch: Watch) => (
            <div key={watch.id} className={`bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors ${
              viewMode === 'list' ? 'flex' : ''
            }`}>
              <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
                <img 
                  src={watch.image} 
                  alt={watch.name}
                  className={`w-full object-cover ${viewMode === 'list' ? 'h-48' : 'h-64'}`}
                />
              </div>
              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{watch.name}</h3>
                  {watch.isNew && (
                    <span className="bg-yellow-400 text-black px-2 py-1 rounded text-xs font-semibold">
                      NEW
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-2">{watch.model}</p>
                <p className="text-2xl font-bold text-yellow-400 mb-4">PKR {watch.price.toLocaleString()}</p>
                <p className="text-gray-300 text-sm mb-4">{watch.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {watch.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-700 px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}