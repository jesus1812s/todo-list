import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FavoriteIconLink() {
  return (
    <div className="favorite-link">
      <Link
        to={{
          pathname: '/favorites',
          search: '?sort=favorite',
        }}
      >
        <FaTasks size={30} />
      </Link>
    </div>
  );
}

export default FavoriteIconLink;
