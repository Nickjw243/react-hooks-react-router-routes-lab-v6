import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const url = "http://localhost:4000/movies"
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(url)
    .then(r => r.json())
    .then(data => setMovies(data))
    .catch(error => console.error(error))
  }, [])

  const movieList = movies.map(movie => {
    return <MovieCard key={movie.id} movie={movie} />
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page!</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
