import { Save, Delete, Edit, Fingerprint } from "@mui/icons-material"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography, Grid, Box, createTheme, ThemeProvider, TextField, AppBar, Toolbar, IconButton, Drawer, List, ListItem } from "@mui/material";
import Stack from "@mui/material/Stack"
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/material/Menu';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { useState } from 'react'

const theme = createTheme({
  typography: {
    h1: {
      color: '#fff'
    },
    body1: {
      color: ''
    }
  },
  palette: {
    primary: {
      main: '#124116', // Blue color for primary
    },
    secondary: {
      main: '#f2f', // Pink color for secondary
    },
  }
})

// validation Schema 
const schema = yup.object({
  name: yup.string().required("Name is required bruuuh"),
  email: yup.string().email("That's not email").required("Email required brr")
})

const MovieDetails = () => {
  const [open, setOpen] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitt = (data) => {
    console.log("data")
  } 
  
  const toggleDrawer = () => {
    setOpen(!open)
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} >
        <Grid item xs={8}>
          <Box bgcolor="primary.dark" p={2} sx={{ bgcolor: 'black', borderRadius: 1, height: '480px'}}>
            <Typography textAlign='center' variant='h1'> Movie </Typography> 
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box border="1px solid" borderRadius={1} p={2} mb={2}>
            <form onSubmit={handleSubmit(onSubmitt)}>
              <TextField label="Name" variant="outlined" fullWidth margin='normal' />
              <TextField label="Email" variant="outlined" fullWidth { ...register('email') } error={!!errors.email} helperText={errors.email?.message} margin='normal' />
              <Button variant="contained" bgcolor="" type="submit"> Login </Button>
            </form>
          </Box>
          <Box mb={2}>
            <Fab color="primary" aria-label="add" variant="extended">
               <AddIcon sx={{mr: 1}} />
               Add User 
             </Fab>
          </Box>
        </Grid>
        
      </Grid>
    </ThemeProvider>
    </>
  );
};

export default MovieDetails;