import React from 'react';
import { PhotoCard } from './PhotoCard';

export function PhotoGrid({ photos, favourites, onToggleFavourite }) {
  if (photos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No photos found matching your search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavourite={favourites.includes(photo.id)}
          onToggleFavourite={onToggleFavourite}
        />
      ))}
    </div>
  );
}