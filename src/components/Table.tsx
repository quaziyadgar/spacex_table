import "../App.scss";
import {
  Layout,
  Table,
  Row,
  Col,
  DatePicker,
  Menu,
  Dropdown,
  MenuProps,
  Space,
} from "antd";
import { useState } from "react";
import Icon, { DownOutlined, FilterOutlined } from "@ant-design/icons";
import Logo from "../assets/Logo.svg";
import loader from "../assets/Loader.svg";
import { useLazyQuery, useQuery } from "@apollo/client";
import { launchesPastType, modalType } from "../graphql/types/types";
import { LAUNCHES_PAST } from "../graphql/schemas/schema";
import { lazyQuery, responseApi } from "../graphql/response/responseApi";
import columns from "./Column";
import ModalView from "./Modal";
import { MODAl_QUERY } from "../graphql/schemas/launchQuery";

export default function Tabled() {
  const [tableData, setTableData] = useState<launchesPastType[]>();
  const [dataSource, setDataSource] = useState<launchesPastType[]>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [model, setModel] = useState<modalType>();
  const { Header } = Layout;

  const { loading } = useQuery(LAUNCHES_PAST, {
    onCompleted: (res) => {
      const arr: launchesPastType[] = responseApi(res.launchesPast);
      setDataSource(arr);
      setTableData(arr);
    },
  });

  const [getLazyResults] = useLazyQuery(MODAl_QUERY);

  const archive = () => <img src={loader} className="spin-props" />;

  const menuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "All Launches") {
      setDataSource(tableData);
    } else if (key === "Upcoming Launches") {
      const arr = tableData?.filter((e: any) => {
        if (e.status === "inactive") return e;
      });
      setDataSource(arr);
    } else if (key === "Successful Launches") {
      const arr = tableData?.filter((e: any) => {
        if (e.status === "active") return e;
      });
      setDataSource(arr);
    } else {
      const arr = tableData?.filter((e: any) => {
        if (e.status === "lost" || e.status === null) return e;
      });
      setDataSource(arr);
    }
  };

  const menu = (
    <Menu
      onClick={menuClick}
      items={[
        {
          key: "All Launches",
          label: "All Launches",
        },
        {
          key: "Upcoming Launches",
          label: "Upcoming Launches",
        },
        {
          key: "Successful Launches",
          label: "Successful Launches",
        },
        {
          key: "Failed Launches",
          label: "Failed Launches",
        },
      ]}
    />
  );
  const modelView = (rowID: string) => {
    getLazyResults({
      variables: { id: rowID },
      onCompleted(data) {
        const arr = lazyQuery(data.launch);
        setModel(arr);
        setIsModalOpen(true);
      },
      onError(err) {
        console.error("error from getLazyResult", err);
      },
    });
  };
  return (
    <div>
      <Header className="header">
        <img src={Logo} alt="logo" />
      </Header>
      <Row className="row">
        <Col span={12} className="col">
          <DatePicker className="datePicker" />
        </Col>
        <Col span={12} className="col2">
          <Dropdown overlay={menu} placement="bottomRight" className="dropdown">
            <button className="btnMenu" onClick={(e) => e.preventDefault()}>
              <Space>
                <FilterOutlined />
                All Launches
                <DownOutlined />
              </Space>
            </button>
          </Dropdown>
        </Col>
      </Row>
      <Table
        className="spacex-table"
        loading={{ indicator: <Icon component={archive} />, spinning: loading }}
        columns={columns}
        dataSource={dataSource}
        onRow={(record) => {
          return {
            onClick: () => {
              modelView(record.id);
            },
          };
        }}
      />
      <ModalView
        model={model}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
