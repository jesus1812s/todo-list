import { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TodoContext from '../context/TodoContext';

function Header({ text, bgColor, textColor }) {
  const { fetchTodosByDate } = useContext(TodoContext);
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <Link
          to="/"
          onClick={fetchTodosByDate}
          style={{ textDecoration: 'none', color: '#ff6a95' }}
        >
          <h2>{text}</h2>
        </Link>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Todo UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
