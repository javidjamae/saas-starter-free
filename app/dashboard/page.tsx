import { redirect } from 'next/navigation'
import { getUser, getUserProfile } from '@/lib/auth'
import Link from 'next/link'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const user = await getUser()
  
  if (!user) {
    redirect('/login')
  }

  const profile = await getUserProfile(user.id)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h2>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium text-gray-500">Email:</span>
                  <span className="ml-2 text-sm text-gray-900">{user.email}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Current Plan:</span>
                  <span className="ml-2 text-sm text-gray-900 capitalize">{profile?.plan || 'free'}</span>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Member Since:</span>
                  <span className="ml-2 text-sm text-gray-900">
                    {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link 
                  href="/pricing"
                  className="block w-full btn-primary text-center"
                >
                  View Pricing Plans
                </Link>
                <div className="text-xs text-gray-500">
                  This free kit shows plan selection. The paid kit includes Stripe integration, webhooks, and real plan enforcement.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to SaaS Starter Free!</h3>
            <p className="text-blue-700 text-sm mb-3">
              This is a demo of the free starter kit. It includes Supabase authentication, a profiles table with RLS, 
              and basic plan selection that saves to the database.
            </p>
            <p className="text-blue-700 text-sm">
              <strong>Upgrade to the paid kit</strong> for Stripe integration, webhooks, customer portal, 
              real plan gating, and comprehensive admin features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
