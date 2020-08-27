import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_CLUB } from "../graphql/mutations";

export default function AddClub() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [addClub, { data }] = useMutation(ADD_CLUB);

  function handleSubmit(event) {
    event.preventDefault();

    addClub({ variables: { city, name, created_at: new Date() } });
    console.log(name, city);
  }

  console.log("WHAT IS DATA:", data);

  if (data) {
    return <h1>Club created</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name of club</label>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        required
      />
      <label>City</label>
      <input
        type="text"
        onChange={(event) => setCity(event.target.value)}
        required
      />
      <input type="submit" />
    </form>
  );
}

// X Step 1: Make mutation & test using the explorer
// X Step 2: Make the form & UI to add a club
// X Step 3: Extract user input from the form
// Step 4: Use our mutation to communicate with GraphQL on submitting the form
// Step 5: Display a message everything went well
