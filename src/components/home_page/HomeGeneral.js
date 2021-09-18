import React from 'react'
import Navbar from '../Navbar';
import FetchCountryData from './FetchCountryData';
import Counter from './Counter';
import FetchAllCountries from './FetchAllCountries';

export default function HomeGeneral() {

    return (
<div>
<Navbar />  
<Counter />
{/* <FetchCountryData />  */}
<FetchAllCountries />
</div>
    )
}
