import { DatePicker, Typography, Button} from "antd";
import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';

const {RangePicker} = DatePicker
const Dashboard = () =>{
    return <div>
        <Typography style={{margin: "40px"}}>THỐNG KÊ KPI</Typography>
        <div style={{ display: "flex",margin: "40px"}}>
            <div style={{margin: "40px"}}>
                <DemoLine></DemoLine>
                <div style={{ display: "flex",marginTop: "40px"}}>
                    <RangePicker showTime/>
                    <Button shape="round" style={{marginLeft: "20px"}}>Update</Button>
                    <Button shape="round" style={{marginLeft: "20px"}}>Excel</Button>
                </div>
            </div>
            <div style={{margin: "40px", marginLeft:"200px"}}>
                <DemoLine></DemoLine>
                <div style={{ display: "flex",marginTop: "40px"}}>
                    <RangePicker showTime/>
                    <Button shape="round" style={{marginLeft: "20px"}}>Update</Button>
                    <Button shape="round" style={{marginLeft: "20px"}}>Excel</Button>
                </div>
            </div>
        </div>
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