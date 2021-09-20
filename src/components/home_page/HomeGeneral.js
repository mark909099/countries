import React from 'react'
import FetchAllCountries from './FetchAllCountries';
import Header from './Header';
import Navbar from '../Navbar';

export default function HomeGeneral() {

    return (

<div style={{height:'100vh'}}>
<Navbar />
<Header />
<FetchAllCountries />
</div>

    )
}
