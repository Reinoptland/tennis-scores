import gql from "graphql-tag";

export const ADD_CLUB = gql`
  mutation AddClub($city: String, $name: String, $created_at: timestamp) {
    insert_clubs_one(
      object: {
        city: $city
        name: $name
        max_competition: 1
        created_at: $created_at
      }
    ) {
      id
      city
      name
      created_at
      max_competition
    }
  }
`;
