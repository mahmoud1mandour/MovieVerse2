# MovieVerse - Movie Discovery Platform

MovieVerse is a modern movie discovery platform built with Next.js, offering users an immersive way to explore trending films, upcoming releases, and detailed movie information. With enhanced performance, SEO optimization, and a sleek UI, MovieVerse delivers a seamless experience for cinephiles.

# 🎬 Key Features

✔ User Authentication – Secure login & registration
✔ Trending Movies – Discover popular films this week
✔ Coming Soon – Preview upcoming releases
✔ Detailed Movie Info – Cast, ratings, trailers, and more
✔ Advanced Search – Find movies by title, genre, or keyword
✔ Responsive Design – Works flawlessly on all devices
✔ Protected Routes – Private access for authenticated users

# 🚀 Tech Stack

Next.js 14 – React framework with SSR & optimized performance

Tailwind CSS – Modern, utility-first styling

TMDB API – Real-time movie data

# 📋 Prerequisites

Node.js (v18+)

npm / yarn / pnpm

# 🛠️ Setup & Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmoud1mandour/MovieVerse2.git
   cd movieverse
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Application Structure

- Home Page : Features trending movies and upcoming releases
- Movies Page : Browse all available movies (requires authentication)
- Movie Details : View comprehensive information about a specific movie
- About Page : Information about the MovieVerse platform
- Login/Register : User authentication pages

## Authentication

The application uses local storage for authentication. To access protected routes like the Movies page, users need to register and log in.

## UI/UX

MovieVerse features a modern, responsive design with:

- Gradient backgrounds
- Card-based movie displays
- Smooth transitions and hover effects
- Pagination for movie browsing
- Loading indicators for asynchronous operations

![App Screenshot](./public/Images/Screenshot.png)
