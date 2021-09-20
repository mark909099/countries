import React from 'react';
import { Typography, Box } from '@mui/material';
import { Flip, Fade } from 'react-reveal';

export default function Header() {
    return (
<div className="header">
<Fade duration={2500}>
<Typography variant="h2">
    <Box sx={{
        textAlign:'center'
    }}>Country facts</Box>
</Typography>
</Fade>
<Flip delay={2000} left cascade>
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
