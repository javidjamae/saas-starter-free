import { Navbar } from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'SaaS Starter Free',
  description: 'Free SaaS starter kit with Supabase authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
