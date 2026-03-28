# Diah Rahmawati - Personal Portfolio

A modern, editorial-minimalist portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. This site showcases my professional journey, academic activities, and creative content.

## 🚀 Features

- **Infinite Activities Carousel**: Highlights my professional activities with smooth, continuous scrolling.
- **Media sharing**: Integration with TikTok and YouTube using specialized embeds.
- **Dynamic Content**: Category-based media sharing on the "Creative Content" page.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Premium Aesthetics**: Glassmorphism effects, smooth animations (FadeInUp), and curated color palettes.
- **Hover Transitions**: Interactive portrait image with a smooth fade-in effect.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/) inspiration
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Social Embeds**: [react-social-media-embed](https://www.npmjs.com/package/react-social-media-embed)

## 📦 Getting Started

### 1. Installation

```bash
npm install
```

### 2. Development

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build & Static Export

The project is configured for **Static Export (`output: 'export'`)**.

```bash
npm run build
```
This generates an `out/` directory containing the static site.

## 🌐 Deployment

The site is currently deployed to **Firebase Hosting**.

### Deployment Steps:
1. Ensure you have the [Firebase CLI](https://firebase.google.com/docs/cli) installed.
2. Build the project: `npm run build`
3. Deploy:
   ```bash
   firebase deploy
   ```

## 📝 Customization

- **Site Info**: Update `src/content/site.ts` for names, taglines, and social links.
- **Activities**: Add or modify images and captions in `src/content/activities.ts`.
- **Media**: Update TikTok and YouTube URLs in `src/content/media.ts` and `src/content/creative-media.ts`.

---

© 2024 Diah Rahmawati. Built with ❤️ using Next.js.
