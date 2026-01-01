import Link from 'next/link'
import { MessageCircle, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold hero-text">
                ROLEX
              </div>
              <div className="text-sm text-gold font-light">
                WATCHES
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the world of ROLEX luxury watches. Premium collection of authentic timepieces with unmatched craftsmanship and precision.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                About ROLEX
              </Link>
              <Link href="/collections" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Collections
              </Link>
              <Link href="/products" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                All Products
              </Link>
              <Link href="/new-arrivals" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Services</h3>
            <div className="space-y-2">
              <Link href="/luxury" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Luxury Watches
              </Link>
              <Link href="/send-product" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Send Product Inquiry
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/owner" className="block text-gray-300 hover:text-gold transition-colors text-sm">
                Meet the Owner
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gold" />
                <span className="text-gray-300 text-sm">umarwaqasrajput552@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gold" />
                <span className="text-gray-300 text-sm">+92 301 6736 119</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-gold" />
                <span className="text-gray-300 text-sm">Sargodha, Punjab, Pakistan</span>
              </div>
              <a
                href="https://wa.me/923016736119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 luxury-button px-4 py-2 text-black font-semibold w-fit"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 ROLEX Watches. All rights reserved. | Demo Educational Website
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
        
        {/* Developer Credit Box */}
        <div className="mt-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/30 to-red-500/30 rounded-2xl blur-lg"></div>
            <div className="relative bg-gradient-to-r from-gold via-red-500 to-gold p-6 rounded-2xl border-2 border-gold/50 shadow-2xl">
              <div className="text-center">
                <h3 className="text-black font-black text-xl mb-2 tracking-wide">DEVELOPED BY</h3>
                <p className="text-black font-bold text-2xl tracking-wider">UMAR WAQAS RAJPUT</p>
                <p className="text-black/80 font-semibold text-lg mt-1">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}