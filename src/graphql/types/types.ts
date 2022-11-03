import { type } from "os"

interface launchesPastType {
    sno: number
    id: string
    mission_name: string
    site_name: string
    rocket_name: string
    status: string | null
    orbit: string
    launch_date_utc: string
  }
  
export type{launchesPastType};


interface modalType{
  id: string
  mission_name: string
  site_name: string
  article_link: string
  rocket_name: string
  flight: number
  status: string
  payload_type: string
  orbit: string
  rocket_type: string
  launch_date_utc: string
  details: string
}
export type{modalType};

interface launchType{
    mission_name: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
      first_stage: {
        cores :[
          {core :{
            status: string;
          },
          flight:number;
          }]
      };
      second_stage: {
        payloads: [
          {
          payload_type: string;
          orbit: string;
        }
        ];
      };
    };
    launch_date_utc: string;
    launch_site: {
      site_name: string;
    };
    links: {
      article_link: string;
    };
    details:string
    id:string
  };
export type {launchType};