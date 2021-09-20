import React from 'react'
import { allCountriesStore } from '../store/allCountriesStore';
import {
    TextField,
    Box, 
    Grid,
    Typography,
    CardMedia
        } from '@mui/material';
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
paddingBottom="1rem"
>

<Fade duration={2000}>
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
            <div style={{backgroundColor: "#f5f5f5"}}>
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
<Grid item xs={0} md={2}></Grid>
<Grid item xs={6} md={4} display="flex" flexDirection="column"  alignItems="center">
<Typography style={{paddingBottom:'0.5rem'}} variant="h5">{name}</Typography>
<Box
    sx={{
        width: {
            xs: 150,
            sm: 180,
            md: 210,
            lg: 240,
        }
    }}>
<CardMedia
        component="img"
        image={`${flag}`}
        alt="flag"
      />
</Box>
</Grid>
<Grid item xs={1} md={1}></Grid>
<Grid item xs={5} md={5}>
<Box sx={{
    display:"flex",
    flexDirection:"column",
}}>
<Typography style={{marginTop:'20px'}} variant="subtitle1">Continent: {region}</Typography>
<Typography style={{paddingBottom:'6px', paddingTop:'6px'}} variant="subtitle1">Region: {subregion}</Typography>
<Typography variant="subtitle1">Capital: {capital}</Typography>
</Box>
</Grid>


<Grid item xs={12}>
<Typography variant="subtitle2" textAlign="center" style={{paddingTop:'1rem', paddingBottom:'1rem'}}>Additional name spellings: {altSpellings.join(", ")}.</Typography>
</Grid>

<Grid item xs={1} sm={2} lg={3} xl={3}></Grid>
<Grid item xs={4} sm={4} lg={3} xl={4}>
<Box
    sx={{
        display:'flex',
        flexDirection:'column',
    }}>
<Typography variant="subtitle2">{languages.length === 1 && `Language: ${languages[0].name}`}</Typography>
<Typography variant="subtitle2">{languages.length === 2 && `Languages: ${languages[0].name}, ${languages[1].name}`}</Typography>
<Typography variant="subtitle2">{languages.length === 3 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}`}</Typography>
<Typography variant="subtitle2">{languages.length === 4 && `Languages: ${languages[0].name}, ${languages[1].name}, ${languages[2].name}, ${languages[3].name}`}</Typography>
<Typography style={{paddingBottom:'12px', paddingTop:'12px'}} variant="subtitle2">Population: {population.toLocaleString()}</Typography>
<Typography variant="subtitle2">{area? `Area: ${area.toLocaleString()}` : null}</Typography>
</Box>
</Grid>



<Grid item xs={7} sm={6} lg={6} xl={5}>
<Box
    sx={{
        display:'flex',
        flexDirection:'column',
        paddingRight:'10px'
    }}>
<Typography variant="subtitle2">ISO code: {alpha2Code} / {alpha3Code}</Typography>
<Typography style={{paddingBottom:'12px', paddingTop:'12px'}} variant="subtitle2">Currency: {currencies[0].name}.&nbsp; Symbol: {currencies[0].symbol}</Typography>
<Typography variant="subtitle2">Calling code: {callingCodes}</Typography>
</Box>
</Grid>

<Grid item xs={1} md={2} lg={3}></Grid>
<Grid item xs={10} md={8} lg={8}>
<Box
    sx={{
        paddingTop:'2rem',
        paddingRight:'10px',
        paddingLeft:'10px'
    }}>
<Typography style={{paddingBottom:'3px'}} variant="subtitle2">Top level domain:&nbsp; {topLevelDomain}</Typography>
<Typography style={{paddingBottom:'3px'}} variant="subtitle2">{regionalBlocs.length === 1 && `Political / Economic coalition: ${regionalBlocs[0].name}`}</Typography>
<Typography style={{paddingBottom:'3px'}} variant="subtitle2">{timezones.length > 1? `Timezones: ${timezones.join(", ")}` : `Timezone: ${timezones}`}</Typography>
<Typography variant="subtitle2">{borders.length === 0 && "No bordering countries."}</Typography>
<Typography variant="subtitle2">{borders.length === 1 && `Bordering country: ${borders}`}</Typography>
<Typography variant="subtitle2">{borders.length > 1 && `Bordering countries: ${borders.join(", ")}`}</Typography>
</Box>
</Grid>

<Grid item xs={1} md={2} lg={1}></Grid>

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
