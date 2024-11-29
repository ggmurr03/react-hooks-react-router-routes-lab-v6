import {Link} from 'react-router-dom';
import Movie from '../pages/Movie';

function MovieCard({title, time, genres}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to="/movie/:id"><Movie title={title} time={time} genres={genres}/></Link>
    </article>
  );
};

export default MovieCard;