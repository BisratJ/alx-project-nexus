# Memosheria - Wedding Event Management System

A comprehensive wedding event management platform built with Next.js, featuring role-based authentication and dashboards for users, vendors, and administrators.

## 🌟 Features

### For Couples (Users)
- **Browse & Compare Packages**: Explore wedding services from verified vendors
- **Booking Management**: Book, update, and cancel wedding services
- **Event Calendar**: Track important dates and vendor availability
- **Inspiration Gallery**: Browse wedding photos and ideas
- **Profile Management**: Manage personal information and wedding details

### For Vendors
- **Service Management**: Add, update, and delete service listings
- **Booking Requests**: Approve or decline booking requests
- **Availability Calendar**: Set and manage availability
- **Portfolio Gallery**: Showcase work to attract clients
- **Revenue Tracking**: Monitor earnings and performance

### For Administrators
- **User Management**: Oversee user accounts and registrations
- **Vendor Verification**: Approve and manage vendor applications
- **Platform Analytics**: Monitor system performance and usage
- **Content Management**: Manage galleries, packages, and agreements
- **System Configuration**: Control platform settings and policies

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: React Context API
- **Authentication**: Custom auth with role-based access
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd memosheria-frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔐 Demo Accounts

The application includes demo accounts for testing different user roles:

| Role | Email | Password |
|------|-------|----------|
| User (Bride/Groom) | bride@example.com | password |
| Vendor | vendor@example.com | password |
| Admin | admin@example.com | password |

## 🏗️ Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── dashboard/         # User dashboard
│   ├── login/             # Authentication
│   └── vendor/            # Vendor dashboard
├── components/            # Reusable components
│   ├── auth/              # Authentication components
│   ├── dashboard/         # Dashboard components
│   ├── layout/            # Layout components
│   └── ui/                # shadcn/ui components
├── contexts/              # React Context providers
├── types/                 # TypeScript type definitions
└── lib/                   # Utility functions
\`\`\`

## 🎨 Key Components

### Authentication System
- **AuthProvider**: Manages authentication state
- **ProtectedRoute**: Route protection with role-based access
- **Login/Register**: User authentication forms

### Dashboard Components
- **UserDashboard**: Couple's planning interface
- **VendorDashboard**: Service provider management
- **AdminDashboard**: Platform administration

### Layout Components
- **Navbar**: Responsive navigation with user menu
- **Footer**: Site-wide footer with links

## 🔒 Role-Based Access Control

The application implements a comprehensive role-based access control system:

- **Public Routes**: Home, packages, vendors (accessible to all)
- **User Routes**: Dashboard, bookings, profile (couples only)
- **Vendor Routes**: Vendor dashboard, service management (vendors only)
- **Admin Routes**: Admin dashboard, user management (admins only)

## 📱 Responsive Design

The application is fully responsive and mobile-friendly:
- **Mobile-first approach** with Tailwind CSS
- **Responsive navigation** with mobile menu
- **Adaptive layouts** for different screen sizes
- **Touch-friendly interfaces** for mobile devices

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Modular components** for maintainability

## 🚀 Deployment

The application can be deployed on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=your-api-url
\`\`\`

### Customization
- **Colors**: Modify Tailwind config for brand colors
- **Components**: Extend shadcn/ui components
- **Features**: Add new dashboard features as needed

## 📈 Future Enhancements

- **Real-time notifications** for booking updates
- **Payment integration** with Stripe/PayPal
- **Advanced search and filtering**
- **Multi-language support**
- **Mobile app** with React Native
- **AI-powered recommendations**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- **Email**: support@memosheria.com
- **Documentation**: [Project Wiki]
- **Issues**: [GitHub Issues]

---

Built with ❤️ for couples planning their perfect wedding day.
