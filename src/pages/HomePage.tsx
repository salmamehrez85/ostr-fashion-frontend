import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { products } from '../data/products'

export function HomePage() {
  const bestSellers = products.filter((p) => p.inStock).slice(0, 4)
  const categories = [
    { name: 'Tops', path: '/shop?category=tops', image: 'https://via.placeholder.com/300x400/1a1a1a/d4af37?text=Tops' },
    { name: 'Bottoms', path: '/shop?category=bottoms', image: 'https://via.placeholder.com/300x400/1a1a1a/d4af37?text=Bottoms' },
    { name: 'Outerwear', path: '/shop?category=outerwear', image: 'https://via.placeholder.com/300x400/1a1a1a/d4af37?text=Outerwear' },
    { name: 'Accessories', path: '/shop?category=accessories', image: 'https://via.placeholder.com/300x400/1a1a1a/d4af37?text=Accessories' },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[600px] bg-[#1a1a1a] flex items-center justify-center px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-white">
            Minimal. Elegant. Timeless.
          </h1>
          <p className="text-lg md:text-xl text-[#a0a0a0] mb-6 md:mb-8 max-w-2xl mx-auto">
            Premium fashion for those who appreciate refined simplicity.
          </p>
          <Link to="/shop">
            <Button size="lg">Explore Collection</Button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Card hover className="overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-60 md:h-80 object-cover"
                  loading="lazy"
                />
                <div className="p-3 md:p-4 text-center">
                  <h3 className="text-lg md:text-xl font-medium">{category.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-[#1a1a1a] py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Best Sellers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card hover className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-60 md:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 md:p-4">
                    <h3 className="text-base md:text-lg font-medium mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-[#d4af37] font-medium">${product.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <Link to="/shop">
              <Button variant="secondary" size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
