import { Link } from 'react-router-dom'
import { Card } from '../ui/Card'

interface Product {
  id: string
  name: string
  price: number
  image: string
  inStock?: boolean
}

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className={className}>
      <Card hover className="group overflow-hidden h-full">
        <div className="relative overflow-hidden bg-[#0a0a0a]">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white text-sm font-medium px-3 py-1 bg-[#1a1a1a] rounded-md border border-[#333333]">
                Out of Stock
              </span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-[#d4af37] transition-colors">
            {product.name}
          </h3>
          <p className="text-[#d4af37] font-semibold text-lg">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Card>
    </Link>
  )
}
