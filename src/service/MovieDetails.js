import { Save, Delete, Edit, Fingerprint } from "@mui/icons-material"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography, Grid, Box, createTheme, ThemeProvider, TextField, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemtext } from "@mui/material";
import Stack from "@mui/material/Stack"
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/material/Menu';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Card from '../components/card/card'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import api from '../api/axios'
import { useQuery } from '@tanstack/react-query'
import LoadingSpin from '../components/ui/loadingSpin'
const theme = createTheme({
  typography: {
    h5: {
      color: '#fff',
      fontFamily: 'inherit',
      fontWeight: 'bold'
    },
    h6: {
      color: '#fff',
      fontFamily: 'inherit',
      fontWeight: 'bolder'
    },
    body1: {
      fontFamily: 'inherit',
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
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingBlock: 3
        }
      }
    }
  }
})

// validation Schema 
const schema = yup.object({
  name: yup.string().required("Name is required bruuuh"),
  email: yup.string().email("That's not email").required("Email required brr")
})

const MovieDetails = () => {
  const { id } = useParams()
  console.log(id)
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
  
  const fetchMovieData = async() => {
    const response = await api.get(`/movie/${id}`)
    console.log(response.data)
    return response.data
  }
  const { data: movie, isPending, error } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovieData,
    refetchInterval: 1000 * 60
  })

  if(isPending) {
    return (
        <LoadingSpin />
      )
  }
  // console.log(movie)
  const backgroundImageUrl = movie?.backdrop_path ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}` : null;

  return (
    <>
    <ThemeProvider theme={theme}>
      <Grid container spacing={0} bgcolor="black"
      >
        <Grid px={0} item xs={12}>
          <Box bgcolor="primary.dark" p={2} sx={{ 
              backgroundImage: `url(${backgroundImageUrl})`, 
              borderRadius: 1, 
              height: { xs: '75vh', sm: '75vh', md: '100vh' }, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center', 
              backgroundRepeat: 'no-repeat',
              position: 'relative'
            }}>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%', // Adjust the fading height
                background: 'linear-gradient(transparent, black)',
                pointerEvents: 'none', // Ensures it doesn't block interactions
              }}
            />

          </Box>
        </Grid>
        <Grid item lg={8} md={10} xs={11} sx={{ mx: 'auto', width: '100%', zIndex: '22', border: '0px solid white', mt: '-180px'}}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3, borderBottom: '1px solid white', pb: 3, mb: 5}} >
            <Typography variant='h5'> {movie?.title} </Typography> 
            <Box sx={{
              display: 'flex',
              gap: 2,
            }}>
              <Button size="small" variant="outlined" sx={{ color: 'white', border: '1px solid white', borderRadius: 1, px: 3 }}> Watch Now </Button>
              <Button size="small" variant="contained"> Watch Later </Button>
            </Box>
          </Box>
          <Grid container color="white" spacing={2}>
            <Grid item xs={12} md={4} lg={2.5} p={0} m={0} border='0px solid white' >
              <Box 
                component="img"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                sx={{
                  width: {
                    lg: '90%',
                    md: '75%',
                    xs: '50%' 
                  },
                  borderRadius: 1
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} lg={7} border='0px solid white'>
              <Box>
                <Typography mb={1} variant="h6" sx={{fontSize: '1.25rem', fontWeight: 'bold', textAlign: 'start'}}>
                  { movie?.title || movie?.name }
                </Typography>
                <Typography mb={2} variant="body1">
                  { movie?.tagline }
                </Typography>
              </Box>
              <Box sx={{
                borderBlock: '1px solid white',
                py: 2,
                fontSize: ' .9em'
              }}>
                Ytebtu Moges  | 3.3 Million Views  | 3hr 6 min | Drama/Horror | 2024
              </Box>
              <Grid container >
                <Grid item xs={6} py={3}>
                  <Typography variant="h6">
                    Details
                  </Typography>
                  <List sx={{fontSize: ".9em"}} >
                    <ListItem>
                      Director: Ma Niggga
                    </ListItem>
                    <ListItem>
                      Language: English
                    </ListItem>
                    <ListItem>
                      Release Date: March, 20/2024
                    </ListItem>
                    <ListItem>
                      Rating: 3/5
                    </ListItem>
                    <ListItem>
                       Country: USA
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6} py={3}>
                  <Typography variant="h6">
                    Details
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} lg={2.5} border='0px solid white'>
              Red
            </Grid>
          </Grid>
          
        </Grid>
        <Grid item xs={12} p={0} m={0}>
          { isPending && <LoadingSpin /> }
          
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