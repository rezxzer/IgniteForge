# IgniteForge - Cursor AI Working Guidelines

ეს დოკუმენტი შეიცავს წესებს და ინსტრუქციებს Cursor AI-სთვის IgniteForge პროექტზე მუშაობისას.

## 🌍 ენობრივი წესები

### ჩატის პასუხები
- **ყოველთვის პასუხობდე ქართულ ენაზე** როცა ახსნი, აღწერ ან კომუნიკაცია გაქვს მომხმარებელთან
- ყველა ახსნა, აღწერა და საუბარი უნდა იყოს ქართულად
- კოდის კომენტარები და დოკუმენტაცია შეიძლება იყოს ინგლისურად

### კოდის წერა
- **არასდროს არ გამოიყენო ქართული ასოები (ა-ჰ) კოდში**
- ყველა კოდი, ცვლადის სახელი, ფუნქციის სახელი, კლასის სახელი, ფაილის სახელი და სტრინგები უნდა იყოს მხოლოდ ინგლისური ასოებით
- კოდის კომენტარები ინგლისურად
- შეცდომის შეტყობინებები კოდში ინგლისურად

### ბაზა და Supabase
- **Supabase-თან დაკავშირებული ყველა კოდი უნდა იყოს ინგლისურად და თანმიმდევრულად**
- ცხრილების სახელები: ინგლისური, snake_case (მაგ. `user_profiles`, `projects`)
- სვეტების სახელები: ინგლისური, snake_case (მაგ. `created_at`, `user_id`)
- ფუნქციების სახელები: ინგლისური, snake_case (მაგ. `get_user_projects`)
- SQL კითხვები: ყველა ინგლისურად
- RLS პოლიტიკები: სახელები და აღწერები ინგლისურად
- მიგრაციის ფაილები: ყველა კონტენტი ინგლისურად

## 📝 კოდის სტანდარტები

### TypeScript/JavaScript
- გამოიყენე TypeScript strict mode
- დაიცავი Next.js 15 App Router კონვენციები
- გამოიყენე functional components hooks-ებით
- არჩევანი: async/await promises-ის ნაცვლად
- გამოიყენე სწორი error handling try/catch-ით

### ფაილების დასახელება
- კომპონენტები: PascalCase (მაგ. `ProjectCard.tsx`)
- Utilities: camelCase (მაგ. `formatDate.ts`)
- Constants: UPPER_SNAKE_CASE (მაგ. `API_ENDPOINTS.ts`)
- ფაილები: kebab-case routes-ებისთვის, PascalCase კომპონენტებისთვის

### კოდის ორგანიზაცია
- შეინარჩუნე კომპონენტები პატარა და ფოკუსირებული
- გამოიყენე custom hooks გამოსაყენებელი ლოგიკისთვის
- გამოყავი საკითხები (UI, ლოგიკა, მონაცემების მიღება)
- გამოიყენე სწორი TypeScript ტიპები და interfaces

## 📁 პროექტის სტრუქტურა

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

## ✅ საუკეთესო პრაქტიკები

### შეცდომების დამუშავება
- ყოველთვის გამოიყენე try/catch async ოპერაციებისთვის
- მიაწოდე მნიშვნელოვანი შეცდომის შეტყობინებები (ინგლისურად კოდისთვის, ქართულად მომხმარებლისთვის)
- გამოიყენე toast notifications მომხმარებლის ფიდბექისთვის
- შეიტანე შეცდომები შესაბამისად

### State Management
- გამოიყენე React hooks (useState, useEffect) ლოკალური state-ისთვის
- გამოიყენე Server Components როცა შესაძლებელია
- გამოიყენე Server Actions mutations-ისთვის
- განიხილე Zustand ან Context API გლობალური state-ისთვის საჭიროების შემთხვევაში

### API ინტეგრაცია
- გამოიყენე Next.js API routes backend ლოგიკისთვის
- შეინარჩუნე API routes სუფთა და ფოკუსირებული
- გამოიყენე სწორი HTTP status codes
- დაამოწმე input Zod schemas-ით

### ბაზა
- ყოველთვის გამოიყენე parameterized queries
- დაამატე სწორი RLS პოლიტიკები
- გამოიყენე transactions საჭიროების შემთხვევაში
- დაამუშავე connection errors-ები გრაციოზულად

## 🔄 Git & Commits

### Commit Messages
- დაწერე commit messages ინგლისურად
- გამოიყენე conventional commit ფორმატი: `type(scope): description`
- მაგალითები:
  - `feat(auth): add Google OAuth login`
  - `fix(editor): resolve Monaco Editor loading issue`
  - `docs(readme): update installation instructions`

### Branch Naming
- გამოიყენე ინგლისური: `feature/`, `fix/`, `refactor/`, `docs/`
- მაგალითები: `feature/editor-preview`, `fix/auth-redirect`

## 🧪 ტესტირება

- დაწერე ტესტები ინგლისურად
- გამოიყენე აღწერითი ტესტის სახელები
- ტესტირება როგორც წარმატების, ასევე შეცდომის შემთხვევები
- შეინარჩუნე ტესტები მარტივი და ფოკუსირებული

## 📚 დოკუმენტაცია

- კოდის დოკუმენტაცია: ინგლისური
- მომხმარებლისთვის დოკუმენტაცია: ქართული
- API დოკუმენტაცია: ინგლისური
- README ფაილები: შეიძლება იყოს ორენოვანი (ინგლისური პირველად, ქართული მეორედ)

## 🤖 AI ინტეგრაცია

### Groq API
- გამოიყენე Llama 3.1 მოდელი
- შეინარჩუნე prompts ნათელი და სპეციფიკური
- დაამუშავე rate limits გრაციოზულად
- Cache-ი responses როცა შესაბამისია

### კოდის გენერაცია
- გენერირება სუფთა, production-ready კოდი
- ჩართე სწორი error handling
- დაამატე TypeScript ტიპები
- დაიცავი პროექტის კონვენციები

## 🔒 უსაფრთხოება

- არასდროს არ commit-ო API keys ან secrets
- გამოიყენე environment variables
- დაამოწმე ყველა user input
- დაამატე სწორი authentication
- გამოიყენე RLS პოლიტიკები Supabase-ში

## ⚡ პერფორმანსი

- ოპტიმიზაცია images და assets
- გამოიყენე Next.js Image component
- დაამატე სწორი loading states
- Lazy load კომპონენტები როცა შესაბამისია
- Cache API responses როცა შესაძლებელია

## 🎯 სესბში მუშაობის წესები

### პრიორიტეტები
1. ყოველთვის წაიკითხე `.cursorrules` და `.cursor/README.md` სესბის დაწყებამდე
2. გამოიყენე `document/project-idea.md` პროექტის კონტექსტისთვის
3. განაახლე "გაკეთებული სამუშაოები" სექცია დავალების დასრულების შემდეგ

### კოდის შექმნისას
- ყოველთვის შეამოწმე TypeScript errors `pnpm typecheck`-ით
- გაუშვი linting `pnpm lint`-ით
- ტესტირება ლოკალურად build-ის შემდეგ `pnpm build`-ით
- გამოიყენე საუკეთესო პრაქტიკები და patterns

### Supabase მუშაობისას
- ყოველთვის გამოიყენე idempotent migrations
- შეამოწმე RLS policies
- დაამატე proper indexes
- დოკუმენტაცია SQL comments-ით

### კომუნიკაცია
- პასუხები ყოველთვის ქართულად
- კოდი ყოველთვის ინგლისურად
- Commit messages ინგლისურად
- დოკუმენტაცია შერეული (კოდისთვის ინგლისური, მომხმარებლისთვის ქართული)

## 📋 სწრაფი მითითებები

- **პასუხი**: ქართულად ✅
- **კოდი**: ინგლისურად, ქართული ასოების გარეშე ✅
- **Supabase**: ინგლისურად, თანმიმდევრულად ✅
- **Commits**: ინგლისურად, conventional format ✅
- **ტესტები**: ინგლისურად ✅

---

**ბოლო განახლება**: 2026-01-04

