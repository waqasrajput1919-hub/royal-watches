import { Mail, Phone, MessageCircle, MapPin, Award, Clock } from 'lucide-react'

export default function OwnerPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 luxury-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold hero-text mb-4">Meet the Owner</h1>
          <p className="text-xl text-gray-300">The visionary behind ROLEX Watches luxury collection</p>
        </div>

        {/* Owner Profile Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-12 luxury-shadow animate-slide-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center lg:text-left">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden luxury-shadow">
                <img 
                  src="/umra.jpg" 
                  alt="Umar Waqas Rajput - Owner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-2">Umar Waqas Rajput</h2>
                <p className="text-xl text-gold font-semibold mb-4">Owner & CEO</p>
                <p className="text-gray-300 leading-relaxed">
                  Royal Watches is your premier destination for authentic luxury timepieces. We specialize in 
                  genuine Rolex watches with complete authentication and warranty. Our commitment to quality, 
                  authenticity, and customer satisfaction has made us a trusted name in luxury watch retail 
                  across Pakistan and beyond.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gold mb-4">Contact Information</h3>
                
                <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg">
                  <Mail className="text-gold" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Email Address</p>
                    <a href="mailto:umarwaqasrajput552@gmail.com" className="text-white hover:text-gold transition-colors">
                      umarwaqasrajput552@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg">
                  <Phone className="text-gold" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Phone Number</p>
                    <a href="tel:+923016736119" className="text-white hover:text-gold transition-colors">
                      0301 6736 119
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-lg">
                  <MapPin className="text-gold" size={20} />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">Sargodha, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="mailto:umarwaqasrajput552@gmail.com"
                  className="flex items-center justify-center space-x-2 luxury-button px-6 py-3 rounded-full text-black font-semibold"
                >
                  <Mail size={18} />
                  <span>Send Email</span>
                </a>
                
                <a
                  href="https://wa.me/923016736119"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold transition-colors"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl luxury-shadow">
            <Award className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
            <p className="text-gray-300">Years Experience</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl luxury-shadow">
            <Clock className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">5000+</h3>
            <p className="text-gray-300">Watches Sold</p>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black rounded-xl luxury-shadow">
            <MessageCircle className="text-gold mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
            <p className="text-gray-300">Customer Support</p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-gold/10 to-transparent rounded-xl border border-gold/20">
          <blockquote className="text-xl italic text-gray-300 mb-4">
            "Every ROLEX tells a story of precision, luxury, and timeless elegance. 
            Royal Watches is committed to providing authentic timepieces with complete warranty and certification."
          </blockquote>
          <cite className="text-gold font-semibold">- Umar Waqas Rajput, Owner</cite>
        </div>
      </div>
    </div>
  )
}