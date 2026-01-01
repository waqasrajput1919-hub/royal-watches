import { watches } from '@/data/watches'
import { Watch } from '@/types'
import Link from 'next/link'
import { Filter, Search } from 'lucide-react'

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            Our Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our complete range of authentic ROLEX timepieces, each representing the pinnacle of Swiss watchmaking excellence.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search watches..."
              className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none"
            />
          </div>
          <select className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-gold focus:outline-none">
            <option value="">All Categories</option>
            <option value="Professional">Professional</option>
            <option value="Classic">Classic</option>
          </select>
          <select className="px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-gold focus:outline-none">
            <option value="">Price Range</option>
            <option value="0-2800000">PKR 0 - 28,00,000</option>
            <option value="2800000-4200000">PKR 28,00,000 - 42,00,000</option>
            <option value="4200000+">PKR 42,00,000+</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {watches.map((watch: Watch) => (
            <div key={watch.id} className="watch-card rounded-lg p-6 luxury-shadow">
              {watch.isNew && (
                <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  NEW ARRIVAL
                </div>
              )}
              <img 
                src={watch.image} 
                alt={watch.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="mb-2">
                <span className="bg-gray-800 text-gold px-2 py-1 rounded text-xs border border-gold/30">
                  {watch.category}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
              <p className="text-gray-400 mb-2">{watch.model}</p>
              <p className="text-2xl font-bold text-gold mb-4">PKR {watch.price.toLocaleString()}</p>
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">{watch.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {watch.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="bg-gray-800 text-gold px-2 py-1 rounded-full text-xs border border-gold/30">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Link href={`/products/${watch.id}`} className="luxury-button px-4 py-2 rounded-full text-black font-semibold flex-1 text-center">
                  View Details
                </Link>
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="border-2 border-gold text-gold px-4 py-2 rounded-full font-semibold hover-gold transition-all text-center">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 py-16 luxury-gradient rounded-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 hero-text">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Contact us for exclusive pieces and personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 rounded-full text-black font-semibold text-lg">
              WhatsApp Us
            </a>
            <Link href="/contact" className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover-gold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}