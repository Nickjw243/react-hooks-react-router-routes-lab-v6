import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(r => r.json())
    .then(data => setActors(data))
  }, [])

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map(actor => 
          <article key={actor.id}>
            <h2>{actor.name}</h2>
            {actor.movies.map(movie => 
              <ul>{movie}</ul>
              )}
          </article>
          )}
      </main>
    </>
  );
};

export default Actors;
