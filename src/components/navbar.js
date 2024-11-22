import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { List, Drawer, ListItem, CssBaseline } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Movie, Tv, Theaters } from '@mui/icons-material';
import { useState } from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const themes = createTheme({
  typography: {
    fontFamily: 'inherit'
  },
  palette: {
    secondary: {
      main: '#d32f2f',
      contrastText: '#fff'
    }
  }
})

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: 'flex', 
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingInline: 5,
  paddingBlock: 15,
  marginBlock: 5,
  borderRadius: 2,
  transition: '.25s',
  gap: 8,
  '&:hover': {
    backgroundColor: '#d32f2f',
    color: '#fff' 
  }
}))

const FloatingButton = styled(IconButton)(({ theme }) => ({
  '&:hover': { 
    backgroundColor: '#d32f2f', color: '#fff' 
  }, 
  position: 'fixed', 
  top: '45%', 
  left: '10px', 
  zIndex: '898', 
  color: '#d32f2f',
  border: '1px solid #d32f2f'
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Box >
        <AppBar position="absolute"
         elevation={0}
         color="transparent"
         sx={{ border: '0px solid white', py: 2}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{width: '50px', height: '50px', mr: 2}}
              onClick={ toggleDrawer }>
              <MenuIcon edge="start" sx={{fontSize: '34px', color: "white" }} />
            </IconButton>
            <Typography variant="h4" color="white" sx={{fontWeight: 'bolder'}} 
            >
              Random <span className="theme-color"> Movies </span>
            </Typography>
          </Toolbar>
        </AppBar>

        <FloatingButton position="fixed" onClick={toggleDrawer}>
          <ChevronRightIcon />
        </FloatingButton>

        <Drawer open={open} onClose={toggleDrawer} sx={{opacity: '.99'}}>
          <List sx={{width: 240, p: 1, height: '50px', }}>
            <ListItem sx={{ display: 'flex', justifyContent: 'flex-end', p: 0}}>
              <IconButton onClick={toggleDrawer} >
                <ChevronLeftIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{border: "", p: 0, mt: 0}}>
              <Typography variant="h6" sx={{fontWeight: 'bolder'}}>
                Random <span className="theme-color"> Movies </span>
              </Typography>
            </ListItem>
            <StyledListItem component="a" href="/movies" sx={{  }}>
              <Movie />
              <Typography variant="body1"> 
                Movies
              </Typography>
            </StyledListItem>
            <StyledListItem component="a" href="/movies">
              <Tv />
              <Typography variant="body1"> 
                Tv Shows
              </Typography>
            </StyledListItem>
          </List>
        </Drawer>

      </Box>
      
    </ThemeProvider>
  )
};

export default Navbar;
