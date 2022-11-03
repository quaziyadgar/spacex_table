import { gql } from "@apollo/client";

const LAUNCHES_PAST = gql`
query launchesPast{
  launchesPast(limit:100){
      mission_name
      launch_site {
        site_name
      }
      rocket {
        rocket_name
        first_stage {
          cores {
            core {
              status
            }
          }
        }
        second_stage {
          payloads {
            orbit
          }
        }
      }
      launch_date_utc
      id
    }
}`;
export {LAUNCHES_PAST};