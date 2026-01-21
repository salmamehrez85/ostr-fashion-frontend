import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useCartStore } from '../store/cartStore'

export function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20 text-center" role="status">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-[#a0a0a0] mb-8">Add some items to get started.</p>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 md:mb-8 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">Shopping Cart</h1>
        <Button variant="ghost" onClick={clearCart} aria-label="Clear all items from cart">
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={`${item.product.id}-${item.size}-${item.color}`} className="p-3 md:p-4">
              <div className="flex gap-3 md:gap-4">
                <Link to={`/product/${item.product.id}`} className="flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md"
                    loading="lazy"
                  />
                </Link>
                
                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="text-base md:text-lg font-medium mb-2 hover:text-[#d4af37] transition-colors truncate">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-[#a0a0a0] mb-2">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-[#d4af37] font-medium mb-3">${item.product.price}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                        className="w-8 h-8 border border-[#333333] rounded-md hover:border-[#404040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center" role="status" aria-live="polite">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                        className="w-8 h-8 border border-[#333333] rounded-md hover:border-[#404040] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="text-sm text-[#a0a0a0] hover:text-[#ef4444] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded px-2 py-1"
                      aria-label={`Remove ${item.product.name} from cart`}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-right flex-shrink-0">
                  <p className="text-base md:text-lg font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-4 md:p-6 sticky top-4">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-4 md:mb-6">
              <div className="flex justify-between">
                <span className="text-[#a0a0a0]">Items ({totalItems()})</span>
                <span aria-live="polite">${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0a0]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-[#333333] pt-4 flex justify-between text-base md:text-lg font-medium">
                <span>Total</span>
                <span className="text-[#d4af37]" aria-live="polite">${totalPrice().toFixed(2)}</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full mb-3">
              Proceed to Checkout
            </Button>
            <Link to="/shop">
              <Button variant="secondary" size="lg" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  )
}
