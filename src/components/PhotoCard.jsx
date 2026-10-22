import React from 'react';

export const PhotoCard = React.memo(function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-800 truncate pr-2" title={photo.author}>
          {photo.author}
        </p>
        <button
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          className="p-1 text-gray-400 hover:text-red-500 transition-colors focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-6 h-6 transition-colors ${
              isFavourite ? 'fill-red-500 text-red-500' : 'fill-none stroke-current'
            }`}
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.293l1.318-1.275a4.5 4.5 0 116.364 6.364L12 21.35l-7.682-7.693a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});