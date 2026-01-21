import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  const baseStyles = 'bg-[#1a1a1a] border border-[#333333] rounded-lg transition-all duration-200'
  const hoverStyles = hover ? 'hover:border-[#404040] hover:shadow-lg cursor-pointer' : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
