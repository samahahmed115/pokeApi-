import {React, useState ,useEffect } from 'react'
import './App.css'
import axioes from 'axios' // creat batch to data

function App() {
const [pokemon, setPokeMon] = useState([]);
useEffect(()=> {
  axioes.get("https://pokeapi.co/api/v2/pokemon")
  .then((response)=> console.log(response.data.results.map((p)=> p.name)))
},[])
  return (
    <div>App</div>
  )
}

export default App
