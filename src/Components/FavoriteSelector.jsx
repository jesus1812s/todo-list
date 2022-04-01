import React from 'react';
import { useState } from 'react';

function FavoriteSelector({ select, selected }) {
  // const [selected, setSelected] = useState(false);
  // const [isFavorite, setFavorite] = useState(false);

  /* const handleChange = (e) => {
    if (selected) {
      setFavorite(true);
      setSelected(+e.currentTarget.value);
      select(+e.currentTarget.value);
    } else setFavorite(!isFavorite);
  }; */

  const handleChange = (e) => {
    if (selected) {
      select(+e.currentTarget.value);
    }
  };

  return (
    <>
      <label htmlFor="fav">Add to favorites ? </label>
      <input
        type="checkbox"
        id="fav"
        name="Favorite"
        value="1"
        onChange={handleChange}
        checked={selected}
      />
    </>
  );
}

export default FavoriteSelector;
