import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { List, Drawer, ListItem, CssBaseline } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Movie, Tv, Theaters } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import axios from "axios";

const themes = createTheme({
  typography: {
    fontFamily: "inherit",
  },
  palette: {
    secondary: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
  },
});

const StyledListItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingInline: 5,
  paddingBlock: 15,
  marginBlock: 5,
  borderRadius: 2,
  transition: ".25s",
  gap: 8,
  "&:hover": {
    backgroundColor: "#d32f2f",
    color: "#fff",
  },
}));

const FloatingButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#d32f2f",
    color: "#fff",
  },
  position: "fixed",
  top: "45%",
  left: "10px",
  zIndex: "898",
  color: "#d32f2f",
  backgroundColor: "#fff",
  border: "1px solid #fff",
}));
const api = axios.create({
  baseURL: "https://imdb.iamidiotareyoutoo.com/search?q=",
});

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const [records, setRecords] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get(inputValue);
        if (inputValue === "") {
          setRecords([]);
        } else {
          setRecords(res.data.description.slice(0, 3));
          setErrorMessage("");
        }
      } catch (error) {
        setErrorMessage("Nothing found");
        setRecords([]);
      }
    };

    if (inputValue) {
      fetchData();
    } else {
      setRecords([]);
    }
  }, [inputValue]);

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Box>
        <AppBar
          position="absolute"
          elevation={0}
          color="transparent"
          sx={{
            border: "0px solid white",
            py: 2,
            width: "fit-content",
            left: 0,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ width: "50px", height: "50px", mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon
                edge="start"
                sx={{ fontSize: "34px", color: "white" }}
              />
            </IconButton>

            <Typography
              variant="h4"
              color="white"
              sx={{ fontWeight: "bolder" }}
            >
              Random <span className="theme-color"> Movies </span>
            </Typography>
          </Toolbar>
        </AppBar>

        <FloatingButton position="fixed" onClick={toggleDrawer}>
          <ChevronRightIcon />
        </FloatingButton>

        <Drawer open={open} onClose={toggleDrawer} sx={{ opacity: ".99" }}>
          <List sx={{ width: 240, p: 1, height: "50px" }}>
            <ListItem
              sx={{ display: "flex", justifyContent: "flex-end", p: 0 }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </ListItem>
            <ListItem sx={{ border: "", p: 0, mt: 0 }}>
              <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <div className="search-output">
                  {records.length > 0 &&
                    records.map((list, index) => (
                      <ol
                     style={{listStyleType: "none"}}
                        key={index}
                      >
                        <li className="search-title"><a href={`/movie/${list["#IMDB_ID"]}`}>{list["#TITLE"]}</a></li>
                        <li className="search-dis"><a href={`/movie/${list["#IMDB_ID"]}`}>{list["#YEAR"]}</a></li>
                      </ol>
                    ))}
                </div>
              </Typography>
            </ListItem>
            <StyledListItem component="a" href="/movies" sx={{}}>
              <Movie />
              <Typography variant="body1">Movies</Typography>
            </StyledListItem>
            <StyledListItem component="a" href="/movies">
              <Tv />
              <Typography variant="body1">Tv Shows</Typography>
            </StyledListItem>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;
