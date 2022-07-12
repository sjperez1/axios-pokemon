import React, {useState, useEffect} from 'react'
import axios from 'axios';

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([])
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setPokemon(response.data.results)})
        // if the clicked element is changed, execute the useEffect again.
        }, [clicked]);
    return (
        <div>
            <button onClick={e => setClicked(true)}>Fetch Pokemon</button>
            <div>
                {
                    clicked? 
                        pokemon.length > 0 &&pokemon.map((pokemon, i)=>{
                            return (<div key={i}>{pokemon.name}</div>)
                        }):
                        []
                }
            </div>
        </div>
    )
}
export default PokemonApi