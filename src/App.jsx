import {React, useState ,useEffect } from 'react'
import './App.css'
import axios from 'axios' // creat batch to data
import PokemonList from './components/PokemonList';
import Pagination from './components/Pagination';

function App() {
  
const [pokemon, setPokemon] = useState([]);
const [loading, setLoading] = useState (true);
const [currentPageUrl , setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
const [ nextPageUrl, setNextPageUrl]= useState();
const [ prevPageUrl, setPrePageUrl]= useState();
useEffect(()=> { 
  let cancel;
  setLoading(true);
  axios
  .get(currentPageUrl, {
    cancelToken: new axios.CancelToken((c) => (cancel=c) ),
})
  .then((response)=> 
   { setPokemon(response.data.results.map((p)=> p.name));
    setLoading(false);
    setNextPageUrl(response.data.next);
    setPrePageUrl(response.data.previous);
   })
  .catch((error)=> {
    console.log(error);
    setLoading(false);
  });
  return() =>{
    cancel();
  }
},[currentPageUrl]);
    if (loading) return"wait loading."
    function goToNextPage(){
      setCurrentPageUrl(nextPageUrl);
    }
    function goToPrevPage(){
      setCurrentPageUrl(prevPageUrl);

    }
  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <Pagination  
      goToNextPage={nextPageUrl ? goToNextPage : null} 
      goToPrevPage={prevPageUrl ? goToPrevPage : null}   />
    </div>
  )
}

export default App
