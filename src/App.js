import { useState } from "react";
import "./App.css";

import data from "./Data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";

function App() {
    //initialisation of states
    const [movies, setMovies] = useState(data);
    const [nameSearch, setNameSearch] = useState("");
    // 1 declaring the  FUNCTION TO ADD MOVIE
    const add = (newMovie) => setMovies([...movies, newMovie]);
    const changeInput = (e) => setNameSearch(e);

    return (
        <div className="App">
            {/* 2 passing function to the add component */}
            <div className="header">
                <AddMovie add={add} />
                <Filter changeInput={changeInput} />
            </div>
            <MovieList movies={movies} nameSearch={nameSearch} />
        </div>
    );
}

export default App;
