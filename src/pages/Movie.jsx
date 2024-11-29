import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie({title, time, genres}) {

 



  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{title}</h1>
        <p>{time}</p>

        {genres.map(genre=> <span>{genre}</span>)
        
        
        }
      </main>
    </>
  );
};

export default Movie;
