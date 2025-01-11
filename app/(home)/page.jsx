import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";
import { API_URL } from "../constans";
export const metadata = {
  title: "Home ",
};

export default async function HomePage() {
  const movies = await fetch(API_URL).then((res) => res.json());

  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
}
