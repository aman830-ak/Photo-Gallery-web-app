import React from 'react';

export const SearchBar = React.memo(function SearchBar({ value, onChange }) {
  return (
    <div className="mb-8 max-w-md mx-auto">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by author name..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
    </div>
  );
});