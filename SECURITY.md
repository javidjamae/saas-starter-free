# Security Policy

## Supported Versions

We provide security updates for the latest version of SaaS Starter Free.

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |
| < Latest| :x:                |

## Reporting a Vulnerability

We take security seriously. If you discover a security vulnerability, please follow these steps:

### For Critical/High Severity Issues
- **Do NOT** create a public GitHub issue
- Email us directly at: security@deliveringgrowth.com
- Include detailed steps to reproduce
- Allow up to 48 hours for initial response

### For Low/Medium Severity Issues
- Create a GitHub issue with the "security" label
- Provide clear reproduction steps
- Include potential impact assessment

## Security Best Practices

When using this starter kit:

### Environment Variables
- Never commit `.env*` files to version control
- Use strong, unique values for production
- Rotate keys regularly in production

### Supabase Setup
- Enable RLS (Row Level Security) on all tables
- Use appropriate RLS policies for your use case
- Never use the service role key in client-side code
- Enable MFA on your Supabase account

### General Security
- Keep dependencies updated
- Use HTTPS in production
- Implement proper error handling
- Follow principle of least privilege

## Vulnerability Response

1. **Assessment** - We'll evaluate the report within 48 hours
2. **Fix Development** - Critical issues will be prioritized
3. **Release** - Security fixes will be released ASAP
4. **Disclosure** - We'll coordinate responsible disclosure

## Security Features

This starter kit includes:
- ✅ Supabase RLS policies
- ✅ Server-side authentication checks
- ✅ Environment variable protection
- ✅ CSRF protection via Next.js
- ✅ Secure cookie handling

## Limitations

**Important**: This is a demo/starter kit. For production use:
- Conduct your own security audit
- Implement additional security measures as needed
- Consider upgrading to the paid kit for production-ready security features
- Follow your organization's security requirements

## Questions?

For security questions or concerns, reach out via:
- Email: security@deliveringgrowth.com
- Community: [Skool community](https://www.skool.com/delivering-growth-free)
