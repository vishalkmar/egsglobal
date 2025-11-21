# Design Guidelines: Visa Company Website

## Design Approach
**Reference-Based**: Draw inspiration from professional visa and travel service companies (VFS Global, BLS International) combined with modern SaaS aesthetics for trust and professionalism.

## Core Design Principles
- **Professional Trust**: Clean, official government-service aesthetic with modern touches
- **Smooth Interactions**: Gentle animations and transitions throughout
- **Gradient Sophistication**: Subtle blue-to-purple gradients reflecting international travel
- **Accessibility**: Clear hierarchy, readable typography, strong contrast

## Typography
- **Primary Font**: Inter or Poppins via Google Fonts
- **Headings**: Font weights 600-700, sizes from text-3xl to text-5xl
- **Body Text**: Font weight 400-500, text-base to text-lg
- **Buttons/CTAs**: Font weight 600, text-sm to text-base

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16 (p-4, p-6, p-8, etc.)
- **Container**: max-w-7xl mx-auto px-4
- **Section Padding**: py-12 (mobile) to py-20 (desktop)
- **Component Gaps**: gap-6 to gap-8

## Component Library

### Header/Navigation
- **Desktop**: Horizontal navigation with centered tabs (Home, About, Contact, Service), logo top-right, login button top-left
- **Hover States**: Smooth underline animations for nav links, dropdown fade-in (duration-300)
- **Service Dropdown**: Multi-level menu with smooth expand/collapse
  - Primary items with hover backdrop
  - Visa sub-menu opens on hover to right
- **Mobile**: Sidebar drawer (w-80) sliding from left with hamburger icon, smooth transform transitions, backdrop overlay with opacity animation

### Carousel Banner
- **Layout**: Full-width hero section (h-[500px] md:h-[600px])
- **Slides**: 3-5 images with gradient overlays (from-blue-900/70 to-purple-900/50)
- **Content**: Large headings (text-4xl md:text-6xl), subtext, dual CTAs
- **Controls**: Smooth dot indicators, auto-play with 5s intervals, swipe gestures
- **Buttons**: Backdrop-blur backgrounds with semi-transparent white/blue fills

### Countries We Serve Section
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-3) with gap-8
- **Cards**: Elevated cards (shadow-lg) with rounded-xl borders
- **Content Structure**:
  - Flag image (w-24 h-16 object-cover, rounded-lg)
  - Country name (text-2xl font-semibold)
  - 2-3 line description
  - Hover effect: translate-y-1 with shadow enhancement
- **Countries**: India, Nepal, Bangladesh

### Services We Provide Section
- **Layout**: Grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3) with gap-6
- **Cards**: Gradient borders, rounded-2xl, hover scale transforms
- **Service Items**:
  - Icon placeholder at top
  - Service title (text-xl font-semibold)
  - Brief description (text-gray-600)
  - "Learn More" link with arrow icon

### Footer
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-3) with dark gradient background
- **Sections**:
  - Company intro (max 4-5 lines)
  - Quick Links column (Home, About, Contact)
  - Services column (all service links with routes)
- **Bottom Bar**: Copyright, social icons (if applicable)
- **Styling**: Light text on dark background, subtle dividers

## Images

### Hero Carousel Images
- **Requirement**: 3-5 professional images showing:
  1. International airport/passport processing
  2. Happy travelers with luggage
  3. Visa stamp/documentation close-up
  4. Customer service representative helping client
  5. Globe/world map with travel pins
- **Treatment**: Overlay with gradient (blue-to-purple, 70% opacity)
- **Buttons**: Backdrop blur (backdrop-blur-md) with semi-transparent backgrounds

### Country Flags
- **India**: Tricolor flag image
- **Nepal**: Flag with unique shape
- **Bangladesh**: Green and red flag
- **Dimensions**: Consistent aspect ratio (3:2), rounded corners

### Service Icons
- Use Heroicons via CDN for service category icons
- Size: w-12 h-12 for card headers

## Responsive Breakpoints
- **Mobile**: Base (< 768px) - single column, sidebar navigation
- **Tablet**: md (768px+) - 2 columns where applicable
- **Desktop**: lg (1024px+) - full multi-column layouts

## Gradient & Visual Treatment
- **Primary Gradient**: from-blue-600 via-indigo-600 to-purple-600
- **Section Backgrounds**: Alternating white and subtle gray (bg-gray-50)
- **Card Gradients**: Subtle border gradients (from-blue-400 to-purple-400)
- **Overlay Gradients**: from-blue-900/70 to-transparent on hero images

## Interactions
- **Transition Duration**: duration-300 for most animations
- **Hover Transforms**: scale-105 or translate-y-1 for cards
- **Dropdown Animations**: opacity and translateY transitions
- **Mobile Menu**: Transform translateX with backdrop fade

## Navigation Routes
All service pages require dummy content placeholders:
- /embassy-legalization
- /attestation-apostille  
- /insurance-dummy-ticket
- /meet-greet
- /accommodation-assistant
- /visa/normal
- /visa/e-visa

Plus standard routes: /, /about, /contact, /services