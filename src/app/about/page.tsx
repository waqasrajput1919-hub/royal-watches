'use client'

import { Award, Shield, Clock, Users, Watch } from 'lucide-react'

export default function AboutPage() {
  const stats = [
    { icon: Clock, label: 'Years of Experience', value: '25+' },
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Awards Won', value: '50+' },
    { icon: Shield, label: 'Warranty Years', value: '5' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About Royal Watches</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over two decades, Royal Watches has been the premier destination for luxury timepieces. 
            We specialize in authentic Rolex watches and provide unmatched expertise in the world of horology.
          </p>
          <div className="mt-8 space-y-2">
            <p className="text-lg text-yellow-400">📍 Sargodha, Punjab, Pakistan</p>
            <p className="text-lg text-yellow-400">📧 umarwaqasrajput552@gmail.com</p>
            <p className="text-lg text-yellow-400">📱 0301 6736 119</p>
            <a 
              href="https://wa.me/923016736119"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500 transition-colors mt-4"
            >
              💬 WhatsApp Message
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-2">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded in 1999, Royal Watches began as a small family business with a passion for 
                exceptional timepieces. Starting with collecting vintage Rolex watches as a hobby, 
                it eventually grew into a full-fledged business.
              </p>
              <p>
                Today, we are recognized as one of the most trusted dealers of authentic luxury watches. 
                Our commitment to authenticity, quality, and customer service has earned us a loyal 
                clientele worldwide.
              </p>
              <p>
                Every watch in our collection is carefully authenticated by our team of experts, 
                ensuring that our customers receive only genuine timepieces with complete documentation 
                and warranty.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1594534475808-b18fc33b045e?w=600&h=400&fit=crop" 
              alt="Luxury watch collection"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
              <p className="text-gray-300">
                Every timepiece is thoroughly authenticated and comes with a certificate of authenticity.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-300">
                We maintain the highest standards in everything we do, from curation to customer service.
              </p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Trust</h3>
              <p className="text-gray-300">
                Building lasting relationships with our customers through transparency and reliability.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-lg mx-auto">
            <div className="bg-gray-900 rounded-lg p-6 text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden border-4 border-yellow-400/50">
                <img 
                  src="/umra.jpg" 
                  alt="Umar Waqas Rajput - Owner"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Umar Waqas Rajput</h3>
              <p className="text-yellow-400 mb-4">Owner & CEO</p>
              <p className="text-gray-300 text-sm mb-4">Passionate luxury watch expert and founder of Royal Watches. With over 25 years of experience in authentic Rolex timepieces, I am dedicated to providing customers with genuine luxury watches, complete authentication, and exceptional service. My commitment to quality and customer satisfaction has made Royal Watches a trusted name in luxury watch retail across Pakistan.</p>
              <div className="space-y-2">
                <a 
                  href="mailto:umarwaqasrajput552@gmail.com"
                  className="block bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition-colors"
                >
                  Send Email
                </a>
                <a 
                  href="https://wa.me/923016736119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition-colors"
                >
                  WhatsApp Message
                </a>
                <p className="text-xs text-gray-400 mt-2">📞 0301 6736 119</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}