import { watches } from '@/data/watches'
import { Watch } from '@/types'
import Link from 'next/link'
import { Star, Crown, Diamond, Award } from 'lucide-react'

export default function LuxuryWatches() {
  const luxuryWatches = watches.filter(watch => watch.price > 500000)
  
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Crown className="w-16 h-16 text-gold" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text">
            LUXURY COLLECTION
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our most exclusive and prestigious ROLEX timepieces. Each watch represents the pinnacle of Swiss craftsmanship and luxury.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Diamond className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
              <p className="text-gray-400">18k Gold, Platinum, and Precious Stones</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Limited Edition</h3>
              <p className="text-gray-400">Rare and Exclusive Collections</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Master Craftsmanship</h3>
              <p className="text-gray-400">Hand-assembled by Swiss Masters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Watches Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryWatches.map((watch: Watch) => (
              <div key={watch.id} className="watch-card rounded-lg p-6 luxury-shadow">
                <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                  LUXURY
                </div>
                <img 
                  src={watch.image} 
                  alt={watch.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                <p className="text-gray-400 mb-2">{watch.model}</p>
                <p className="text-2xl font-bold text-gold mb-4">PKR {watch.price.toLocaleString()}</p>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{watch.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {watch.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="bg-gray-800 text-gold px-3 py-1 rounded-full text-xs border border-gold/30">
                      {feature}
                    </span>
                  ))}
                </div>
                <Link href={`/products/${watch.id}`} className="luxury-button px-6 py-2 text-black font-semibold w-full text-center block">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 luxury-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Experience True Luxury</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to explore our exclusive luxury collection and find your perfect timepiece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/923016736119" target="_blank" rel="noopener noreferrer" className="luxury-button px-8 py-4 text-black font-semibold text-lg">
              WhatsApp Us
            </a>
            <Link href="/contact" className="border-2 border-gold text-gold px-8 py-4 font-semibold text-lg hover-gold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}