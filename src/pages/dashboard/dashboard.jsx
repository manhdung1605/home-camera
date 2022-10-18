import { DatePicker, Typography, Button, Tabs} from "antd";
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const {RangePicker} = DatePicker
const Dashboard = () => {
  const handleRangePicker = (value) => {
    const startDate = value[0].format('YYYY-MM-DD');
    const endDate = value[1].format('YYYY-MM-DD');
    console.log(`Start Date ${startDate}`)
    console.log(`End Date ${endDate}`)
  }
    return <div>
      <Typography style={{ margin: "40px" }}>THỐNG KÊ KPI</Typography>
      <Tabs type="card" defaultActiveKey="1">
        <Tabs.TabPane tab="Người dùng" key="1">
          <div style={{ display: "flex", margin: "40px" }}>
            <div style={{ margin: "40px", marginLeft: "200px" }}>
              <DemoLine></DemoLine>
              <div style={{ display: "flex", marginTop: "40px" }}>
                <RangePicker
                onChange={handleRangePicker} />
                <Button shape="round" style={{ marginLeft: "20px" }}>Xuất file</Button>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Thiết bị" key="2">
          <div style={{ display: "flex", margin: "40px" }}>
            <div style={{ margin: "40px", marginLeft: "200px" }}>
              <DemoLine></DemoLine>
              <div style={{ display: "flex", marginTop: "40px" }}>
                <RangePicker />
                <Button shape="round" style={{ marginLeft: "20px" }}>Xuất file</Button>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Cảnh báo" key="3">
          <div style={{ display: "flex", margin: "40px" }}>
            <div style={{ margin: "40px", marginLeft: "200px" }}>
              <DemoLine></DemoLine>
              <div style={{ display: "flex", marginTop: "40px" }}>
                <RangePicker />
                <Button shape="round" style={{ marginLeft: "20px" }}>Xuất file</Button>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Lỗi" key="4">
          <div style={{ display: "flex", margin: "40px" }}>
            <div style={{ margin: "40px", marginLeft: "200px" }}>
              <DemoLine></DemoLine>
              <div style={{ display: "flex", marginTop: "40px" }}>
                <RangePicker />
                <Button shape="round" style={{ marginLeft: "20px" }}>Xuất file</Button>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
     
    </div>
}

const DemoLine = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        // type: 'timeCat',
        tickCount: 5,
      },
    };
  
    return <Line {...config} />;
  };

export default Dashboard;