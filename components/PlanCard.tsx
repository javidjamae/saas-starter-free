import Link from 'next/link'

interface PlanCardProps {
  name: string
  slug: string
  price: string
  features: string[]
  isPopular?: boolean
}

export function PlanCard({ name, slug, price, features, isPopular }: PlanCardProps) {
  return (
    <div className={`card relative ${isPopular ? 'ring-2 ring-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
        <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
        
        <ul className="space-y-2 mb-6 text-sm text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link 
          href={`/plan?slug=${slug}`}
          className={`block w-full text-center ${isPopular ? 'btn-primary' : 'btn-secondary'}`}
        >
          Select {name}
        </Link>
        
        {slug !== 'free' && (
          <p className="text-xs text-gray-500 mt-2">
            In the paid kit these buttons start Stripe Checkout.
          </p>
        )}
      </div>
    </div>
  )
}
