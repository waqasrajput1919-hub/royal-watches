import { watches } from '@/data/watches'
import { Watch } from '@/types'
import Link from 'next/link'

export default function NewArrivalsPage() {
  const newWatches = watches.filter(watch => watch.isNew)
  
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            New Arrivals
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our latest collection of authentic ROLEX timepieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newWatches.map((watch: Watch) => (
            <div key={watch.id} className="watch-card rounded-lg p-6 luxury-shadow">
              <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                NEW ARRIVAL
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
                {watch.features.slice(0, 2).map((feature, index) => (
                  <span key={index} className="bg-gray-800 text-gold px-3 py-1 rounded-full text-xs border border-gold/30">
                    {feature}
                  </span>
                ))}
              </div>
              <Link href={`/products/${watch.id}`} className="luxury-button px-6 py-2 rounded-full text-black font-semibold w-full text-center block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}