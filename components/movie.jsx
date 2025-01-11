"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "../styles/movie.module.css";

export default function Movie({ title, poster_path, id }) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link prefetch={false} href={`/movies/${id}`}>
        {title}
      </Link>
    </div>
  );
}
