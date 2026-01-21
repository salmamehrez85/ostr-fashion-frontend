import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

export function Input({ error, className = '', ...props }: InputProps) {
  const baseStyles = 'w-full px-4 py-2 bg-[#1a1a1a] text-white border rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-[#d4af37] disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-[#707070]'
  
  const borderStyles = error 
    ? 'border-[#ef4444]' 
    : 'border-[#333333] hover:border-[#404040]'
  
  return (
    <input
      className={`${baseStyles} ${borderStyles} ${className}`}
      {...props}
    />
  )
}
