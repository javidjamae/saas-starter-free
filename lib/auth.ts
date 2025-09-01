import { createClient } from '@/lib/supabase-server'

export async function getUser() {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    // Return null if Supabase is not configured (e.g., during build)
    return null
  }
}

export async function getSession() {
  try {
    const supabase = createClient()
    const { data: { session } } = await supabase.auth.getSession()
    return session
  } catch (error) {
    // Return null if Supabase is not configured (e.g., during build)
    return null
  }
}

export async function getUserProfile(userId: string) {
  try {
    const supabase = createClient()
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    return profile
  } catch (error) {
    // Return null if Supabase is not configured (e.g., during build)
    return null
  }
}

export async function upsertUserProfile(user: any) {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('profiles')
    .upsert({
      id: user.id,
      email: user.email,
      plan: 'free'
    }, {
      onConflict: 'id'
    })
  
  if (error) {
    console.error('Error upserting profile:', error)
  }
  
  return { data, error }
}
