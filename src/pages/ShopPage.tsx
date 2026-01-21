import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Select } from '../components/ui/Select'
import { Badge } from '../components/ui/Badge'
import { products } from '../data/products'
import { filterProducts, sortProducts, SortOption } from '../data/utils'
import { useWishlistStore } from '../store/wishlistStore'

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [sortBy, setSortBy] = useState<SortOption>('name-asc')
  const [showInStockOnly, setShowInStockOnly] = useState(false)
  const { addItem: addToWishlist, isInWishlist } = useWishlistStore()

  const filtered = filterProducts(products, {
    category: selectedCategory || undefined,
    inStock: showInStockOnly ? true : undefined,
  })
  
  const sorted = sortProducts(filtered, sortBy)

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Shop</h1>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 md:mb-8">
        <div className="flex-1">
          <label htmlFor="category-filter" className="block text-sm text-[#a0a0a0] mb-2">
            Category
          </label>
          <Select 
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
          >
            <option value="">All Categories</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="outerwear">Outerwear</option>
            <option value="accessories">Accessories</option>
            <option value="footwear">Footwear</option>
          </Select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="sort-filter" className="block text-sm text-[#a0a0a0] mb-2">
            Sort By
          </label>
          <Select 
            id="sort-filter"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            aria-label="Sort products"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </Select>
        </div>
        
        <div className="flex items-end">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showInStockOnly}
              onChange={(e) => setShowInStockOnly(e.target.checked)}
              className="w-4 h-4 bg-[#1a1a1a] border-[#333333] rounded focus:ring-2 focus:ring-[#d4af37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
              aria-label="Show only in-stock items"
            />
            <span className="text-sm text-[#a0a0a0]">In Stock Only</span>
          </label>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4 md:mb-6">
        <p className="text-[#a0a0a0]" role="status" aria-live="polite">
          Showing {sorted.length} {sorted.length === 1 ? 'product' : 'products'}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {sorted.map((product) => (
          <Card key={product.id} hover className="overflow-hidden relative group">
            <Link to={`/product/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-60 md:h-80 object-cover"
                loading="lazy"
              />
            </Link>
            
            {/* Wishlist Button */}
            <button
              onClick={() => addToWishlist(product)}
              className="absolute top-3 md:top-4 right-3 md:right-4 p-2 bg-[#0a0a0a] border border-[#333333] rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#1a1a1a] focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
              aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={isInWishlist(product.id)}
            >
              <svg 
                className={`w-4 h-4 md:w-5 md:h-5 ${isInWishlist(product.id) ? 'fill-[#d4af37] text-[#d4af37]' : 'text-white'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
            
            <div className="p-3 md:p-4">
              <Link to={`/product/${product.id}`}>
                <h3 className="text-base md:text-lg font-medium mb-2 hover:text-[#d4af37] transition-colors line-clamp-2">
                  {product.name}
                </h3>
              </Link>
              <div className="flex items-center justify-between">
                <p className="text-[#d4af37] font-medium">${product.price}</p>
                {!product.inStock && (
                  <Badge variant="error">Out of Stock</Badge>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {sorted.length === 0 && (
        <div className="text-center py-12 md:py-20" role="status">
          <p className="text-lg md:text-xl text-[#a0a0a0] mb-4">No products found</p>
          <Button variant="secondary" onClick={() => {
            setSelectedCategory('')
            setShowInStockOnly(false)
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}
