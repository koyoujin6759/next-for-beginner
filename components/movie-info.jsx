import { API_URL } from "../app/constans";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  const movie = await response.json();
  return movie;
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h4>{movie.title}</h4>
        <p>⭐️ {movie.vote_average.toFixed(1)}</p>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
