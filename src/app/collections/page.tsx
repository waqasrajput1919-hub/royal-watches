import { collections } from '@/data/watches'
import Link from 'next/link'

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            ROLEX Collections
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our curated collections of authentic ROLEX timepieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="watch-card rounded-lg overflow-hidden luxury-shadow">
              <img 
                src={collection.image} 
                alt={collection.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{collection.name}</h3>
                <p className="text-gray-400 mb-4">{collection.description}</p>
                <p className="text-gold font-semibold mb-4">{collection.count} Watches Available</p>
                <Link href="/products" className="luxury-button px-6 py-2 rounded-full text-black font-semibold w-full text-center block">
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}