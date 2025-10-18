# Iniva.no

The official website for [Iniva](https://iniva.no).

To be even more transparent we have decided to just make the source code of our
website public. This gives the currious reader the possibility to look into how
it's made. Life is just a bit more fun when you are open and transparent 🕺

## About

Iniva is a small norwegian company working on building products with and for
clients. We focus on niche prodcts that there is a proven need for in the market.
For the time being the focus is WooCommerce related products, but there are
other products in other niches in the pending list that we hope to get to soon!

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
NEWSLETTER_N8N_WEBHOOK_URL=https://your-n8n-instance.com/webhook/newsletter
```

## Contributing

This is primarily our company website, but if you spot issues or have suggestions, feel free to open an issue or submit a pull request.

For major changes, please open an issue first to discuss what you'd like to change.

## License

The code is open source for educational and transparency purposes. Please don't use the Iniva brand, logos, or content without permission.

## Contact

- Website: [iniva.no](https://iniva.no)
- Email: hello@iniva.no

---

Built with care by Ole Herland
