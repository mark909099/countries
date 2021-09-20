import React from 'react'
import { allCountriesStore } from '../store/allCountriesStore';
import { TextField, Box } from '@mui/material';


export default function FetchAllCountries() {

const FilterInput = () => {
    const filter = allCountriesStore(state => state.filter);
    const setFilter = allCountriesStore(state => state.setFilter);
    const setShowFalse = allCountriesStore(state => state.setShowFalse);
    return (
<div>
<Box
textAlign="center"
paddingTop="1rem"
>
<TextField className="input1"
placeholder="Search country. . ."
color="primary"
value={filter}
onChange={(evt) => {setFilter(evt.target.value); if(evt.target.value < 1) {
    setShowFalse(evt.target.value)
}}}>

</TextField>
</Box>
</div>

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
            .map(({name, alpha2Code, alpha3Code, flag, region, subregion, timezones, population, borders, area, languages, topLevelDomain, capital, altSpellings, callingCodes, regionalBlocs, currencies}) => (
                <div key={name}>
                    <p>{name}</p>
                    <img style={{height:100, width:100}} src={`${flag}`} alt="flag" />
                    <p>Continent: {region}</p>
                    <p>Region: {subregion}</p>
                    <p>Capital: {capital}</p>
                    <p>Alternative name spellings: {altSpellings.join(", ")}.</p>
                    <p>{timezones.length > 1? `Timezones ${timezones.join(", ")}` : `Timezone: ${timezones}`}</p>
                    <p>{languages.length === 1 && `Language: ${languages[0].name}`}</p>
                    <p>{languages.length === 2 && `Languages: ${languages[0].name}, ${languages[1].name}`}</p>
                    <p>{languages.length === 3 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}`}</p>
                    <p>{languages.length === 4 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}, ${languages[3].name}`}</p>
                    <p>Population: {population.toLocaleString()}</p>
                    <p>{area? `Area: ${area.toLocaleString()}` : null}</p>
                    <p>ISO code: {alpha2Code} / {alpha3Code}</p>
                    <p>Currency:{currencies[0].name}. code:{currencies[0].code}. symbol: {currencies[0].symbol}</p>
                    <p>Calling code: {callingCodes}</p>
                    <p>Top level domain:&nbsp; {topLevelDomain}</p>
                    <p>{regionalBlocs.length === 1 && `${regionalBlocs[0].name}`}</p>
                    <p>{borders.length === 0 && "No bordering countries."}</p>
                    <p>{borders.length === 1 && `Bordering country: ${borders}`}</p>
                    <p>{borders.length > 1 && `Bordering countries: ${borders.join(", ")}`}</p>
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
