'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About ROLEX', href: '/about' },
    { name: 'Collections', href: '/collections' },
    { name: 'All Products', href: '/products' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Luxury Watches', href: '/luxury' },
    { name: 'Send Product', href: '/send-product' },
    { name: 'Contact', href: '/contact' },
    { name: 'Owner', href: '/owner' },
  ]

  return (
    <>
      <header className="fixed top-0 w-full z-50 navbar-blur border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex flex-col">
                <div className="text-3xl font-black tracking-wider bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  ROLEX
                </div>
                <div className="text-sm text-gold font-light tracking-widest -mt-1">
                  WATCHES
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="luxury-button px-4 py-2 font-semibold text-sm"
                >
                  {item.name}
                </Link>
              ))}
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/923016736119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 luxury-button px-4 py-2 font-semibold"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg border-t border-gold/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="luxury-button px-4 py-2 font-semibold block text-center mb-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <a
                href="https://wa.me/923016736119"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 luxury-button px-4 py-3 font-semibold w-fit"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/923016736119"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float flex items-center justify-center"
        title="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  )
}