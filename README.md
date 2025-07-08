# Servindo Café ☕

## Context

Servindo Café is a landing page that consumes a custom API created in the M4 mini-project. The API provides coffee-related content, such as images, facts, and discount codes, aiming to promote coffee culture and offer exclusive deals to coffee lovers.

### Problem Statement

Many people are unaware of interesting facts about coffee and miss out on exclusive discounts. This project solves that by presenting curated coffee content in an attractive, single-page website, making information and offers easily accessible.

---

## Technologies Used

- **Next.js** (v[^15.3.4]) + **TypeScript**
- **React** (v[^19.1.0])
- **TailwindCSS** (v[^4.1.11])
- **Framer Motion** (for animations)
- **Heroicons** (for icons)
- **Google Fonts**: Nunito & Great Vibes

---

## Features

- Consumes 3+ GET routes from the custom API
- Each API route is displayed in a separate section
- Responsive and modern layout with TailwindCSS
- Custom fonts and color palette inspired by coffee
- Smooth scroll navigation between sections
- Animated elements and hover/focus effects
- No ready-made component libraries used
- Clean, componentized codebase

---

## Getting Started

### Prerequisites

- Node.js (v[v18+])
- npm or yarn

### Installation

1. **Clone this repository:**
   ```bash
   git clone https://github.com/Jamille-Santos/servindo-cafe-landing.git
   cd servindo-cafe-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables:**
   - Create a `.env.local` file and add your API URL:
     ```
     NEXT_PUBLIC_API_URL=https://servindo-cafe-api.vercel.app
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open http://localhost:3000 in your browser.**

---

## API Reference

This project consumes the API developed in the [M4 Mini Project](https://github.com/Jamille-Santos/servindo-cafe-api).

- `/api/coffees/random-image` - Returns a coffee-related image
- `/api/coffees/facts` - Returns interesting coffee facts
- `/api/reservations/discount-code` - Returns a discount code

---

## Project Structure

```
components/
  Navbar.tsx
  ImageSection.tsx
  FactsSection.tsx
  DiscountSection.tsx
  Footer.tsx
pages/
  index.tsx
  _app.tsx
  _document.tsx
styles/
  globals.css
```

---

## Demo

![Landing page screenshot](images/screencapture-localhost-3001-servindocafe.png)

[![Deploy on Vercel](https://vercel.com/button)](https://servindo-cafe.vercel.app)

---

## About

- **API repository:** [API Repo Link](https://github.com/Jamille-Santos/servindo-cafe-api)
- **Live site:** [https://servindo-cafe.vercel.app](https://servindo-cafe.vercel.app)
- **LinkedIn presentation:** [LinkedIn Post Link](https://www.linkedin.com/posts/jamille-santos-155722208_/)
- **Topics:** `nextjs`, `tailwindcss`, `typescript`

---

## How to Contribute

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m ":sparkles: Add amazing feature"`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- Coffee lovers everywhere ☕
- Jamille Santos, (https://www.linkedin.com/in/jamille-santos-155722208/)

---

## Presentation

- The project was presented on LinkedIn: [LinkedIn Post](https://www.linkedin.com/posts/jamille-santos-155722208_/)
- The presentation covers the problem, solution, development process, and a demo of the system.

---