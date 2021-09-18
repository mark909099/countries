import React, { useState, useEffect } from 'react'
import Counter from './Counter';
import { allCountriesStore } from '../store/allCountriesStore';
import {useStore1} from '../store/counterStore';

const axios = require('axios').default;


export default function FetchAllCountries() {
const increase = useStore1(state => state.increase)

const FilterInput = () => {
    const filter = allCountriesStore(state => state.filter);
    const setFilter = allCountriesStore(state => state.setFilter);
    const setShow = allCountriesStore(state => state.setShow);
    return (
<input type="text" value={filter} onChange={(evt) => {setFilter(evt.target.value); if(evt.target.value < 1) {
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
            .map(({name}) => (
                <div key={name}>
                    <p>{name}</p>
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
