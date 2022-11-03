import { Tag } from "antd"
import { title } from "process"

const columns= [
    {
      key:"0",
      title:'Sno:',
      dataIndex:'sno'
    },
    {
      key:"1",
      title:'Launched (UTC)',
      dataIndex:'launch_date_utc'
    },
    {
      key:"2",
      title:'Location',
      dataIndex:'site_name'
    },
    {
      key:"3",
      title:'Mission',
      dataIndex:'mission_name',
    },
    {
      key:"4",
      title:'Orbit',
      dataIndex:'orbit',
    },
    {
      key:"5",
      title:"Launch Status",
      dataIndex:'status',
      render:(status:string)=>{
        const obj:{ [key: string]: any } = {
            unknown:{state:"Pending",color:"yellow"},
            active:{state:"Success",color:"green"},
            null:{state:"Failed",color:"pink"},
            lost:{state:"Failed",color:"pink"},
            inactive:{state:"Inactive",color:"red"}
        }
        return <Tag color={obj[status].color} style={{border:"none", borderRadius:"10px"}}>{obj[status].state}</Tag>
      }
    },
    {
      key:"6",
      title:'Rocket',
      dataIndex:'rocket_name',
    },
  ]
  export default columns;