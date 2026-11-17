import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPokemons } from "./app/features/pokemon/pokemonSlice";

function App() {
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(fetchPokemons()); 
  }, [dispatch]); 
  return (
    <div className="App">
      <header className="App-header">
        <div>Hola Mundo</div>
      </header>
    </div>
  );
}

export default App;
