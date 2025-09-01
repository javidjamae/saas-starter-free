'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase-browser'
import { User, AuthChangeEvent, Session } from '@supabase/supabase-js'

export function Navbar() {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  // Create Supabase client with error handling
  let supabase: any = null
  try {
    supabase = createClient()
  } catch (error) {
    console.warn('Navbar: Could not create Supabase client (likely missing env vars):', error)
  }

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    async function getProfile() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user ?? null)
        
        if (session?.user) {
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single()
          setProfile(data)
        }
        
        setLoading(false)
      } catch (error) {
        console.warn('Navbar: Error getting profile:', error)
        setLoading(false)
      }
    }

    getProfile()

    try {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event: AuthChangeEvent, session: Session | null) => {
          setUser(session?.user ?? null)
          if (session?.user) {
            try {
              const { data } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single()
              setProfile(data)
            } catch (error) {
              console.warn('Navbar: Error getting profile on auth change:', error)
            }
          } else {
            setProfile(null)
          }
          setLoading(false)
        }
      )

      return () => subscription.unsubscribe()
    } catch (error) {
      console.warn('Navbar: Error setting up auth listener:', error)
      setLoading(false)
    }
  }, [supabase])

  const handleSignOut = async () => {
    if (supabase) {
      await supabase.auth.signOut()
    }
  }

  if (loading) {
    return (
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                SaaS Starter Free
              </Link>
            </div>
            <div className="flex items-center">
              <div className="animate-pulse bg-gray-200 h-8 w-20 rounded"></div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              href={user ? "/dashboard" : "/"} 
              className="text-xl font-bold text-gray-900"
            >
              SaaS Starter Free
            </Link>
            
            {user && (
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  href="/dashboard" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/pricing" 
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Pricing
                </Link>
                {profile?.is_admin && (
                  <Link 
                    href="/admin" 
                    className="text-red-600 hover:text-red-700 px-3 py-2 rounded-md text-sm font-medium font-semibold"
                  >
                    Admin
                  </Link>
                )}
              </div>
            )}
          </div>
          
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">{user.email}</span>
                <button
                  onClick={handleSignOut}
                  className="btn-secondary"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/login" className="btn-primary">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
