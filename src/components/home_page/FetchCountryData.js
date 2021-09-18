import { mergeClasses } from '@material-ui/styles';
import React, { useState, useEffect } from 'react'
import { useStore } from '../store/pokemonStore';
import './design.css'
var axios = require("axios").default;


const pokemon_URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json";





export default function FetchCountryData() {
const [countries, setCountries] = useState([]);
// const { filter, pokemon, setFilter, setPokemon } = pokemonStore();
// const getDataOfAllCountries = async () => {
//     try {
//         let resp = await axios.get('https://restcountries.eu/rest/v2/all');
//         console.log(resp.data)
//         setCountries(resp.data);
//     } catch (err) {
//         console.log(err)
//     }
// }


const FilterInput = () => {
    const filter = useStore(state => state.filter);
    const setFilter = useStore(state => state.setFilter);
    return (
        <input value={filter} onChange={(evt) => {setFilter(evt.target.value)}} />
    )
}

const PokemonTable =() => {
    const pokemon = useStore(state => state.pokemon);
    const filter = useStore(state => state.filter);
    return (
        // <table width="100%">
        //     <tbody>
        //         {pokemon
        //         .filter(({ name: { english } }) =>
        //         english.toLowerCase().includes(filter.toLowerCase())
        //         )
        //         .map(({ id, name: { english }, type}) => (
        //             <tr key={id}>
        //                 <a>{english}</a>
        //                 <td>{type.join(", ")}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>

<table width="100%">
<tbody>
    {pokemon
    .filter(({ name: { english } }) =>
    english.toLowerCase().includes(filter.toLowerCase())
    )
    .map(({ id, name: { english }, type}) => (
        <tr key={id}>
            <a>{english}</a>
            <td>{type.join(", ")}</td>
        </tr>
    ))
    }
</tbody>
</table>
    )

};

fetch(pokemon_URL)
  .then((resp) => resp.json())
  .then((pokemon) =>
    useStore.setState((state) => ({
      ...state,
      pokemon,
    }))
  )


// const setPokemon = useStore((state) => state.setPokemon)
// const pokemon = useStore((state) => state.pokemon)

// useEffect(() => {
//     fetch(pokemon_URL)
//     .then(resp => resp.json())
//     .then(pokemon => setPokemon(pokemon))
// })

// useEffect(() => {
//     getDataOfAllCountries()
// }, []);


    return (
<div className='root'>
 <FilterInput />
 <div>
<PokemonTable />
 </div>
 
{/* <ShowCountries /> */}
</div>
    )
}
