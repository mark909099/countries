import React from 'react';
import { 
    Box,
    Grid,
    Typography,
    Button,
 } from '@mui/material';

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
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={4} display="flex" justifyContent="center"><Typography>abc</Typography></Grid>
<Grid item xs={4} display="flex" justifyContent="center"><Typography>abc</Typography></Grid>
<Grid item xs={4} display="flex" justifyContent="center"><Typography>abc</Typography></Grid>
</Grid>
</Box>            
</div>
    )
}
