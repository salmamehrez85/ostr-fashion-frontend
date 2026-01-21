import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Breadcrumb {
  label: string
  path: string
}

interface PageHeaderProps {
  title: string
  subtitle?: string
  breadcrumbs?: Breadcrumb[]
  actions?: ReactNode
  centered?: boolean
}

export function PageHeader({ 
  title, 
  subtitle, 
  breadcrumbs, 
  actions,
  centered = false 
}: PageHeaderProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-8 md:mb-12`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className={`flex items-center gap-2 text-sm ${centered ? 'justify-center' : ''}`}>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-[#707070]" aria-hidden="true">/</span>
                )}
                <Link 
                  to={crumb.path}
                  className="text-[#a0a0a0] hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}
      
      <div className={`flex ${centered ? 'flex-col items-center' : 'items-start justify-between'} gap-4`}>
        <div>
          <h1 className="mb-2">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-[#a0a0a0] max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {actions && (
          <div className="flex-shrink-0">
            {actions}
          </div>
        )}
      </div>
    </div>
  )
}
