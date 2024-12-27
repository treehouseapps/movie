import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Title = (props) => {
    return (
        <div className='header'>
            <div className="header-search">
                <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        width: 400,
                        boxShadow: 'none',
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Search ..."
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
                                    sx={{
                                        p: '10px',
                                        color: 'black',
                                        position: 'absolute',
                                        right: '10px',
                                    }}
                                    aria-label="search"
                                    onClick={() => console.log('Search clicked!')}
                                >
                                    <SearchIcon sx={{ color: 'black', fontSize: '30px' }} />
                                </IconButton>
                            ),
                        }}
                    />
                </Paper>
            </div>
            <Box
                sx={{
                    backgroundColor: 'white',
                    margin: '0.5rem 1rem',
                    marginTop: '0rem',
                    padding: '10px',
                    paddingTop: '0px',
                    borderRadius: '30px'
                }}
            >
                <Typography variant='h4' align='center' sx={{ margin: '.5rem', marginTop: '0px', borderRadius: '1rem' }}>
                    <Typography
                        variant="h5"
                        className="section-title"
                        sx={{ paddingTop: '0px' }}
                    >
                        Watch Movies, TV shows, and more
                    </Typography>

                </Typography>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h4" sx={{}}>
                            <DoubleArrowIcon />    {props.head}
                        </Typography>
                    </Grid>
                    <Grid item>

                    </Grid>

                </Grid >
            </Box >
        </div>
    );
};

export default Title;
