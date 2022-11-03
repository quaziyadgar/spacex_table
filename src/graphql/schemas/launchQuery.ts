import { gql } from "@apollo/client";

const MODAl_QUERY = gql`
query launch($id: ID!){
  launch(id: $id) {
    mission_name
    rocket {
      rocket_name
      rocket_type
      first_stage {
        cores {
          core {
            status
          }
          flight
        }
      }
      second_stage {
        payloads {
          payload_type
          orbit
        }
      }
    }
    launch_date_utc
    launch_site {
      site_name
    }
    links {
      article_link
    }
    details
    id
  }
}
`;
export {MODAl_QUERY};