
import jwt_decode from 'jwt-decode';
import FavoriteList from '../components/FavList';

function Favorites() {
  const token = localStorage.getItem('token');
  const decoded = jwt_decode(token);
  const userId = decoded.id;

  return (
    <>
    <FavoriteList userId={userId} />
    </>
  );
}

export default Favorites;
