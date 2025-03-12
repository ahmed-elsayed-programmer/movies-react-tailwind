# Movie Explorer

## Overview
Movie Explorer is a modern web application built with React.js and TypeScript that allows users to search and explore movies using The Movie Database (TMDb) API. It features infinite scrolling, a favorites system, and optimized performance.

## Features
- **Search Functionality**: Search movies by name using the TMDb API.
- **Movie Listing**: Display search results in a responsive grid with posters, titles, and ratings.
- **Movie Details Page**: View detailed information about a movie, including overview, release date, genres, and rating.
- **Performance Optimization**: Implements lazy loading and code splitting.
- **Modern UI**: Styled using Tailwind CSS and shadcn/ui components.

## Tech Stack
- **Frontend**: React.js, TypeScript
- **State Management**: Redux Toolkit 
- **Styling**: Tailwind CSS, shadcn/ui
- **API**: TMDb API (The Movie Database)
- **Package Manager**: pnpm

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (latest LTS recommended)
- **pnpm** (installed globally: `npm install -g pnpm`)

### Clone the Repository
```sh
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer
```

### Install Dependencies
```sh
pnpm install
```

### Set Up Environment Variables
Create a `.env` file in the root directory and add your TMDb API key:
```env
VITE_API_TOKEN=your_tmdb_api_key
```

### Start the Development Server
```sh
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Folder Structure
```
movie-explorer/
│── src/
│   ├── components/
│   │   ├── MovieCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FavoriteButton.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── MovieDetails.tsx
│   ├── store/
│   │   ├── movieSlice.ts
│   │   ├── favoritesSlice.ts
│   ├── lib/
│   │   ├── api.ts
│   ├── App.tsx
│   ├── main.tsx
│── public/
│── .env
│── package.json
│── pnpm-lock.yaml
│── tailwind.config.ts
│── README.md
```

## Deployment
### Build for Production
```sh
pnpm build
```

### Deploy to Vercel
```sh
pnpm install -g vercel
vercel
```

## Contributing
1. Fork the repository
2. Create a new branch (`feature-branch`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Enjoy using **Movie Explorer**! 🚀

