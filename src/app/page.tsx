import { watches } from '@/data/watches'
import Link from 'next/link'

export default function Home() {
  const featuredWatches = watches.slice(0, 6)
  
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Ultra Stylish Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-radial from-gold/40 via-gold/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-radial from-purple-500/30 via-gold/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-20 w-[400px] h-[400px] bg-gradient-radial from-blue-500/20 via-gold/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 bg-gradient-radial from-gold/50 via-yellow-400/30 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-pink-500/20 via-gold/25 to-transparent rounded-full blur-2xl animate-pulse delay-1500"></div>
            <div className="absolute top-20 right-1/3 w-48 h-48 bg-gradient-radial from-cyan-500/25 via-gold/20 to-transparent rounded-full blur-2xl animate-pulse delay-3000"></div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-r from-gold to-yellow-400 rounded-full animate-bounce delay-1000 shadow-lg"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce delay-2000 shadow-lg"></div>
          <div className="absolute top-1/2 left-3/4 w-3.5 h-3.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce delay-3000 shadow-lg"></div>
          <div className="absolute top-1/3 right-1/3 w-2.5 h-2.5 bg-gradient-to-r from-gold to-orange-400 rounded-full animate-bounce delay-4000 shadow-lg"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce delay-2500 shadow-lg"></div>
        </div>
        {/* Animated Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gold via-purple-400 to-transparent animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 via-gold to-transparent animate-pulse delay-1000 opacity-60"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-400 via-gold to-transparent animate-pulse delay-2000 opacity-40"></div>
        </div>
        {/* Rotating Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-32 right-32 w-16 h-16 border-2 border-gold/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 border border-purple-400/40 rounded-full animate-spin" style={{animationDuration: '15s'}}></div>
        </div>
      </div>
      
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="text-center max-w-8xl mx-auto px-4">
          {/* Ultra Premium Crown Icon */}
          <div className="mb-16">
            <div className="relative inline-flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-gold to-dark-gold rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold via-yellow-400 to-dark-gold flex items-center justify-center shadow-2xl border-4 border-gold/30">
                <svg className="w-16 h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 7l5.5 4L12 4l3.5 7L21 7l-2 9H5zm2.7-2h8.6l.9-4.4L14 12l-2-4-2 4-3.2-2.4L7.7 14z"/>
                </svg>
              </div>
            </div>
          </div>
          
          {/* Ultra Stylish Main Title */}
          <div className="mb-12">
            <h1 className="text-8xl md:text-[12rem] font-thin mb-6 tracking-[0.2em] leading-none relative">
              <span className="block bg-gradient-to-r from-white via-gold via-purple-300 via-gold to-white bg-clip-text text-transparent drop-shadow-2xl filter font-extralight animate-pulse">
                ROYAL
              </span>
              <span className="block bg-gradient-to-r from-gold via-yellow-300 via-pink-300 via-gold to-yellow-500 bg-clip-text text-transparent font-light animate-pulse delay-500">
                WATCHES
              </span>
            </h1>
            
            {/* Luxury Subtitle */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 via-purple-400/30 via-gold/40 to-transparent h-px top-1/2 animate-pulse"></div>
              <p className="text-3xl md:text-4xl font-extralight text-transparent bg-gradient-to-r from-gold via-purple-300 to-gold bg-clip-text mb-6 tracking-[0.4em] relative bg-black px-12 animate-pulse delay-1000">
                SWISS LUXURY
              </p>
            </div>
            <p className="text-lg text-gray-300 font-extralight tracking-[0.3em] uppercase animate-pulse delay-1500">
              Handcrafted Excellence Since 1905
            </p>
          </div>
          
          {/* Ultra Premium Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gold/30 hover:border-gold/60 transition-all duration-500">
                <div className="text-5xl font-black text-gold mb-3">25+</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest">Years Legacy</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gold/30 hover:border-gold/60 transition-all duration-500">
                <div className="text-5xl font-black text-gold mb-3">5K+</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest">Elite Clients</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gold/30 hover:border-gold/60 transition-all duration-500">
                <div className="text-5xl font-black text-gold mb-3">100%</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest">Authentic</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-gold/30 hover:border-gold/60 transition-all duration-500">
                <div className="text-5xl font-black text-gold mb-3">50+</div>
                <div className="text-xs text-gray-300 uppercase tracking-widest">Awards Won</div>
              </div>
            </div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-gold rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-gold rounded-full mx-auto mt-2 animate-pulse"></div>
            </div>
            <p className="text-xs text-gold mt-2 tracking-widest uppercase">Scroll to Explore</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-16 h-1 bg-gold mx-auto mb-4"></div>
              <h2 className="text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
                  FEATURED
                </span>
                <br />
                <span className="text-white">
                  COLLECTION
                </span>
              </h2>
              <p className="text-xl text-gray-400 font-light tracking-wide">Handpicked Masterpieces of Swiss Excellence</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWatches.map((watch, index) => (
              <div key={watch.id} className="group relative transform hover:scale-105 transition-all duration-1000">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-xl group-hover:blur-2xl group-hover:from-gold/40 group-hover:via-purple-400/30 group-hover:to-cyan-400/30 transition-all duration-1000"></div>
                <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-6 border border-gold/20 hover:border-purple-400/50 transition-all duration-1000 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-8 hover:rotate-1">
                  {/* Ultra Premium Badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-gold via-purple-400 to-cyan-400 text-black px-4 py-2 rounded-full text-xs font-black shadow-2xl border-2 border-gold/50 animate-pulse">
                    LUXURY
                  </div>
                  
                  {/* Watch Image with Ultra Stylish Color Effects */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-gray-700/50 to-gray-800/50 p-2 group-hover:from-gold/30 group-hover:via-purple-500/20 group-hover:to-blue-500/20 transition-all duration-1000">
                    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 p-4 group-hover:from-gold/40 group-hover:via-pink-500/30 group-hover:to-cyan-500/30 transition-all duration-1000">
                      <img 
                        src={watch.image} 
                        alt={watch.name} 
                        className="w-full h-64 object-cover rounded-lg group-hover:scale-125 transition-all duration-1000 shadow-xl cursor-pointer group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-200 group-hover:hue-rotate-15" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-gold/10 rounded-lg group-hover:from-purple-500/30 group-hover:via-pink-400/20 group-hover:to-cyan-400/30 transition-all duration-1000"></div>
                      {/* Multi-color overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-purple-500/0 to-blue-500/0 group-hover:from-gold/30 group-hover:via-purple-400/25 group-hover:to-cyan-400/25 rounded-lg transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>
                      {/* Rainbow shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 rounded-lg transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></div>
                      {/* Rotating color border */}
                      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-gold group-hover:via-purple-400 group-hover:to-cyan-400 transition-all duration-1000"></div>
                    </div>
                  </div>
                  
                  {/* Watch Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 mb-1">
                        {watch.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-light">{watch.model}</p>
                    </div>
                    
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-2xl font-black text-gold">
                          PKR {watch.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Premium Price</p>
                      </div>
                      <div className="text-right">
                        <div className="w-8 h-8 bg-gradient-to-br from-gold to-dark-gold rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Premium CTA Button */}
                    <Link 
                      href={`/products/${watch.id}`} 
                      className="luxury-button px-6 py-3 font-bold w-full text-center block text-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 uppercase tracking-wide"
                    >
                      Explore Masterpiece
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}