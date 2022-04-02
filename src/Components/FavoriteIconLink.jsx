import React from 'react';
import { FaTasks } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';
import { useContext } from 'react';

function FavoriteIconLink() {
  const { fetchTodosByFavorites } = useContext(TodoContext);

  return (
    <div className="favorite-link">
      <Link
        to={{
          pathname: '/favorites',
          search: '?sort=favorite',
        }}
      >
        <FaTasks onClick={fetchTodosByFavorites} size={30} />
      </Link>
    </div>
  );
}

export default FavoriteIconLink;
