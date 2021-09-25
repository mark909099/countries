import React from 'react';
import Navbar from '../Navbar';
import { Typography, Link, Box } from '@mui/material';

export default function AboutGeneral() {
    return (
<div style={{height: '100vh'}}>
<Navbar />
<Box style={{paddingLeft:'0.5rem'}}>
<Typography variant="h3" style={{paddingBottom:'1rem'}}>About</Typography>
<Typography variant="subtitle1">Type in the name of a country, and get general information about it immediately.</Typography>
<Typography variant="body2" style={{paddingTop:'1rem', color:'black'}}>Developed by <Link href="https://github.com/mark909099"> Mark Lapin</Link>.</Typography>
</Box>
</div>
    )
}
