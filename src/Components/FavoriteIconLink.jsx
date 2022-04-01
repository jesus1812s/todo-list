import React from 'react';
import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FavoriteIconLink() {
  return (
    <div className="about-link">
      <Link
        to={{
          pathname: '/favorites',
          search: '?sort=favorite',
        }}
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default FavoriteIconLink;
