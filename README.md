# IgniteForge

**Ignite your ideas. Create beautiful apps instantly.**

IgniteForge is a free AI-powered web application builder that transforms your description (in English or Russian) into full-featured, production-ready applications in minutes.

## 🚀 Features

- **Bilingual AI**: Optimized for English and Russian prompts
- **Beautiful UI**: Automatically enhanced with Tailwind CSS, Shadcn/UI, and Framer Motion
- **Free & Unlimited**: Uses Groq API's free tier and Ollama for local models
- **Smart Explain Mode**: AI explains generated code in simple terms
- **Community Templates**: Start with 10-15 pre-built templates

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **UI**: Tailwind CSS + Shadcn/UI + Framer Motion
- **Code Editor**: Monaco Editor
- **AI**: Groq API (Llama 3.1) + Ollama support
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Internationalization**: next-intl
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd IgniteForge
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

Fill in your Supabase and Groq API keys in `.env.local`.

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/        # React components
├── lib/              # Utilities and helpers
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── constants/        # Constants and configs
└── styles/           # Global styles
```

## 🔐 Environment Variables

Required environment variables (see `env.example`):

- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key
- `GROQ_API_KEY` - Your Groq API key
- `NEXT_PUBLIC_APP_URL` - Your app URL (default: http://localhost:3000)

Optional:
- `OLLAMA_BASE_URL` - Ollama base URL for local AI (default: http://localhost:11434)

## 📚 Documentation

- Project idea and roadmap: `document/project-idea.md`
- Cursor AI guidelines: `.cursor/README.md`
- Cursor rules: `.cursorrules`

## 🎯 Current Status

✅ **Completed:**
- Project initialization
- Next.js 15 setup with TypeScript
- All dependencies installed
- Project structure created
- Build and linting configured

🚧 **In Progress:**
- Multi-language setup (next-intl)
- Authentication (Supabase)

📋 **Planned:**
- Landing page
- Dashboard
- Editor with Monaco
- AI code generation
- Project management
- Deploy functionality

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the project maintainer.

## 📄 License

Private project - All rights reserved

---

**Status**: 🟡 In Development (Planning & Setup Phase)

