import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useCartStore } from '../store/cartStore'

export function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-[#a0a0a0] mb-8">Add some items to get started.</p>
        <Link to="/shop">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>
        <Button variant="ghost" onClick={clearCart}>
          Clear Cart
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={`${item.product.id}-${item.size}-${item.color}`} className="p-4">
              <div className="flex gap-4">
                <Link to={`/product/${item.product.id}`}>
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </Link>
                
                <div className="flex-1">
                  <Link to={`/product/${item.product.id}`}>
                    <h3 className="text-lg font-medium mb-2 hover:text-[#d4af37] transition-colors">
                      {item.product.name}
                    </h3>
                  </Link>
                  <p className="text-sm text-[#a0a0a0] mb-2">
                    Size: {item.size} | Color: {item.color}
                  </p>
                  <p className="text-[#d4af37] font-medium mb-3">${item.product.price}</p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                        className="w-8 h-8 border border-[#333333] rounded-md hover:border-[#404040] transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                        className="w-8 h-8 border border-[#333333] rounded-md hover:border-[#404040] transition-colors"
                      >
                        +
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.product.id, item.size, item.color)}
                      className="text-sm text-[#a0a0a0] hover:text-[#ef4444] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="text-lg font-medium">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-6 sticky top-4">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-[#a0a0a0]">Items ({totalItems()})</span>
                <span>${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#a0a0a0]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-[#333333] pt-4 flex justify-between text-lg font-medium">
                <span>Total</span>
                <span className="text-[#d4af37]">${totalPrice().toFixed(2)}</span>
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
