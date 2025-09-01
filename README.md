# SaaS Starter Free

A free, open-source SaaS starter kit demonstrating Supabase email authentication, user profiles with RLS policies, dashboard, admin gating, pricing page, and plan selection that saves to the database.

**This is a demo kit** - no Stripe integration, webhooks, or real billing. Perfect for learning and prototyping!

## 🚀 Live Demo

Coming soon - will be deployed after initial release.

## ✨ What's Included

- ✅ **Supabase Authentication** - Email/password and magic link login
- ✅ **User Profiles** - Database table with RLS policies
- ✅ **Dashboard** - Shows user email and current plan
- ✅ **Admin Gate** - Role-based access to admin panel
- ✅ **Pricing Page** - Clean plan comparison with selection
- ✅ **Plan Selection** - Saves chosen plan to database
- ✅ **Responsive Design** - Mobile-first with Tailwind CSS

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready (usually 1-2 minutes)

### 2. Get Your Supabase Credentials

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy your **Project URL** and **anon public** key

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run the Database Migration

1. Go to your Supabase dashboard
2. Click **SQL Editor** in the sidebar
3. Copy the contents of `supabase/migrations/0001_init.sql`
4. Paste and run the SQL in the editor

### 5. Install and Run

```bash
npm install
npm run dev
```

### 6. Test the Flow

1. Open http://localhost:3000
2. Sign up with your email
3. Check your email and click the confirmation link
4. Visit `/pricing`, select a plan
5. Confirm the plan is saved in `/dashboard`

## 🌍 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/saas-starter-free&env=NEXT_PUBLIC_SUPABASE_URL,NEXT_PUBLIC_SUPABASE_ANON_KEY)

## 📋 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public key | ✅ |

## 🆚 Free vs Paid Kit Comparison

| Feature | Free Kit | Paid Kit |
|---------|----------|----------|
| **Authentication** | ✅ Supabase email auth | ✅ Supabase + social providers |
| **Database** | ✅ Profiles table with RLS | ✅ Full schema with relationships |
| **UI Pages** | ✅ Dashboard, pricing, admin preview | ✅ Full-featured pages |
| **Plan Selection** | ✅ Saves to database (demo) | ✅ Real Stripe Checkout |
| **Billing** | ❌ Demo only | ✅ Stripe subscriptions |
| **Webhooks** | ❌ Not included | ✅ Stripe webhook handling |
| **Customer Portal** | ❌ Not included | ✅ Stripe customer portal |
| **Plan Enforcement** | ❌ Demo only | ✅ Real feature gating |
| **Admin Features** | ✅ Basic preview | ✅ Full billing insights |
| **Support** | 🔄 Community only | ✅ Direct developer support |
| **Setup** | 🔧 Manual setup | ✅ Done-for-you installation |

## 🏗️ Architecture

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: Vercel-ready

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 🌟 Community & Support

- **Skool Community**: [Join our free community](https://www.skool.com/delivering-growth-free)
- **YouTube**: [@delivering-growth](https://www.youtube.com/@delivering-growth)
- **TikTok**: [@deliveringgrowth](https://www.tiktok.com/@deliveringgrowth)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a community-supported project. Issues and pull requests are welcome! 

For the paid SaaS Starter Kit with commercial support, visit our main site.

## 🔒 Security

For security issues, please see [SECURITY.md](SECURITY.md).

---

**Ready for production billing?** The paid SaaS Starter Kit includes Stripe integration, webhooks, customer portal, real plan enforcement, and comprehensive admin features with direct developer support.
