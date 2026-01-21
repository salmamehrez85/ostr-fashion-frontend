import { HTMLAttributes, ReactNode } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'default' | 'accent' | 'success' | 'error'
}

export function Badge({ children, variant = 'default', className = '', ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
  
  const variants = {
    default: 'bg-[#2a2a2a] text-[#a0a0a0] border border-[#333333]',
    accent: 'bg-[#d4af3720] text-[#d4af37] border border-[#d4af3740]',
    success: 'bg-[#10b98120] text-[#10b981] border border-[#10b98140]',
    error: 'bg-[#ef444420] text-[#ef4444] border border-[#ef444440]',
  }
  
  return (
    <span
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
