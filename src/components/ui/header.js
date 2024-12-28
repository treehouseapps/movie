import React from 'react';
import { Button, Typography, Box, Grid, Paper, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Title = ({ head, pageType, onClick, selectedButton }) => {
    // Button configuration for reusability
    const buttonConfigs = pageType === "movies"
        ? [
            { key: "/movie/popular", label: "Popular" },
            { key: "/movie/top_rated", label: "Top-Rated" },
            { key: "/movie/upcoming", label: "Upcoming" }
        ]
        : [
            { key: "/trending/tv/week", label: "Trending" },
            { key: "/tv/top_rated", label: "Top-Rated" },
            { key: "/tv/popular", label: "Latest" }
        ];

    return (
        <Box sx={{ margin: "0rem 5rem", marginTop: "1rem" }}>
            <div className="header">
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
                                    '& fieldset': { border: 'none' },
                                    '&.Mui-focused fieldset': { border: 'none' },
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
                        backgroundColor: "white",
                        margin: "0.5rem 1rem",
                        padding: "10px",
                        borderRadius: "30px",
                    }}
                >
                    <Typography variant="h5" align="center"
                        sx={{
                            marginBottom: "1rem",
                            fontFamily: '"Noto Serif", serif',
                            fontWeight: 700,
                        }}
                    >
                        Watch Movies, TV shows, and more
                    </Typography><hr />
                    <Grid container justifyContent="space-between">
                        <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                            <Box variant="h5" sx={{ marginRight: '2rem' }} style={{ display: 'flex', alignItems: 'center' }}>
                                <DoubleArrowIcon />
                                <Typography variant='h6' sx={{
                                    fontFamily: '"Noto Serif", serif',
                                    fontWeight: 700,
                                    marginLeft: '1rem'
                                }}>{head}</Typography>
                            </Box>
                            {buttonConfigs.map(({ key, label }) => (
                                <Button
                                    key={key}
                                    variant={selectedButton === key ? "contained" : "outlined"}
                                    size="small"
                                    sx={{
                                        marginLeft: "0.5rem",
                                        fontSize: '0.75rem'
                                    }}
                                    onClick={() => onClick(key)}
                                >
                                    {label}
                                </Button>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </div >
        </Box >
    );
};

export default Title;
