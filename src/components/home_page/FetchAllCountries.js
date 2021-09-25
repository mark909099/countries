import React from 'react'
import { allCountriesStore } from '../store/allCountriesStore';
import {
    TextField,
    Box, 
    Grid,
    Typography,
    CardMedia,
    Divider
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
            name.common.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({name, flags, region, subregion, borders, area, languages, capital, altSpellings }) => (
<div key={name.common}>
<Box sx={{ flexGrow: 1}}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={0} md={2}></Grid>
<Grid item xs={6} md={4} display="flex" flexDirection="column"  alignItems="center">
<Typography style={{paddingBottom:'0.5rem'}} variant="h5">{name.common}</Typography>
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
        image={`${flags[0]}`}
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

<Grid item xs={0} sm={0} md={1} lg={2} xl={3}></Grid>

<Grid item xs={6} sm={6} md={5} lg={4} xl={3}>
<Typography style={{textAlign:'center'}} variant="subtitle2">{languages && Object.keys(languages).length === 1 ? `Language: ${Object.values(languages)}` : null}</Typography>
<Typography style={{textAlign:'center'}} variant="subtitle2">{languages && Object.keys(languages).length > 1 ? `Languages: ${Object.values(languages).join(", ")}` : null}</Typography>
</Grid>

<Grid item xs={6} sm={6} md={5} lg={4} xl={3}>
<Typography style={{textAlign:'center'}} variant="subtitle2">{area? `Area: ${area.toLocaleString()} sq. kilometers` : null}</Typography>
</Grid>

<Grid item xs={0} sm={0} md={1} lg={2} xl={3}></Grid>



<Grid item xs={10}>
<Box
    sx={{
        paddingTop:'2rem',
        paddingRight:'10px',
        paddingLeft:'10px'
    }}>
<Typography style={{textAlign:'center'}} variant="subtitle2">{borders == null && "No bordering countries."}</Typography>
<Typography style={{textAlign:'center'}} variant="subtitle2">{borders && borders.length === 1 ? `Bordering country: ${borders}` : null}</Typography>
<Typography style={{textAlign:'center'}} variant="subtitle2">{borders && borders.length > 1 ? `Bordering countries: ${borders.join(", ")}` : null}</Typography>
</Box>
</Grid>

</Grid>
</Box>

<Box sx={{
    paddingTop:'2rem',
    paddingBottom:'2rem'
}}>
<Divider />
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


fetch('https://restcountries.com/v3/all')
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
