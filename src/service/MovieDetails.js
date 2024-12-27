import { Save, Delete, Edit, Fingerprint } from "@mui/icons-material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Button,
  Typography,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemtext,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuIcon from "@mui/material/Menu";
import PlayArrow from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Card from "../components/card/card";
import { useState } from "react";

import { useParams } from "react-router-dom";
import api from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpin from "../components/ui/loadingSpin";
import Footer from "../components/footer";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    h5: {
      color: "#fff",
      fontWeight: "bold",
    },
    h6: {
      color: "#fff",
      fontWeight: "bolder",
    },
    body1: {
      color: "#fff",
    },
  },
  palette: {
    primary: {
      main: "#124116", // Blue color for primary
    },
    secondary: {
      main: "#f2f", // Pink color for secondary
    },
  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingBlock: 3,
        },
      },
    },
  },
});

// validation Schema
const schema = yup.object({
  name: yup.string().required("Name is required bruuuh"),
  email: yup.string().email("That's not email").required("Email required brr"),
});

const MovieDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitt = (data) => {
    console.log("data");
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const fetchMovieData = async () => {
    const response = await api.get(`/movie/${id}`);
    const similarMovies = await api.get(`/movie/${id}/recommendations`, {
      params: { page: 1 },
    });
    console.log(response);

    const cacheData = localStorage.getItem(id);
    if (response && similarMovies.data.results) {
      const data = response.data;
      data.similar = similarMovies.data.results.slice(0, 5);
      localStorage.setItem(id, data);
      console.log("using fresh data...");
      return data;
    }

    console.log("using cache data...");
    const parsedCacheData = JSON.parse(cacheData);
    return parsedCacheData;
  };

  const fetchTrailerLink = async () => {
    const response = await api.get(`/movie/${id}/videos`);
    return response.data.results[0]; //get the first trailer only
  };

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie"],
    queryFn: fetchMovieData,
    // refetchInterval: 1000 * 60
  });

  const { data: videos } = useQuery({
    queryKey: ["videos"],
    queryFn: fetchTrailerLink,
  });

  const backgroundImageUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`
    : null;

  const [hideBackground, setHideBackground] = useState({
    iframe1: { visibility: "hidden" },
    grid1: { marginTop: "-25vh" },
    iconButton1: { inset: "0", position: "absolute" },
  });
  const handlePlay = () => {
    setHideBackground({
      iframe1: { visibility: "visible", position: "Fixed", inset: "0" },
      grid1: { marginTop: "4vh", transition: "margin-top 1s" },
      iconButton1: { visibility: "hidden" },
    });
  };

  if (isLoading) {
    return (
      <div
        style={{ height: "100svh", display: "grid", placeContent: "center" }}
      >
        <LoadingSpin />
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{ height: "100svh", display: "grid", placeContent: "center" }}
      >
        <h1 style={{ color: "#d32f2f" }}> Network Error </h1>
      </div>
    );
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          container
          spacing={0}
          bgcolor="black"
        //body container, it holds background image and details page as a grid
        >
          <Grid px={0} item xs={12}>
            <Box
              bgcolor="primary.dark"
              p={2}
              sx={{
                backgroundImage: `url(${backgroundImageUrl})`,
                borderRadius: 1,
                height: { xs: "75vh", sm: "75vh", md: "100vh" },
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "75%", // Adjust the fading height
                  background: "linear-gradient(transparent, black)",
                  pointerEvents: "none", // Ensures it doesn't block interactions
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                }}
              >
                <IconButton
                  onClick={() => handlePlay()}
                  style={hideBackground.iconButton1}
                >
                  <PlayArrow
                    sx={{
                      color: "#d32f2f",
                      bgcolor: "white",
                      opacity: 0.75,
                      border: "0px solid white",
                      borderRadius: "50%",
                      height: "75px",
                      width: "75px",
                      p: 1,
                    }}
                  />
                </IconButton>
                <iframe
                  style={hideBackground.iframe1}
                  src={"https://vidsrc.to/embed/movie/" + movie.id}
                  allowFullScreen
                  height="100%"
                  width="100%"
                ></iframe>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            lg={9}
            md={10}
            xs={11}
            px={0}
            style={hideBackground.grid1}
            sx={{
              overflow: "clip",
              mx: "auto",
              width: "100%",
              zIndex: "22",
              border: "0px solid white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 3,
                pb: 5,
              }}
            >
              <Typography
                // movie name with released date, the released date comes with 2024-01-01 format, then split 2024
                variant="h5"
              >
                {movie.title} ({movie.release_date?.split("-")[0]})
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button
                  size="small"
                  sx={{
                    color: "white",
                    bgcolor: "rgba(173, 173, 173, 0.69)",
                    borderRadius: 1,
                    px: 2,
                  }}
                >
                  Imdb {movie?.vote_average}
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ border: "1px solid white", color: "#fff" }}
                >
                  {" "}
                  Watch Later{" "}
                </Button>
              </Box>
            </Box>
            <Grid
              container
              color="white"
              columnSpacing={5}
              sx={{ borderBlock: "1px solid white", py: 5 }}
            >
              <Grid
                item
                xs={12}
                md={4}
                lg={2.5}
                p={0}
                m={0}
                border="0px solid white"
                // movie details alignment for mobile and desktops, xs for mobiles and md is above that
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "start" },
                  alignItems: { xs: "center", md: "start" },
                  flexDirection: { xs: "row", md: "column" },
                  gap: { xs: 2, sm: 5, md: 0 },
                  flexWrap: "wrap",
                }}
              >
                <Box
                  component="img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  sx={{
                    maxWidth: { xs: "8rem", md: "100%" },
                    borderRadius: 1,
                  }}
                />
                <Stack
                  direction="column"
                  spacing={1}
                  sx={{
                    py: 2,
                    px: { xs: 2, sm: 5, md: 0 },
                    width: { xs: "fit-content", md: "100%" },
                  }}
                >
                  <Button
                    startIcon={<WatchLaterIcon />}
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "inherit",
                      bgcolor: "rgba(125, 125, 125, 0.5)",
                    }}
                    size="small"
                    variant="contained"
                  >
                    {" "}
                    Watch Later{" "}
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "inherit",
                      bgcolor: "rgba(25, 25, 25, 1)",
                    }}
                  >
                    Add to Whitelist
                  </Button>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      fontFamily: "inherit",
                      bgcolor: "rgba(25, 25, 25, 1)",
                    }}
                    size="small"
                    startIcon={<ShareIcon />}
                    variant="contained"
                  >
                    {" "}
                    Share{" "}
                  </Button>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                md={8}
                lg={6.5}
                py={{ xs: 5, md: 0 }}
                border="0px solid white"
              >
                <Box>
                  <Typography
                    mb={1}
                    variant="h6"
                    sx={{
                      fontSize: "1.25rem",
                      fontWeight: "bold",
                      textAlign: "start",
                    }}
                  >
                    {movie?.title || movie?.name}
                  </Typography>
                  <Typography mb={2} variant="body1">
                    {movie?.tagline}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    borderBlock: "1px solid white",
                    py: 2,
                    fontSize: " .9em",
                  }}
                >
                  {movie.runtime} min | {movie.genres.map((genres) => <span>{genres.name} </span>)} | {movie.release_date.slice(0, 4)}
                </Box>
                <Grid container py={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6">Details</Typography>
                    <List sx={{ fontSize: ".9em" }}>
                      <ListItem>Status:{movie.status}</ListItem>
                      <ListItem>Language: {movie.original_language}</ListItem>
                      <ListItem>Release Date: {movie.release_date}</ListItem>
                      <ListItem>Rating: {movie.vote_average}</ListItem>
                      <ListItem>Country: {movie.origin_country}</ListItem>
                    </List>
                  </Grid>
                </Grid>
                <Grid item sx={{ borderTop: "1px solid white" }} my={2}>
                  <Typography variant="h6" py={2}>
                    Storyline
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: ".9em" }}>
                    {movie?.overview}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={12} lg={3} border="0px solid white">
                <Box mb={2}>
                  <Typography variant="h6">Trailers</Typography>
                </Box>
                <Box
                  sx={{
                    maxWidth: {
                      lg: "100%",
                      md: "480px",
                      sm: "480px",
                      xs: "480px",
                    },
                    height: {
                      lg: "fit-content",
                      md: "270px",
                      sm: "270px",
                      xs: "270px",
                    },
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  <iframe
                    allowFullScreen
                    src={`https://www.youtube.com/embed/${videos?.key}`}
                    frameBorder="0"
                    style={{
                      // position: 'absolute',
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      // borderInline: '3px solid red',
                      borderRadius: "16px",
                      backgroundColor: "#d32f2f",
                    }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item>
              <Box sx={{ py: 2, borderBottom: "1px solid white" }}>
                <Typography variant="h6">Recommendatons</Typography>
              </Box>
              <Grid
                container
                columnSpacing={2}
                sx={{ py: 4, gap: "16px 0", justifyContent: "space-between" }}
              >
                {movie?.similar.map((movie) => (
                  <Grid item lg={2.2} md={4} xs={6} key={movie.id}>
                    <Box
                      component="img"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      sx={{
                        width: "100%",
                        borderRadius: 1,
                        // height: '270px',
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: "bold", my: 1 }}
                    >
                      {movie?.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                      {movie.media_type}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "inherit",
                    width: "fit-content",
                    bgcolor: "rgb(25, 25, 25)",
                    marginBottom: '1rem'
                  }}
                >
                  Show More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} p={0} m={0}>
            {isLoading && <LoadingSpin />}
          </Grid>

          {/*never mind everything below this*/}
          <Grid item xs={4} sx={{ display: "none" }}>
            <Box border="1px solid" borderRadius={1} p={2} mb={2}>
              <form onSubmit={handleSubmit(onSubmitt)}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  margin="normal"
                />
                <Button variant="contained" bgcolor="" type="submit">
                  {" "}
                  Login{" "}
                </Button>
              </form>
            </Box>
            <Box mb={2}>
              <Fab color="primary" aria-label="add" variant="extended">
                <AddIcon sx={{ mr: 1 }} />
                Add User
              </Fab>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Footer />

    </>
  );
};

export default MovieDetails;
