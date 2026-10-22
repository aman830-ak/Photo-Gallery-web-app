import React from 'react';

export function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-center max-w-md mx-auto my-8">
      <p className="font-semibold">Error Loading Content</p>
      <p className="text-sm mt-1">{message}</p>
    </div>
  );
}