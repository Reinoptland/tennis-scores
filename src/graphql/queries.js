import gql from "graphql-tag";

export const GET_ALL_MATCHES = gql`
  query AllMatches {
    matches(order_by: { started_at: desc }) {
      id
      started_at
      p1 {
        id
        name
      }
      p2 {
        id
        name
      }
      setts {
        id
        p1_score
        p2_score
        nr
        winner_id
        winner_ref
      }
    }
  }
`;

export const getMatches = (finished) => {
  return gql`
    query FinishedMatches {
      matches(
        order_by: { started_at: desc }
        where: { finished: { _eq: ${finished} } }
      ) {
        id
        finished
        started_at
        p1 {
          id
          name
        }
        p2 {
          id
          name
        }
        setts {
          id
          p1_score
          p2_score
          nr
          winner_id
          winner_ref
        }
      }
    }
  `;
};

// export const GET_ALL_LIVE_MATCHES = gql`
//   query FinishedMatches {
//     matches(
//       order_by: { started_at: desc }
//       where: { finished: { _eq: false } }
//     ) {
//       id
//       finished
//       started_at
//       p1 {
//         id
//         name
//       }
//       p2 {
//         id
//         name
//       }
//       setts {
//         id
//         p1_score
//         p2_score
//         nr
//         winner_id
//         winner_ref
//       }
//     }
//   }
// `;
