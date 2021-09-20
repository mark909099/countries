import React from 'react'
import { allCountriesStore } from '../store/allCountriesStore';
import {
    TextField,
    Box, 
    Grid,
    Typography,
    Paper
        } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Fade } from 'react-reveal';


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

<Fade delay={1000} duration={2000}>
<TextField
placeholder="Search country. . ."
color="primary"
value={filter}
onChange={(evt) => {setFilter(evt.target.value); if(evt.target.value < 1) {
    setShowFalse(evt.target.value)
}}}>

</TextField>
</Fade>
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
<Box sx={{ flexGrow: 1}}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={0} md={3}></Grid>
<Grid item xs={6} md={3} display="flex" flexDirection="column"  alignItems="center">
<Typography variant="h5">{name}</Typography>
<img style={{height:150, width:150, border:'1px solid black'}} src={`${flag}`} alt="flag" />
</Grid>
<Grid item xs={1} md={1}></Grid>
<Grid item xs={5} md={5}>
<Box sx={{
    display:"flex",
    flexDirection:"column",
}}>
<Typography>Continent: {region}</Typography>
<Typography>Region: {subregion}</Typography>
<Typography>Capital: {capital}</Typography>
</Box>
</Grid>


<Grid item xs={12}>
<Typography textAlign="center" style={{paddingTop:'1rem'}}>Additional name spellings: {altSpellings.join(", ")}.</Typography>
</Grid>
<Grid item xs={6}>
<Typography>{timezones.length > 1? `Timezones ${timezones.join(", ")}` : `Timezone: ${timezones}`}</Typography>
<Typography>{languages.length === 1 && `Language: ${languages[0].name}`}</Typography>
<Typography>{languages.length === 2 && `Languages: ${languages[0].name}, ${languages[1].name}`}</Typography>
<Typography>{languages.length === 3 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}`}</Typography>
<Typography>{languages.length === 4 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}, ${languages[3].name}`}</Typography>
<p>Population: {population.toLocaleString()}</p>
<p>{area? `Area: ${area.toLocaleString()}` : null}</p>
</Grid>
<Grid item xs={6} display="flex" flexDirection="column">
<p>ISO code: {alpha2Code} / {alpha3Code}</p>
<p>Currency: {currencies[0].name}. code:{currencies[0].code}. symbol: {currencies[0].symbol}</p>
<p>Calling code: {callingCodes}</p>
</Grid>
<Grid item xs={6}>
<p>Top level domain:&nbsp; {topLevelDomain}</p>
<p>{regionalBlocs.length === 1 && `Political / Economic coalition: ${regionalBlocs[0].name}`}</p>
<p>{borders.length === 0 && "No bordering countries."}</p>
<p>{borders.length === 1 && `Bordering country: ${borders}`}</p>
<p>{borders.length > 1 && `Bordering countries: ${borders.join(", ")}`}</p>
</Grid>

</Grid>
</Box>
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
