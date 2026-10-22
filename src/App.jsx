import React, { useState, useCallback, useMemo, useReducer } from 'react';
import { useFetchPhotos } from './hooks/useFetchPhotos';
import {
  favouritesReducer,
  initialFavouritesState,
  initFavourites,
  FAVOURITE_ACTIONS,
} from './reducers/favouritesReducer';
import { SearchBar } from './components/SearchBar';
import { PhotoGrid } from './components/PhotoGrid';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';

export default function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    initialFavouritesState,
    initFavourites
  );

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleToggleFavourite = useCallback((id) => {
    dispatch({ type: FAVOURITE_ACTIONS.TOGGLE_FAVOURITE, payload: id });
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) {
      return photos;
    }
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase().trim())
    );
  }, [photos, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-2">
          Photo Gallery
        </h1>
        <p className="text-gray-600">Discover and save your favourite photos</p>
      </header>

      <main className="max-w-7xl mx-auto">
        <SearchBar value={searchTerm} onChange={handleSearchChange} />

        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}

        {!loading && !error && (
          <PhotoGrid
            photos={filteredPhotos}
            favourites={favourites}
            onToggleFavourite={handleToggleFavourite}
          />
        )}
      </main>
    </div>
  );
}