import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import "./App.css";

import AddClub from "./components/AddClub";
import MatchList from "./components/MatchList";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <CssBaseline />
      <AddClub />
      <Box>
        <MatchList />
      </Box>
    </Container>
  );
}

export default App;
