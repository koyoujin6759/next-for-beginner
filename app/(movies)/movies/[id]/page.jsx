import { Suspense } from "react";
import MovieVideos from "@/components/movie-videos";
import styles from "../../../../styles/movie.module.css";
import MovieInfo, { getMovie } from "@/components/movie-info";

export async function generateMetadata({ params: { id } }) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }) {
  return (
    <div className={styles.container}>
      <Suspense fallback={<p>Loading Movie Info...</p>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<p>Loading Movie Videos...</p>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
