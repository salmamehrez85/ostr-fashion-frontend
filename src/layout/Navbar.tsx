import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-[#333333] bg-[#0a0a0a]" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-[#d4af37] hover:text-[#e5c158] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded"
            aria-label="OSTR Home"
          >
            OSTR
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-[#a0a0a0] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded px-2 py-1"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="text-[#a0a0a0] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded px-2 py-1"
            >
              Shop
            </Link>
          </div>
          
          {/* Desktop Search */}
          <div className="hidden lg:block w-64">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="py-1.5"
              aria-label="Search products"
            />
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/wishlist" 
              className="text-[#a0a0a0] hover:text-white transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded p-1"
              aria-label="Wishlist"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            
            <Link 
              to="/cart" 
              className="text-[#a0a0a0] hover:text-white transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded p-1"
              aria-label="Shopping cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            <Link 
              to="/login" 
              className="hidden sm:flex text-[#a0a0a0] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded p-1"
              aria-label="Account"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#a0a0a0] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] rounded p-1"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#333333]" role="menu">
            <div className="space-y-4">
              <Link 
                to="/" 
                className="block text-[#a0a0a0] hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="block text-[#a0a0a0] hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Shop
              </Link>
              <Link 
                to="/login" 
                className="block text-[#a0a0a0] hover:text-white transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded sm:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Account
              </Link>
              <div className="lg:hidden pt-4">
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  aria-label="Search products"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
