import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/ui/Input'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login - no backend
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Login</h1>
        
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-[#1a1a1a] border-[#333333] rounded focus:ring-2 focus:ring-[#d4af37]"
                />
                <span className="text-sm text-[#a0a0a0]">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#d4af37] hover:text-[#e5c158]">
                Forgot password?
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#a0a0a0]">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#d4af37] hover:text-[#e5c158]">
                Register
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
