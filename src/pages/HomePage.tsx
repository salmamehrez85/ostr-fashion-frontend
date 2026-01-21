import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Input } from '../components/ui/Input'
import { Section } from '../components/layout/Section'
import { ProductCard } from '../components/product/ProductCard'
import { products } from '../data/products'

export function HomePage() {
  const [email, setEmail] = useState('')
  const bestSellers = products.filter((p) => p.inStock).slice(0, 8)
  const categories = [
    { name: 'Tops', path: '/shop?category=tops', image: '/img/placeholder.svg' },
    { name: 'Bottoms', path: '/shop?category=bottoms', image: '/img/placeholder.svg' },
    { name: 'Outerwear', path: '/shop?category=outerwear', image: '/img/placeholder.svg' },
    { name: 'Accessories', path: '/shop?category=accessories', image: '/img/placeholder.svg' },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <div>
      {/* Hero Section - Split Layout */}
      <section className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh] py-16 md:py-20">
            {/* Left: Copy */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Timeless <span className="text-[#d4af37]">Elegance</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#a0a0a0] leading-relaxed max-w-xl">
                  Discover curated fashion that speaks to refined taste and lasting quality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Collection
                  </Button>
                </Link>
                <Link to="/shop?filter=new">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    New Arrivals
                  </Button>
                </Link>
              </div>
              <div className="flex gap-8 pt-4 text-sm border-t border-[#333333]">
                <div>
                  <p className="text-[#d4af37] font-bold text-2xl">500+</p>
                  <p className="text-[#707070]">Premium Items</p>
                </div>
                <div>
                  <p className="text-[#d4af37] font-bold text-2xl">10k+</p>
                  <p className="text-[#707070]">Happy Customers</p>
                </div>
                <div>
                  <p className="text-[#d4af37] font-bold text-2xl">4.9</p>
                  <p className="text-[#707070]">Average Rating</p>
                </div>
              </div>
            </div>
            
            {/* Right: Visual */}
            <div className="relative lg:h-[70vh] h-[50vh]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#d4af37]/10 to-transparent rounded-2xl" />
              <img 
                src="/img/placeholder.svg" 
                alt="Hero fashion"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <Section spacing="lg">
        <h2 className="text-center mb-12 md:mb-16">Shop by Category</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Card hover className="group overflow-hidden">
                <div className="relative overflow-hidden bg-[#0a0a0a]">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">{category.name}</h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Best Sellers Section */}
      <Section variant="alternate" spacing="lg">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="mb-4">Best Sellers</h2>
          <p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto">
            Our most-loved pieces, chosen by customers who value exceptional design.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12 md:mt-16">
          <Link to="/shop">
            <Button variant="secondary" size="lg">View All Products</Button>
          </Link>
        </div>
      </Section>

      {/* Brand Story Strip */}
      <Section spacing="lg">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-2xl" />
            <img 
              src="/img/placeholder.svg" 
              alt="Our story"
              className="w-full h-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2>Our Philosophy</h2>
            <p className="text-lg text-[#a0a0a0] leading-relaxed">
              At OSTR, we believe in fashion that transcends trends. Each piece is 
              carefully selected to embody timeless elegance and superior craftsmanship.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Premium Quality', desc: 'Only the finest materials and construction' },
                { title: 'Timeless Design', desc: 'Pieces that remain relevant season after season' },
                { title: 'Sustainable Choice', desc: 'Conscious sourcing and ethical production' },
                { title: 'Customer First', desc: 'Exceptional service and satisfaction guaranteed' },
              ].map((value) => (
                <li key={value.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#d4af37] mt-2" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                    <p className="text-[#a0a0a0]">{value.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section variant="alternate" spacing="md">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4">Stay Updated</h2>
          <p className="text-lg text-[#a0a0a0] mb-8">
            Subscribe to receive exclusive offers, style tips, and early access to new collections.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              aria-label="Email address"
            />
            <Button type="submit" size="lg" className="sm:w-auto w-full">
              Subscribe
            </Button>
          </form>
          <p className="text-sm text-[#707070] mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Section>
    </div>
  )
}
