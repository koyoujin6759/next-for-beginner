import styles from "../styles/movie-videos.module.css";
import { API_URL } from "../app/constans";

async function getVideos(id) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  //   throw new Error("Failed to fetch videos");
  const response = await fetch(`${API_URL}/${id}/videos`);
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  const videos = await response.json();
  return videos;
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  const cutVideos = videos.slice(0, 10);

  return (
    <div className={styles.container}>
      {cutVideos.map((video) => (
        <iframe key={video.id} src={`https://www.youtube.com/embed/${video.key}`} title={video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      ))}
    </div>
  );
}
