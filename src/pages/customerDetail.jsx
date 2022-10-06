import { Typography, Input, Table } from "antd";
import './customerDetail.css'
const CustomerDetail = () =>{
    const data = [
        {   
            stt: 1,
            deviceId: 'CNME000000024',
            status: <Online/>,
            startDate:'25/8/2022 15:00:00',
            endDate: '',
            count: '0',
            key: '1'
        },     
        {   
            stt: 2,
            deviceId: 'CNME000000024',
            status: <Offline/>,
            startDate:'25/8/2022 15:00:00',
            endDate: '25/8/2022 15:00:00',
            count: '3',
            key: '2'
        },     
        {   
            stt: 3,
            deviceId: 'TWFX0000111',
            status: <Error/>,
            startDate:'25/8/2022 15:00:00',
            endDate: '25/8/2022 15:00:00',
            count: '1',
            key: '3'
        },     
    ]

    const columns = [
        {
            title: '#',
            dataIndex:'stt',
            key:'stt'
        },
        {
            title: 'Mã thiết bị',
            dataIndex:'deviceId',
            key:'deviceId'
        },
        {
            title: 'Trạng thái',
            dataIndex:'status',
            key:'status'
        },
        {
            title: 'Ngày kích hoạt',
            dataIndex:'startDate',
            key:'startDate'
        },   {
            title: 'Ngày mất kết nối',
            dataIndex:'endDate',
            key:'endDate'
        },
        {
            title: 'Số lần mất kế nối',
            dataIndex:'count',
            key:'count'
        },
    ]

    return <div>
        <div className="search" style={{display:"flex"}}>
            <Input className="input" placeholder="Sơn" style={{width: "100px"}} disabled={true} value={'name'}/>  
            <Input className="input" placeholder="0948303200" style={{width: "100px"}} disabled={true} value={'phone'}/>    
            <Input className="input" placeholder="Trả sau" style={{width: "100px"}} disabled={true} value={'service'}/>   
        </div>   
        <Table
        dataSource={data}
        columns={columns}
        bordered
        >

        </Table>
    </div>
}
const Online = ()=>{
    return <Typography style={{color: "lightgreen"}}>Online</Typography>
}
const Offline = ()=>{
    return <Typography>Offline</Typography>
}
const Error = ()=>{
    return <Typography style={{color: "red"}}>Error</Typography>
}

export default CustomerDetail;