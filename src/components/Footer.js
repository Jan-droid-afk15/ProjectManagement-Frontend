import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { maxWidth } from '@mui/system';

function Copyright() {
  return (
    <Typography align ="center" variant="body2" color="white">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '50vh',
    }}
  >
    <Box sx={{   py: 3,
      px: 2,
      mt: 'auto',ml:-16, bgcolor: '#1E1D1D', p: 6, width: '100rem' }} component="footer">
    <Typography color="white" variant="h6" align="center" gutterBottom>
      Footer
    </Typography>
    <Typography
      variant="subtitle1"
      align="center"
      color="white"
      component="p"
   
    >
      Something here to give the footer a purpose!
    </Typography>
    <Copyright />
  </Box>
  </Box>
  );
}