import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useWishlistStore } from '../store/wishlistStore'

export function WishlistPage() {
  const { items, removeItem, clearWishlist } = useWishlistStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-[#a0a0a0] mb-8">Save items you love for later.</p>
        <Link to="/shop">
          <Button>Explore Products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Wishlist</h1>
        <Button variant="ghost" onClick={clearWishlist}>
          Clear Wishlist
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((product) => (
          <Card key={product.id} hover className="overflow-hidden relative group">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-80 object-cover"
              />
            </Link>
            
            {/* Remove Button */}
            <button
              onClick={() => removeItem(product.id)}
              className="absolute top-4 right-4 p-2 bg-[#0a0a0a] border border-[#333333] rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1a1a1a]"
              aria-label="Remove from wishlist"
            >
              <svg className="w-5 h-5 text-[#ef4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-lg font-medium mb-2 hover:text-[#d4af37] transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-[#d4af37] font-medium mb-4">${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <Button size="sm" className="w-full">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
