# Photo Gallery Web App

A responsive, high-performance Photo Gallery Web Application built with **React**, **Vite**, and **Tailwind CSS**. This project fetches photos from the Picsum Photos API, displays them in a fully responsive grid, enables real-time client-side search filtering by author, and allows users to mark photos as favourites with persistent storage.

Built as part of the Celebrare Frontend Internship Pre-Screening Assignment.

---

## 🚀 Features

1. **Picsum API Integration**: Fetches 30 photos on initial load using a custom hook (`useFetchPhotos`) complete with loading spinner and error handling.
2. **Responsive Grid Layout**:
   - **Desktop**: 4 columns
   - **Tablet**: 2 columns
   - **Mobile**: 1 column
3. **Real-time Search Filter**: Client-side filtering by author name as you type without making additional network requests.
4. **Favourites Management**: Toggle favourite photos using React's `useReducer`. Favourited items automatically persist across browser refreshes via `localStorage`.
5. **Performance Optimizations**:
   - `useCallback` used for memoizing event handlers.
   - `useMemo` utilized for memoizing the search filter calculation.
   - Component optimization using `React.memo`.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: `useReducer` + `localStorage`
- **Linter**: ESLint

---

## 📁 Project Structure

```text
photo-gallery/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── PhotoCard.jsx
│   │   ├── PhotoGrid.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   └── useFetchPhotos.js
│   ├── reducers/
│   │   └── favouritesReducer.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 💻 Getting Started

### Prerequisites
Ensure you have **Node.js** (v16+ recommended) and **npm** installed on your system.

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aman830-ak/photo-gallery.git
   cd photo-gallery
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```