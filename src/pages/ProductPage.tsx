import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { useWishlistStore } from '../store/wishlistStore'

export function ProductPage() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [quantity, setQuantity] = useState(1)
  
  const { addItem: addToCart } = useCartStore()
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlistStore()

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20 text-center" role="alert">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Product Not Found</h1>
        <p className="text-[#a0a0a0] mb-8">The product you're looking for doesn't exist.</p>
        <Link to="/shop">
          <Button>Back to Shop</Button>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color')
      return
    }
    addToCart(product, selectedSize, selectedColor, quantity)
  }

  const handleWishlistToggle = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-4 md:mb-6 text-sm">
        <ol className="flex flex-wrap items-center space-x-2">
          <li>
            <Link to="/" className="text-[#a0a0a0] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#707070]">/</li>
          <li>
            <Link to="/shop" className="text-[#a0a0a0] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded">
              Shop
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#707070]">/</li>
          <li aria-current="page" className="text-white">{product.name}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Product Image */}
        <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl md:text-3xl text-[#d4af37] font-medium mb-4 md:mb-6">${product.price}</p>
          
          {!product.inStock && (
            <Badge variant="error" className="mb-4">Out of Stock</Badge>
          )}
          
          <p className="text-[#a0a0a0] mb-6 md:mb-8">{product.description}</p>

          {/* Size Selection */}
          <fieldset className="mb-6">
            <legend className="block text-sm font-medium mb-3">Size</legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 md:px-4 py-2 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                    selectedSize === size
                      ? 'border-[#d4af37] bg-[#d4af3720] text-[#d4af37]'
                      : 'border-[#333333] hover:border-[#404040]'
                  }`}
                  role="radio"
                  aria-checked={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Color Selection */}
          <fieldset className="mb-6">
            <legend className="block text-sm font-medium mb-3">Color</legend>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 md:px-4 py-2 border rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#d4af37] ${
                    selectedColor === color
                      ? 'border-[#d4af37] bg-[#d4af3720] text-[#d4af37]'
                      : 'border-[#333333] hover:border-[#404040]'
                  }`}
                  role="radio"
                  aria-checked={selectedColor === color}
                >
                  {color}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Quantity */}
          <div className="mb-6 md:mb-8">
            <label htmlFor="quantity" className="block text-sm font-medium mb-3">
              Quantity
            </label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-[#333333] rounded-md hover:border-[#404040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span id="quantity" className="text-lg font-medium w-12 text-center" role="status" aria-live="polite">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-[#333333] rounded-md hover:border-[#404040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
            <Button 
              size="lg" 
              className="flex-1"
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              Add to Cart
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={handleWishlistToggle}
              aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={isInWishlist(product.id)}
            >
              <svg 
                className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-current' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Button>
          </div>

          {/* Category */}
          <div className="text-sm text-[#a0a0a0]">
            Category: <span className="text-white capitalize">{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
