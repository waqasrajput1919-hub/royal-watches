'use client'

import { useState } from 'react'
import { Send, Phone, Mail, User, MessageSquare } from 'lucide-react'

export default function SendProduct() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productName: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // WhatsApp message format
    const whatsappMessage = `*New Product Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Product:* ${formData.productName}%0A*Message:* ${formData.message}`
    
    // Replace with your WhatsApp number
    const whatsappUrl = `https://wa.me/923016736119?text=${whatsappMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-black text-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 hero-text">Send Product Inquiry</h1>
          <p className="text-xl text-gray-300">
            Interested in a specific ROLEX? Send us your inquiry and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="watch-card rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gold">Product Inquiry Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Product of Interest *
                </label>
                <select
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white"
                >
                  <option value="">Select a ROLEX model</option>
                  <option value="ROLEX Submariner">ROLEX Submariner</option>
                  <option value="ROLEX Daytona">ROLEX Daytona</option>
                  <option value="ROLEX GMT-Master II">ROLEX GMT-Master II</option>
                  <option value="ROLEX Datejust 41">ROLEX Datejust 41</option>
                  <option value="ROLEX Sea-Dweller">ROLEX Sea-Dweller</option>
                  <option value="ROLEX Explorer II">ROLEX Explorer II</option>
                  <option value="Other ROLEX Model">Other ROLEX Model</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent text-white resize-none"
                  placeholder="Tell us more about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full luxury-button px-6 py-4 rounded-lg text-black font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="watch-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gold">Why Choose Royal Watches?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">100% Authentic</h3>
                    <p className="text-gray-400 text-sm">All our ROLEX watches are guaranteed authentic with proper documentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Service</h3>
                    <p className="text-gray-400 text-sm">Our team has years of experience in luxury timepieces.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">Competitive Pricing</h3>
                    <p className="text-gray-400 text-sm">Best prices in Pakistan for authentic ROLEX watches.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold mb-1">After-Sales Support</h3>
                    <p className="text-gray-400 text-sm">Complete support and maintenance services.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="watch-card rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+923016736119" className="text-gray-400 hover:text-gold transition-colors">
                      +92 301 6736 119
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-gold" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:umarwaqasrajput552@gmail.com" className="text-gray-400 hover:text-gold transition-colors">
                      umarwaqasrajput552@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}