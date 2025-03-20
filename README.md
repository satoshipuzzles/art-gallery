# Art Gallery: 3D Gallery & Art Marketplace

A comprehensive art gallery platform that allows artists to upload, manage, and showcase their artwork in both traditional and 3D gallery formats. The platform includes payment processing via Stripe for credit cards and Bitcoin using LNbits.

## Features

- **Traditional Gallery**: Browse and purchase artwork in a classic gallery layout.
- **3D Gallery Experience**: Explore artwork in an immersive 3D environment using Three.js.
- **Artist Profiles**: Dedicated artist pages to showcase artwork and collections.
- **Collections**: Group artwork into themed collections that can be displayed in 3D galleries.
- **Dual Payment Processing**: Support for both credit card payments via Stripe and Bitcoin payments via LNbits.
- **Admin Dashboard**: Comprehensive admin panel for artists to manage artwork, collections, and sales.
- **Email Notifications**: Automated emails for order confirmations, sale notifications, and more.

## Tech Stack

- **Frontend**: React, Next.js, Tailwind CSS
- **3D Rendering**: Three.js, React Three Fiber, Drei
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Payment Processing**: Stripe API, LNbits API
- **Email**: Nodemailer

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- PostgreSQL database
- Stripe account for credit card processing
- LNbits account for Bitcoin Lightning Network payments

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/art-gallery.git
   cd art-gallery
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` to add your specific configuration values.

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This application can be deployed on Vercel, which provides seamless integration with Next.js projects:

1. Push your code to GitHub.
2. Connect your repository to Vercel.
3. Configure the environment variables in the Vercel dashboard.
4. Deploy the application.

## Environment Variables

The following environment variables are required for the application to function properly:

- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_URL`: URL of your application
- `NEXTAUTH_SECRET`: Secret key for NextAuth.js
- `STRIPE_PUBLIC_KEY`: Stripe publishable key
- `STRIPE_SECRET_KEY`: Stripe secret key
- `LNBITS_API_URL`: URL of your LNbits instance
- `LNBITS_INVOICE_KEY`: LNbits invoice/admin key
- `LNBITS_READ_KEY`: LNbits read-only key
- `EMAIL_SERVER_*`: SMTP server details for sending emails
- `NEXT_PUBLIC_BASE_URL`: Base URL of your application

See `.env.example` for a complete list of required environment variables.

## Project Structure

- `/src/app`: Next.js application directory
- `/src/components`: Reusable React components
- `/src/lib`: Utility functions (payments, emails, etc.)
- `/src/models`: Data models and database interactions
- `/prisma`: Prisma schema and migrations

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgements

- Three.js for 3D rendering
- Next.js for the React framework
- Tailwind CSS for styling
- Stripe for payment processing
- LNbits for Bitcoin Lightning Network integration 