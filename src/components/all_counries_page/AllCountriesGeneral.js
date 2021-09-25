import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import {
    Typography,
    CircularProgress
        } from '@mui/material';


const axios = require('axios').default;

export default function AllCountriesGeneral() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);


useEffect(() => {
    const fetchData = async () => {
        try {
            setLoading(true);
            const result = await axios(
            'https://restcountries.com/v3/all',
            );
            
            setData(result.data);
            console.log(result.data)
            setLoading(false);
        } catch (err) {
            console.log(err)
        }
    };
 
    fetchData();
  }, []);

if (loading) {
    return (
        <div style={{height:'100vh'}}>
        <Navbar />
        <div style={{position:'absolute', top:'50%', left:'50%'}}><CircularProgress color="secondary" /></div>
        </div>
    )
}

    return (
<div>
<Navbar />

<Typography style={{paddingLeft:'1rem', paddingBottom:'1rem'}} variant="h3">All countries</Typography>
{data.map(({name}) => (
    <div key={name.common}>
        <Typography style={{paddingLeft:'1rem', paddingBottom:'1rem'}} variant="subtitle1">{name.common}</Typography>
    </div>
))}            
</div>
    )
}
