import { redirect } from 'next/navigation'
import { getUser, getUserProfile } from '@/lib/auth'
import { createClient } from '@/lib/supabase-server'

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const user = await getUser()
  
  if (!user) {
    redirect('/login')
  }

  const profile = await getUserProfile(user.id)
  
  if (!profile?.is_admin) {
    redirect('/dashboard')
  }

  // Get all profiles for admin view
  const supabase = createClient()
  const { data: profiles } = await supabase
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h1 className="text-2xl font-bold text-yellow-900 mb-2">Admin Preview</h1>
            <p className="text-yellow-700 text-sm">
              This is a preview of admin functionality. The paid kit includes role-based admin with billing insights, 
              subscription management, and comprehensive user analytics.
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-900 mb-6">User Profiles</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Admin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {profiles?.map((profile) => (
                  <tr key={profile.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {profile.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 capitalize">
                        {profile.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {profile.is_admin ? (
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                          Admin
                        </span>
                      ) : (
                        <span className="text-gray-400">User</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(profile.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!profiles?.length && (
            <div className="text-center py-8 text-gray-500">
              No user profiles found.
            </div>
          )}

          <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Paid Kit Features</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Stripe subscription management and billing history</li>
              <li>• Real-time subscription status and plan enforcement</li>
              <li>• Customer portal integration</li>
              <li>• Webhook handling for subscription changes</li>
              <li>• Advanced admin analytics and user management</li>
              <li>• Role-based permissions and feature gating</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
