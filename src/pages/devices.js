import { Typography, Input, Button, Table } from "antd";
import { SearchOutlined,FileExcelFilled  } from '@ant-design/icons';
import './devices.css'
import { useState } from "react";
const Devices = () =>{
    const {Search} = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('');

    // Handle show row per one page
    const handleChange = event => {
        setRowPerPage(event.target.value);
    }

    const data = [
        {   
            stt: 1,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '1'
        },
        {   
            stt: 2,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Dung',
            key: '2'
        },
        {   
            stt: 3,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Phong',
            key: '3'
        },
        {   
            stt: 4,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '4'
        },
        {   
            stt: 5,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '5'
        },
        {   
            stt: 6,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '6'
        },
      
        {   
            stt: 7,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '7'
        },
        {   
            stt: 8,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '8'
        },
        {   
            stt: 9,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '9'
        },
      
        {   
            stt: 10,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '10'
        },
        {   
            stt: 11,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '11'
        },
        {   
            stt: 12,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '12'
        },
      
        {   
            stt: 13,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '13'
        },
        {   
            stt: 14,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '14'
        },
        {   
            stt: 15,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '15'
        },
      
        {   
            stt: 16,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '16'
        },
        {   
            stt: 17,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '17'
        },
        {   
            stt: 18,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '18'
        },
      
        {   
            stt: 19,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '19'
        },
        {   
            stt: 20,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '20'
        },
        {   
            stt: 21,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '21'
        },
      
        {   
            stt: 22,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '22'
        },
        {   
            stt: 23,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '23'
        },
        {   
            stt: 24,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac:'24:0B:2A:72:20:F5',
            connectType: 'Wifi, 90%',
            date: '25/8/2022 15:00:00',
            service: '247, 7 ngày',
            custommer: 'Son',
            key: '24'
        },
      
    ]

    const columns = [
        {
            title: '#',
            dataIndex:'stt',
            key:'stt'
        },
        {
            title: 'Mẫ thiết bị',
            dataIndex:'deviceId',
            key:'deviceId',
            filteredValue: [searchedDevice],
            onFilter:(value, record) => {
                return String(record.deviceId).toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'Loại thiết bị',
            dataIndex:'deviceType',
            key:'deviceType'
        },
        {
            title: 'Địa chỉ MAC',
            dataIndex:'mac',
            key:'mac'
        },   {
            title: 'Loại kết nối',
            dataIndex:'connectType',
            key:'connectType'
        },
        {
            title: 'Ngày kích hoạt',
            dataIndex:'date',
            key:'date'
        },
        {
            title: 'Gói cước',
            dataIndex:'service',
            key:'service'
        },
        {
            title: 'Khách hàng',
            dataIndex:'custommer',
            key:'custommer',
            // sorter:(record1, record2) => {
            //     return record1.custommer > record2.custommer
            // }
        }
    ]

    return <div>
        <Typography style={{margin: "40px"}}>DANH SÁCH THIẾT BỊ</Typography>
        <div className="search" >
            <div style={{display:"flex", justifyContent:'center', alignItems:'center'}}>
                <Typography style={{fontWeight:"bold"}}>Số lượng hiển thị</Typography>
                <Input className="input" placeholder="10" style={{width: "50px"}} onChange={handleChange} value={rowPerPage} />     
            </div> 
            <Search 
            className="input" 
            placeholder="Nhập mã thiết bị" 
            enterButton="Tìm kiếm" 
            style={{width: "400px"}} 
            onSearch = {value => {
                setSearchedDevice(value)
            }}
            onChange = {e => {
                setSearchedDevice(e.target.value)
            }}
            />
        </div>
        <Table
        dataSource={data}
        columns={columns}
        bordered
        pagination={{
            pageSize: rowPerPage,
        }}
        >

        </Table>
    </div>
}

export default Devices;