import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'

export function Navbar() {
  return (
    <nav className="border-b border-[#333333] bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-[#d4af37] hover:text-[#e5c158] transition-colors">
            OSTR
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#a0a0a0] hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-[#a0a0a0] hover:text-white transition-colors">
              Shop
            </Link>
          </div>
          
          {/* Search */}
          <div className="hidden md:block w-64">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="py-1.5"
            />
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/wishlist" 
              className="text-[#a0a0a0] hover:text-white transition-colors relative"
              aria-label="Wishlist"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            
            <Link 
              to="/cart" 
              className="text-[#a0a0a0] hover:text-white transition-colors relative"
              aria-label="Cart"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </Link>
            
            <Link 
              to="/login" 
              className="text-[#a0a0a0] hover:text-white transition-colors"
              aria-label="Account"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
