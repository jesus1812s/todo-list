import React from 'react';
import { /* FaQuestion, */ FaCheck } from 'react-icons/fa';
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
        <FaCheck size={30} />
      </Link>
    </div>
  );
}

export default FavoriteIconLink;
