import { redirect } from 'next/navigation'
import { getUser } from '@/lib/auth'
import { createClient } from '@/lib/supabase-server'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

interface PlanPageProps {
  searchParams: { slug?: string }
}

export default async function PlanPage({ searchParams }: PlanPageProps) {
  const user = await getUser()
  
  if (!user) {
    redirect('/login')
  }

  const { slug } = searchParams
  const validPlans = ['free', 'pro', 'scale']
  
  if (!slug || !validPlans.includes(slug)) {
    redirect('/pricing')
  }

  // Update user's plan in the database
  const supabase = createClient()
  const { error } = await supabase
    .from('profiles')
    .update({ plan: slug })
    .eq('id', user.id)

  if (error) {
    console.error('Error updating plan:', error)
  }

  const planNames = {
    free: 'Free',
    pro: 'Pro', 
    scale: 'Scale'
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Plan Selected!</h1>
            <p className="text-gray-600">
              You have selected the <strong className="capitalize">{planNames[slug as keyof typeof planNames]}</strong> plan.
            </p>
          </div>

          {slug !== 'free' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-700 text-sm mb-2">
                <strong>Demo Mode:</strong> Plan saved to database successfully!
              </p>
              <p className="text-blue-600 text-xs">
                In the paid kit, this would start Stripe Checkout and create a real subscription.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <Link 
              href="/dashboard"
              className="block w-full btn-primary"
            >
              Go to Dashboard
            </Link>
            
            <Link 
              href="/pricing"
              className="block w-full btn-secondary"
            >
              View Other Plans
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready for Production?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Upgrade to the paid SaaS Starter Kit for Stripe integration, webhooks, 
              customer portal, real plan enforcement, and production-ready features.
            </p>
            <a 
              href="#"
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Learn about the paid kit →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
