import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-[#333333] bg-[#0a0a0a] mt-auto">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">OSTR</h3>
            <p className="text-[#707070] text-sm leading-relaxed">
              Premium fashion for the modern minimalist.
            </p>
          </div>
          
          {/* Shop */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Shop</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/shop" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  Sale
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  Shipping
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-base">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#a0a0a0] hover:text-white transition-colors text-sm">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-[#333333] text-center">
          <p className="text-[#707070] text-sm">
            © {new Date().getFullYear()} OSTR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
