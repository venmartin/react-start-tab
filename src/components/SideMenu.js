import React from 'react';
import { Container } from '@mui/material';

import './SideMenu.css'
import { Box } from '@mui/system';

const SideMenu = () => {
  return (
    <div className='side-menu'> 
      <Container sx={{
        bgcolor: 'background.paper',
        height: '100%',
        margin: '0px',
        color: 'primary',

      }}>
        <Box sx={{
          color: 'text.primary',
          fontWeight: 'medium',
          fontSize: '1rem',
          padding: '10px',
          paddingTop: '25px'
        }}>
        <div className='menu-item'>item</div>
        <div className='menu-item'>item</div>
        <div className='menu-item'>item</div>
        <div className='menu-item'>item</div>
        <div className='menu-item'>item</div>
        
        </Box>

      </Container>
    </div>
  )
};

export default SideMenu;
