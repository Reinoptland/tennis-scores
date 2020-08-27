import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import ErrorIcon from "@material-ui/icons/Error";

import { GET_ALL_MATCHES, getMatches } from "../graphql/queries";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2em",
  },
}));

function MatchList() {
  const classes = useStyles();
  const [finished, setFinished] = useState(true);
  const { loading, error, data } = useQuery(getMatches(finished));

  if (loading) return "Loading...";
  if (error)
    return (
      <p>
        <ErrorIcon fontSize="large" />
        Error! ${error.message}
      </p>
    );

  console.log(data);
  return (
    <Container className={classes.root}>
      <Typography variant="h2">All Matches</Typography>
      <select
        onChange={(event) =>
          setFinished(event.target.value === "true" ? true : false)
        }
      >
        <option value={true}>Finished matches</option>
        <option value={false}>Live matches</option>
      </select>
      <Box>
        {data.matches.map((match) => (
          <article key={match.id}>
            <p>Match ID: {match.id}</p>
            <p>Match date: {match.started_at}</p>
            <p>{match.finished ? "Done" : "Match Live"}</p>
            <hr />
            <div>
              Player 1: {match.p1.name} |{" "}
              {match.setts.map((set) => (
                <span
                  style={{ color: set.winner_ref === "p1" ? "red" : "black" }}
                >
                  {set.p1_score} |{" "}
                </span>
              ))}
            </div>
            <div>
              Player 2: {match.p2.name} |{" "}
              {match.setts.map((set) => (
                <span
                  style={{ color: set.winner_ref === "p2" ? "red" : "black" }}
                >
                  {set.p2_score} |{" "}
                </span>
              ))}
            </div>
          </article>
        ))}
      </Box>
    </Container>
  );
}

export default MatchList;
