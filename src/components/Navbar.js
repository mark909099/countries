import React from 'react';
import { 
    Box,
    Grid,
    Typography,
    Link,
    Button
 } from '@mui/material';
import './home_page/general.css';

export default function Navbar() {


    return (
<div>
<Box sx={{ 
    flexGrow: 1,
    paddingTop:'1rem',
    paddingBottom:'1rem',
    }}>
<Grid
  container
  direction="row"
  justifyContent="flex-start"
  alignItems="center"
>

<Typography className="navbar" style={{paddingLeft:'1rem', paddingRight:'1.5rem'}}>
    <Link underline="none" color="black" href="/">Home</Link>
</Typography>


<Typography className="navbar" style={{paddingRight:'1.5rem'}}>
    <Link underline="none" color="black" href="/about">About</Link>
</Typography>

<Typography className="navbar">
    <Link underline="none" color="black" href="/all_countries">All countries</Link>
</Typography>
    
</Grid>
</Box>            
</div>
    )
}
