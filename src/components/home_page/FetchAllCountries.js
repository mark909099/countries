import React, { useState, useEffect } from 'react'
import Counter from './Counter';
import { allCountriesStore } from '../store/allCountriesStore';
import {useStore1} from '../store/counterStore';


export default function FetchAllCountries() {
const [showPopulation, setShowPopulation] = useState(false);
const [showInformation, setShowInformation] = useState(false);
const FilterInput = () => {
    const filter = allCountriesStore(state => state.filter);
    const setFilter = allCountriesStore(state => state.setFilter);
    const setShow = allCountriesStore(state => state.setShow);
    return (
<input value={filter} onChange={(evt) => {setFilter(evt.target.value); if(evt.target.value < 1) {
    {setShow(evt.target.value)}
}}} />
    )
}


const ListOfCountries = () => {
const country = allCountriesStore(state => state.country);
const filter = allCountriesStore(state => state.filter);
const show = allCountriesStore(state => state.show);

    if (show) {
        return (
            <div>
            {country
            .filter(({name}) =>
            name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({name, alpha2Code, alpha3Code, flag, region, subregion, timezones, population, borders, area}) => (
                <div key={name}>
                    <p>{name}</p>
                    <img style={{height:100, width:100}} src={`${flag}`} />
                    <p>Continent: {region}</p>
                    <p>Region: {subregion}</p>
                    <p>{timezones.length > 1? `Timezones ${timezones}` : `Timezone: ${timezones}`}</p>
                    <p>Population: {population.toLocaleString()}</p>
                    <p>{area? `Area: ${area.toLocaleString()}` : null}</p>
                    <p>ISO code: {alpha2Code} / {alpha3Code}</p>
                    <p>{borders.length > 1? `Bordering countries: ${borders.join(", ")}` : `Bordring countries: none`}</p>
                </div>
                
            ))
            
            }
            </div>
            
                )
    } else {
        return null
    }
}


fetch('https://restcountries.eu/rest/v2/all')
  .then((resp) => resp.json())
  .then((country) =>
    allCountriesStore.setState((state) => ({
      ...state,
      country,
    }))
  )

    return (
<div>
<FilterInput />
<ListOfCountries />

</div>
    )
}
