import { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  hover?: boolean
}

export function Card({ children, hover = false, className = '', ...props }: CardProps) {
  const baseStyles = 'bg-[#1a1a1a] border border-[#333333] rounded-lg transition-all duration-300'
  const hoverStyles = hover 
    ? 'hover:border-[#404040] hover:shadow-[0_8px_30px_rgba(212,175,55,0.12)] hover:-translate-y-1 cursor-pointer' 
    : ''
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
