import { API_URL } from "../../../(home)/page";

async function getMovie(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const movie = await response.json();
  return movie;
}

export default async function MovieDetail({ params: { id } }) {
  const movie = await getMovie(id);
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.rating}</p>
      <p>{movie.description}</p>
    </div>
  );
}
