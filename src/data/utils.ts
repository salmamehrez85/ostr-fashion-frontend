import { Product } from '../data/products'

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

export interface FilterOptions {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  sizes?: string[]
  colors?: string[]
  search?: string
}

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  return products.filter((product) => {
    if (filters.category && product.category !== filters.category) {
      return false
    }
    
    if (filters.minPrice !== undefined && product.price < filters.minPrice) {
      return false
    }
    
    if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
      return false
    }
    
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) {
      return false
    }
    
    if (filters.sizes && filters.sizes.length > 0) {
      if (!filters.sizes.some((size) => product.sizes.includes(size))) {
        return false
      }
    }
    
    if (filters.colors && filters.colors.length > 0) {
      if (!filters.colors.some((color) => product.colors.includes(color))) {
        return false
      }
    }
    
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      const nameMatch = product.name.toLowerCase().includes(searchLower)
      const categoryMatch = product.category.toLowerCase().includes(searchLower)
      const descriptionMatch = product.description.toLowerCase().includes(searchLower)
      
      if (!nameMatch && !categoryMatch && !descriptionMatch) {
        return false
      }
    }
    
    return true
  })
}

export function sortProducts(products: Product[], sortBy: SortOption): Product[] {
  const sorted = [...products]
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    default:
      return sorted
  }
}

export function getUniqueCategories(products: Product[]): string[] {
  return Array.from(new Set(products.map((p) => p.category)))
}

export function getUniqueSizes(products: Product[]): string[] {
  const allSizes = products.flatMap((p) => p.sizes)
  return Array.from(new Set(allSizes))
}

export function getUniqueColors(products: Product[]): string[] {
  const allColors = products.flatMap((p) => p.colors)
  return Array.from(new Set(allColors))
}

export function getPriceRange(products: Product[]): { min: number; max: number } {
  if (products.length === 0) {
    return { min: 0, max: 0 }
  }
  
  const prices = products.map((p) => p.price)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}
