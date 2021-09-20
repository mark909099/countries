import React from 'react';
import './home_styles.css';
import { Typography, Box } from '@mui/material';
import { Flip } from 'react-reveal';

export default function Header() {
    return (
<div className="header">
<Typography variant="h2">
    <Box sx={{
        textAlign:'center'
    }}>Country facts</Box>
</Typography>
<Flip delay={5000} left cascade>
<Typography className="sub_header" variant="h6" letterSpacing={3}>
<Box sx={{
        textAlign:'center',
        paddingTop:'1rem'
    }}>Simple, fast, easy</Box>
</Typography>
</Flip>
</div>
    )
}
