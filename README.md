# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and HeroUI.

## Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **TypeScript**: Type-safe code for better development experience
- **HeroUI Components**: Beautiful, accessible UI components
- **Framer Motion**: Smooth scroll animations and transitions
- **SEO Optimized**: Built-in SEO support with Next.js metadata
- **Fast Performance**: Optimized with Next.js 15 and Turbopack

## Sections

1. **Hero Section**: Eye-catching introduction with CTA buttons
2. **About Section**: Personal introduction and experience highlights
3. **Projects Section**: Showcase of featured projects with tags
4. **Skills Section**: Technical skills with progress indicators
5. **Contact Section**: Contact form and social links
6. **Footer**: Quick links and social connections

## Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm installed (`npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

1. **Update metadata** in `app/layout.tsx`:
   - Change the title and description

2. **Update Hero section** in `components/Hero.tsx`:
   - Change your name, title, and description
   - Update avatar initials or add your photo

3. **Update About section** in `components/About.tsx`:
   - Modify the bio text
   - Update experience stats

4. **Update Projects** in `components/Projects.tsx`:
   - Add your actual projects
   - Update project descriptions, tags, and links

5. **Update Skills** in `components/Skills.tsx`:
   - Modify skill categories and levels
   - Update tech stack tags

6. **Update Contact information** in `components/Contact.tsx`:
   - Change email, LinkedIn, GitHub links
   - Configure form submission endpoint

7. **Update Footer** in `components/Footer.tsx`:
   - Update social media links
   - Change copyright information

### Color Scheme

The project uses a blue-to-violet gradient theme. To change colors:
- Update the gradient classes in components (e.g., `from-blue-600 to-violet-600`)
- Modify the color values in `app/globals.css`

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: HeroUI (React components)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## Build for Production

```bash
pnpm build
pnpm start
```

## Deploy

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The build output is compatible with any hosting platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## Project Structure

```
web-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main page
│   ├── providers.tsx    # HeroUI provider
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills display
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio!
