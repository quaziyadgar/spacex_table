import { LaunchesPastQuery, LaunchQuery } from '../../gql/schema';
import { launchesPastType, launchType, modalType } from '../types/types';

const launchQuery = (data: LaunchesPastQuery): launchesPastType[] =>{
    return( data.launchesPast!.map((e:any,idx:number):launchesPastType=>{
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
  export {launchQuery};

  const modalQuery = (res: LaunchQuery): modalType|undefined  =>{
    console.log(res);
    const launch = res.launch;
    if(!launch)
    return undefined;
      return(
        {
          id : launch.id || "",
          mission_name : launch.mission_name || "",
          details : launch.details || "",
          launch_date_utc : launch.launch_date_utc,
          article_link : launch.links?.article_link || "",
          site_name : launch.launch_site?.site_name || "",
          rocket_name : launch.rocket?.rocket_name || "",
          flight : launch.rocket?.first_stage?.cores?.[0]?.flight || -1,
          status : launch.rocket?.first_stage?.cores?.[0]?.core?.status || "",
          payload_type : launch.rocket?.second_stage?.payloads?.[0]?.payload_type || "",
          orbit : launch.rocket?.second_stage?.payloads?.[0]?.orbit || "",
          rocket_type : launch.rocket?.rocket_type || "",
        }
      )
    }
  export {modalQuery};
