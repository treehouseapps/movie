import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
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
            <Typography variant='h4' align='center' sx={{ margin: '1rem', borderRadius: '1rem', backgroundColor: 'whitesmoke' }}>
                <p className="section-title"><Typography variant='h3'>Watch Movies, TV shows and more</Typography></p>
            </Typography>
            <Grid container justifyContent="space-between">
                <Grid item>
                    <Typography variant="h4" sx={{ marginLeft: '5rem' }}>
                        <DoubleArrowIcon />    Movies
                    </Typography>
                </Grid>
                <Grid item> <Paper
                    component="form"
                    sx={{
                        p: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '1px 1px 5px 1px gray',
                        width: 400
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Movies"
                        inputProps={{ 'aria-label': 'Search Movies' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper></Grid>

            </Grid>
        </Box>
    );
};

export default Title;
