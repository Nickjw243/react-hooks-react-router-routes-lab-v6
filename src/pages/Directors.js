import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(r => r.json())
    .then(data => setDirectors(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map(director =>
          <article key={director.id}>
            <h2>{director.name}</h2>
            {director.movies.map(movie => 
              <ul>{movie}</ul>
              )}
          </article>
          )}
      </main>
    </>
  );
};

export default Directors;
