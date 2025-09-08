# Modern Authentication UI

A beautiful, responsive authentication interface built with Next.js 15 and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional UI with gradient backgrounds and subtle patterns
- **Responsive Layout**: Optimized for both desktop and mobile devices
- **Accessibility**: Built with accessibility in mind using proper labels and semantic HTML
- **shadcn/ui Components**: Uses high-quality, customizable UI components

## Pages

### Login Page (`/`)
- Email input field
- Password input field
- Sign In button
- "Forgot Password?" link

### Forgot Password Flow

#### Step 1 (`/forgot-password`)
- Email input field
- "Send Code" button
- Back to login link

#### Step 2 (`/forgot-password/code`)
- 6-digit verification code input
- "Verify Code" button
- Resend code link
- Back navigation

#### Step 3 (`/forgot-password/new-password`)
- New password input
- Confirm password input
- "Reset Password" button
- Back navigation

## Design Features

- **Background**: Gradient from slate-900 via purple-900 to slate-900 with subtle dot pattern
- **Cards**: Semi-transparent white cards with backdrop blur effect
- **Buttons**: Gradient purple-to-blue buttons with hover effects
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent spacing and padding throughout
- **Colors**: Purple and blue accent colors with neutral grays

## Technology Stack

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI component library
- **Lucide React**: Beautiful icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Notes

- This is a UI-only implementation with no backend logic
- All forms are for demonstration purposes
- No actual authentication or password reset functionality is implemented
- Perfect for prototyping or as a starting point for authentication flows
