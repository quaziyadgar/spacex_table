import { Modal, Typography } from "antd";
import { modalType } from "../graphql/types/types";
type ModalViewProps = {
    model : modalType | undefined
    isModalOpen : boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ModalView = ({model,isModalOpen,setIsModalOpen}:ModalViewProps) =>{

    const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return <>
        <Modal title={model?.mission_name} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} className="model">
          {model?
          <div>
          <Typography>{model.rocket_name}</Typography>
          <Typography style={{marginBottom:"50px"}}>{model.details}<a href = {model.article_link}target="blank">Wikipedia</a></Typography>
          <Typography>Flight Number : {model.flight}</Typography>
          <Typography>Mission Name : {model.mission_name}</Typography>
          <Typography>Rocket Type : {model.rocket_type}</Typography>
          <Typography>Rocket Name : {model.rocket_name}</Typography>
          <Typography>Nationality : {"SpaceX"}</Typography>
          <Typography>Manufacturer : {"SpaceX"}</Typography>
          <Typography>Launch Date : {model.launch_date_utc}</Typography>
          <Typography>Payload Type : {model.payload_type}</Typography>
          <Typography>Orbit : {model.orbit}</Typography>
          <Typography>Launch Site : {model.site_name}</Typography>
          </div>: "No data Found"}
      </Modal>
    </>
}
export default ModalView;