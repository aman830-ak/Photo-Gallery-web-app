export const FAVOURITE_ACTIONS = {
  TOGGLE_FAVOURITE: 'TOGGLE_FAVOURITE',
};

export const initialFavouritesState = [];
export function initFavourites(initialValue) {
  try {
    const saved = localStorage.getItem('favourite_photos');
    return saved ? JSON.parse(saved) : initialValue;
  } catch (err) {
    console.error('Failed to read favourites from localStorage:', err);
    return initialValue;
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case FAVOURITE_ACTIONS.TOGGLE_FAVOURITE: {
      const id = action.payload;
      const exists = state.includes(id);
      const updatedFavourites = exists
        ? state.filter((item) => item !== id)
        : [...state, id];

      try {
        localStorage.setItem('favourite_photos', JSON.stringify(updatedFavourites));
      } catch (err) {
        console.error('Failed to update localStorage:', err);
      }

      return updatedFavourites;
    }
    default:
      return state;
  }
}