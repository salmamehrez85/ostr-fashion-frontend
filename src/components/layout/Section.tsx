import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'alternate'
  spacing?: 'sm' | 'md' | 'lg'
  container?: boolean
}

export function Section({ 
  children, 
  className = '', 
  variant = 'default',
  spacing = 'lg',
  container = true
}: SectionProps) {
  const spacingClasses = {
    sm: 'py-12',
    md: 'py-16 md:py-20',
    lg: 'py-16 md:py-24 lg:py-28'
  }
  
  const variantClasses = {
    default: 'bg-[#0a0a0a]',
    alternate: 'bg-[#1a1a1a]'
  }
  
  return (
    <section 
      className={`${spacingClasses[spacing]} ${variantClasses[variant]} ${className}`}
    >
      {container ? (
        <div className="container-content">
          {children}
        </div>
      ) : children}
    </section>
  )
}
