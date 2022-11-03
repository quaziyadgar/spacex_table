import { launchesPastType, launchType, modalType } from "../types/types";

const responseApi = (data:[]): launchesPastType[] =>{
    return( data.map((e:any,idx:number):any=>{
      return(
        {
          sno : idx +1,
          id  : e.id,
          mission_name : e.mission_name,
          site_name : e.launch_site.site_name,
          rocket_name : e.rocket.rocket_name,
          status : e.rocket.first_stage.cores[0].core.status,
          orbit : e.rocket.second_stage.payloads[0].orbit,
          launch_date_utc : e.launch_date_utc,
        }
      )
    })
    )
  }
  export {responseApi};

  const lazyQuery = (e: launchType): modalType =>{
      return(
        {
          id : e.id,
          mission_name : e.mission_name,
          details : e.details,
          launch_date_utc : e.launch_date_utc,
          article_link : e.links.article_link,
          site_name : e.launch_site.site_name,
          rocket_name : e.rocket.rocket_name,
          flight : e.rocket.first_stage.cores[0].flight,
          status : e.rocket.first_stage.cores[0].core.status,
          payload_type : e.rocket.second_stage.payloads[0].payload_type,
          orbit : e.rocket.second_stage.payloads[0].orbit,
          rocket_type : e.rocket.rocket_type,
        }
      )
    }
  export {lazyQuery};
