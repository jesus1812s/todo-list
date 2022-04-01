import Card from '../Components/shared/Card';
import { Link } from 'react-router-dom';

function FavoritesPage() {
  return (
    <Card>
      <div className="about">
        <h1>Favorites</h1>
        <p> This is the favorites page</p>

        <p>
          <Link to="/"> back home</Link>
        </p>
      </div>
    </Card>
  );
}

export default FavoritesPage;
