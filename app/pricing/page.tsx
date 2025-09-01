import { PlanCard } from '@/components/PlanCard'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      slug: 'free',
      price: '$0/month',
      features: [
        'Basic dashboard access',
        'Email authentication',
        'Community support',
        'Demo features only'
      ]
    },
    {
      name: 'Pro',
      slug: 'pro',
      price: '$29/month',
      features: [
        'Everything in Free',
        'Stripe integration',
        'Customer portal',
        'Webhook handling',
        'Real plan enforcement',
        'Priority support'
      ],
      isPopular: true
    },
    {
      name: 'Scale',
      slug: 'scale',
      price: '$99/month',
      features: [
        'Everything in Pro',
        'Advanced admin features',
        'Custom integrations',
        'White-label options',
        'Dedicated support',
        'Custom development'
      ]
    }
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Start with our free demo, then upgrade for full features
          </p>
          <p className="text-sm text-gray-500">
            This free kit demonstrates plan selection. The paid kit includes Stripe Checkout, webhooks, and real billing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PlanCard
              key={plan.slug}
              name={plan.name}
              slug={plan.slug}
              price={plan.price}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Free vs Paid Kit</h3>
            <p className="text-blue-700 text-sm mb-3">
              This free version demonstrates the UI and basic functionality. 
              The paid SaaS Starter Kit includes full Stripe integration, webhooks, 
              customer portal, real plan enforcement, and production-ready features.
            </p>
            <a 
              href="#"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Learn more about the paid kit →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
