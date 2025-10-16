# Iniva.no

The official website for Iniva - building precision tools for WooCommerce operators who demand more.

**Live site:** [https://iniva.no](https://iniva.no)

## About

Iniva is a product studio focused on shipping reliable, supported solutions for the WooCommerce ecosystem. This repository contains the source code for our company website, showcasing our products, sharing insights through our blog, and providing ways to connect with us.

We believe in working in public and transparency, so we've made this repository open source to share our approach to building modern web experiences.

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator with excellent performance
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **n8n Webhooks** - Form handling for contact and newsletter subscriptions

## Project Structure

```text
/
├── public/              # Static assets (images, logos, testimonials)
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections (blog posts, products)
│   ├── layouts/         # Page layouts
│   └── pages/           # Routes and pages
│       ├── api/         # API endpoints (newsletter, contact)
│       ├── blog/        # Blog pages
│       └── ...
├── docs/                # Internal strategy and planning docs
└── astro.config.mjs     # Astro configuration
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/iniva.no.git
cd iniva.no

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your n8n webhook URLs
```

### Development

```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:4321`

## Environment Variables

To run the contact form and newsletter signup, you'll need to configure n8n webhooks:

```env
PUBLIC_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/contact
N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/newsletter
```

## Contributing

This is primarily our company website, but if you spot issues or have suggestions, feel free to open an issue or submit a pull request.

For major changes, please open an issue first to discuss what you'd like to change.

## License

The code is open source for educational and transparency purposes. Please don't use the Iniva brand, logos, or content without permission.

## Contact

- Website: [iniva.no](https://iniva.no)
- Email: hello@iniva.no
- Products: [Quick3 for WooCommerce](https://quick3-for-woocommerce.no/en/)

---

Built with care by Ole Andreas Jørnsen Herland
