# ChainAgnostic Homepage

Official website for the ChainAgnostic initiative - building standards and protocols that work across all blockchain networks.

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ installed
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/ChainAgnostic/homepage.git
cd homepage

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── members/           # Members page
│   ├── groups/            # Working groups page
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Header, footer
│   ├── sections/          # Page sections (home, members, work)
│   └── ui/                # Reusable UI components
└── public/
    ├── images/            # Blockchain logos
    └── logo.jpg           # ChainAgnostic logo
```

📖 **For detailed architecture documentation**, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Runtime:** React 19

## 📄 Available Pages

- **`/`** - Home page with hero, purpose, meetings, and community sections
- **`/members`** - Information about members, roles, and how to join
- **`/groups`** - Overview of working groups and contribution opportunities

## 🔧 Development Commands

```bash
# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## 🤝 Contributing

This project follows a component-based architecture. When adding new features:

1. Check [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for conventions
2. Create components in appropriate directories
3. Use TypeScript and follow existing patterns
4. Use Tailwind CSS for styling

## 📚 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Complete architecture guide for developers and AI agents
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)

## 🌐 Deployment

The site can be deployed to any platform that supports Next.js:

- **Vercel** (recommended)
- **Netlify**
- **AWS / GCP / Azure**
- Self-hosted with Node.js

## 📝 License

[Add your license here]

## 🔗 Links

- Website: https://chainagnostic.org
- GitHub: https://github.com/ChainAgnostic
- Repository: https://github.com/ChainAgnostic/homepage

---

Built with ❤️ by the ChainAgnostic community
