# Breadcrumb Navigation Implementation Plan

> **For Claude:** Use `${SUPERPOWERS_SKILLS_ROOT}/skills/collaboration/executing-plans/SKILL.md` to implement this plan task-by-task.

**Goal:** Add breadcrumb navigation to all subpages showing the user's current location in the site hierarchy.

**Architecture:** Create a reusable Breadcrumb component that accepts an array of breadcrumb items (label, href, current flag). Each page will define its breadcrumb trail in frontmatter and render the component below the header. Uses Tailwind styling matching the provided design with home icon, chevron separators, and gray color scheme.

**Tech Stack:** Astro components, TypeScript interfaces, Tailwind CSS

---

## Task 1: Create Breadcrumb Component

**Files:**
- Create: `src/components/Breadcrumb.astro`

**Step 1: Create the Breadcrumb component file**

Create `src/components/Breadcrumb.astro` with the following complete implementation:

```astro
---
interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface Props {
  items: BreadcrumbItem[];
}

const { items } = Astro.props;
---

<nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-6 pt-24 pb-8 lg:px-8">
  <ol role="list" class="flex items-center space-x-4">
    {items.map((item, index) => (
      <li>
        {index === 0 ? (
          <div>
            <a href={item.href} class="text-gray-400 hover:text-gray-500">
              <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0">
                <path d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" fill-rule="evenodd" />
              </svg>
              <span class="sr-only">{item.label}</span>
            </a>
          </div>
        ) : (
          <div class="flex items-center">
            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 shrink-0 text-gray-400">
              <path d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
            </svg>
            <a
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {item.label}
            </a>
          </div>
        )}
      </li>
    ))}
  </ol>
</nav>
```

**Step 2: Verify the component file exists**

Run: `ls -la src/components/Breadcrumb.astro`
Expected: File exists and is readable

**Step 3: Commit the component**

```bash
git add src/components/Breadcrumb.astro
git commit -m "feat: add breadcrumb navigation component"
```

---

## Task 2: Add Breadcrumbs to Blog Post Pages

**Files:**
- Modify: `src/pages/blogg/[...slug].astro`

**Step 1: Import Breadcrumb component**

Add the import after the existing imports at the top of the file (after line 4):

```typescript
import Breadcrumb from '../../components/Breadcrumb.astro';
```

**Step 2: Define breadcrumb data**

Add this after the author lookup (after line 20):

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blogg', href: '/blogg' },
  { label: post.data.title, href: `/blogg/${post.slug}`, current: true }
];
```

**Step 3: Add Breadcrumb component to template**

Add the Breadcrumb component right after `<Header />` (after line 29):

```astro
    <Header />
    <Breadcrumb items={breadcrumbs} />
```

**Step 4: Test in development**

Run: `npm run dev` (if not already running)
Navigate to: `http://localhost:4321/blogg/[any-blog-post]`
Expected: Breadcrumb shows "Home > Blogg > [Post Title]" below header

**Step 5: Commit**

```bash
git add src/pages/blogg/[...slug].astro
git commit -m "feat: add breadcrumbs to blog post pages"
```

---

## Task 3: Add Breadcrumbs to Blog Index Page

**Files:**
- Modify: `src/pages/blogg/index.astro`

**Step 1: Read the current file to understand structure**

Run: `cat src/pages/blogg/index.astro`
Expected: See the file structure and identify where to add breadcrumbs

**Step 2: Import Breadcrumb component**

Add import at the top with other component imports:

```typescript
import Breadcrumb from '../../components/Breadcrumb.astro';
```

**Step 3: Define breadcrumb data in frontmatter**

Add after any existing data preparation:

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Blogg', href: '/blogg', current: true }
];
```

**Step 4: Add Breadcrumb component to template**

Add right after `<Header />`:

```astro
<Breadcrumb items={breadcrumbs} />
```

**Step 5: Test in development**

Navigate to: `http://localhost:4321/blogg`
Expected: Breadcrumb shows "Home > Blogg" below header

**Step 6: Commit**

```bash
git add src/pages/blogg/index.astro
git commit -m "feat: add breadcrumbs to blog index page"
```

---

## Task 4: Add Breadcrumbs to Work Item Pages

**Files:**
- Modify: `src/pages/arbeid/[...slug].astro`

**Step 1: Import Breadcrumb component**

Add the import after existing imports (after line 4):

```typescript
import Breadcrumb from '../../components/Breadcrumb.astro';
```

**Step 2: Define breadcrumb data**

Add after the otherArbeid filtering (after line 23):

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Arbeid', href: '/arbeid' },
  { label: entry.data.title, href: `/arbeid/${entry.slug}`, current: true }
];
```

**Step 3: Add Breadcrumb component to template**

Add right after `<Header />` (after line 32):

```astro
    <Header />
    <Breadcrumb items={breadcrumbs} />
```

**Step 4: Test in development**

Navigate to: `http://localhost:4321/arbeid/[any-work-item]`
Expected: Breadcrumb shows "Home > Arbeid > [Work Title]" below header

**Step 5: Commit**

```bash
git add src/pages/arbeid/[...slug].astro
git commit -m "feat: add breadcrumbs to work item pages"
```

---

## Task 5: Add Breadcrumbs to Work Index Page

**Files:**
- Modify: `src/pages/arbeid/index.astro`

**Step 1: Read the current file to understand structure**

Run: `cat src/pages/arbeid/index.astro`
Expected: See the file structure

**Step 2: Import Breadcrumb component**

Add import at the top with other component imports:

```typescript
import Breadcrumb from '../../components/Breadcrumb.astro';
```

**Step 3: Define breadcrumb data in frontmatter**

Add after any existing data preparation:

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Arbeid', href: '/arbeid', current: true }
];
```

**Step 4: Add Breadcrumb component to template**

Add right after `<Header />`:

```astro
<Breadcrumb items={breadcrumbs} />
```

**Step 5: Test in development**

Navigate to: `http://localhost:4321/arbeid`
Expected: Breadcrumb shows "Home > Arbeid" below header

**Step 6: Commit**

```bash
git add src/pages/arbeid/index.astro
git commit -m "feat: add breadcrumbs to work index page"
```

---

## Task 6: Add Breadcrumbs to Contact Page

**Files:**
- Modify: `src/pages/kontakt.astro`

**Step 1: Read the current file**

Run: `cat src/pages/kontakt.astro`
Expected: See the file structure

**Step 2: Import Breadcrumb component**

Add import at the top with other component imports:

```typescript
import Breadcrumb from '../components/Breadcrumb.astro';
```

**Step 3: Define breadcrumb data in frontmatter**

Add in the frontmatter section:

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Kontakt', href: '/kontakt', current: true }
];
```

**Step 4: Add Breadcrumb component to template**

Add right after `<Header />`:

```astro
<Breadcrumb items={breadcrumbs} />
```

**Step 5: Test in development**

Navigate to: `http://localhost:4321/kontakt`
Expected: Breadcrumb shows "Home > Kontakt" below header

**Step 6: Commit**

```bash
git add src/pages/kontakt.astro
git commit -m "feat: add breadcrumbs to contact page"
```

---

## Task 7: Add Breadcrumbs to Privacy Page

**Files:**
- Modify: `src/pages/personvern.astro`

**Step 1: Read the current file**

Run: `cat src/pages/personvern.astro`
Expected: See the file structure

**Step 2: Import Breadcrumb component**

Add import at the top with other component imports:

```typescript
import Breadcrumb from '../components/Breadcrumb.astro';
```

**Step 3: Define breadcrumb data in frontmatter**

Add in the frontmatter section:

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Personvern', href: '/personvern', current: true }
];
```

**Step 4: Add Breadcrumb component to template**

Add right after `<Header />`:

```astro
<Breadcrumb items={breadcrumbs} />
```

**Step 5: Test in development**

Navigate to: `http://localhost:4321/personvern`
Expected: Breadcrumb shows "Home > Personvern" below header

**Step 6: Commit**

```bash
git add src/pages/personvern.astro
git commit -m "feat: add breadcrumbs to privacy page"
```

---

## Task 8: Add Breadcrumbs to 404 Page

**Files:**
- Modify: `src/pages/404.astro`

**Step 1: Read the current file**

Run: `cat src/pages/404.astro`
Expected: See the file structure

**Step 2: Import Breadcrumb component**

Add import at the top with other component imports:

```typescript
import Breadcrumb from '../components/Breadcrumb.astro';
```

**Step 3: Define breadcrumb data in frontmatter**

Add in the frontmatter section:

```typescript
const breadcrumbs = [
  { label: 'Home', href: '/' },
  { label: 'Side ikke funnet', href: '/404', current: true }
];
```

**Step 4: Add Breadcrumb component to template**

Add right after `<Header />`:

```astro
<Breadcrumb items={breadcrumbs} />
```

**Step 5: Test in development**

Navigate to: `http://localhost:4321/non-existent-page`
Expected: Breadcrumb shows "Home > Side ikke funnet" below header on 404 page

**Step 6: Commit**

```bash
git add src/pages/404.astro
git commit -m "feat: add breadcrumbs to 404 page"
```

---

## Task 9: Final Verification

**Step 1: Test all pages systematically**

Visit each page type and verify breadcrumbs display correctly:
- `/` - No breadcrumbs (homepage)
- `/blogg` - "Home > Blogg"
- `/blogg/[any-post]` - "Home > Blogg > [Title]"
- `/arbeid` - "Home > Arbeid"
- `/arbeid/[any-work]` - "Home > Arbeid > [Title]"
- `/kontakt` - "Home > Kontakt"
- `/personvern` - "Home > Personvern"
- `/non-existent` - "Home > Side ikke funnet"

**Step 2: Verify visual consistency**

Check:
- Breadcrumbs appear below header with proper spacing
- Home icon displays correctly
- Chevron separators are aligned
- Hover states work on links
- Text is readable and properly sized
- Responsive behavior on mobile

**Step 3: Verify accessibility**

Check:
- Screen reader announces "Breadcrumb" navigation
- Current page has `aria-current="page"`
- Home icon has screen reader text
- Keyboard navigation works

**Step 4: Create final commit if any adjustments needed**

```bash
git add .
git commit -m "fix: breadcrumb adjustments after final verification"
```

---

## Completion Checklist

- [ ] Breadcrumb component created with TypeScript interface
- [ ] All 7 page types have breadcrumbs
- [ ] Visual design matches provided example
- [ ] Accessibility attributes in place
- [ ] Responsive on mobile and desktop
- [ ] All commits made with descriptive messages
- [ ] Manual testing completed on all pages
