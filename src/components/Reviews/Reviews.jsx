import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const Reviews = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  const id = params.movieId;
  useEffect(
    review => {
      id &&
        getMoviesApi(`/movie/${id}/reviews`)
          .then(review => setReview(review))
          .catch(error => console.log(error.message));
      // console.log('useEffect called');
    },
    [id]
  );
  return (
    <ul>
      {!review.results || review.total_pages === 0 ? (
        <h3>There are not any reviews for this movie.</h3>
      ) : (
        review.results.map(el => (
          <li key={el.id}>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </li>
        ))
      )}
    </ul>
  );
};

export default Reviews;
