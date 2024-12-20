import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Title = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'white',
                margin: '0.5rem 1rem',
                marginTop: '2rem',
                padding: '10px',
                borderRadius: '30px'
            }}
        >
            <Typography variant='h4' align='center' sx={{ margin: '.5rem', borderRadius: '1rem' }}>
                <p className="section-title"><Typography variant='h5'>Watch Movies, TV shows and more</Typography></p>
            </Typography>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h4" sx={{ marginLeft: '5rem' }}>
                        <DoubleArrowIcon />    Movies
                    </Typography>
                </Grid>
                <Grid item>
                    <Paper
                        component="form"
                        sx={{
                            p: '2px 4px',
                            display: 'flex',
                            alignItems: 'center',
                            width: 400,
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            border: 'none',
                            marginRight: "2rem"
                        }}
                    >
                        <TextField
                            variant="outlined"
                            placeholder="Search ..."
                            fullWidth
                            sx={{
                                ml: 'auto',
                                width: '50px',
                                transition: 'width 0.3s ease-in-out',
                                '& .MuiOutlinedInput-root': {
                                    paddingRight: '40px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                    '&.Mui-focused fieldset': {
                                        border: 'none',
                                    },
                                },
                                '&:focus-within': {
                                    width: '200px',
                                    border: '1px solid black',
                                    borderRadius: '1rem',
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <IconButton
                                        type="button"
                                        sx={{ p: '10px', color: 'black', position: 'absolute', right: '10px' }} // Positioning icon
                                        aria-label="search"
                                        onClick={() => console.log('Search clicked!')}
                                    >
                                        <SearchIcon sx={{ color: 'black', fontSize: '30px' }} />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Paper>



                </Grid>

            </Grid >
        </Box >
    );
};

export default Title;
