import { Typography, Input, Table } from "antd";
import './devices.css'
import { useState } from "react";
const Firmwares = () => {
    const { Search } = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('');
    const handleChange = event => {
        setRowPerPage(event.target.value)
    }
    const data = [
        {
            stt: 1,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '1'
        },
        {
            stt: 2,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '2'
        },
        {
            stt: 3,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '3'
        },
        {
            stt: 4,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '4'
        },
        {
            stt: 5,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '5'
        },
        {
            stt: 6,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '6'
        },
        {
            stt: 7,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '7'
        },
        {
            stt: 8,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '8'
        },
        {
            stt: 9,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '9'
        },
        {
            stt: 10,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '10'
        },
        {
            stt: 11,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '11'
        },
        {
            stt: 12,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '12'
        },
        {
            stt: 13,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '13'
        },
        {
            stt: 14,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '14'
        },
        {
            stt: 15,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '15'
        },
        {
            stt: 16,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '16'
        },
        {
            stt: 17,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '17'
        },
        {
            stt: 18,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '18'
        },
        {
            stt: 19,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '19'
        },
        {
            stt: 20,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '20'
        },
        {
            stt: 21,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '21'
        },
        {
            stt: 22,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '22'
        },
        {
            stt: 23,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '23'
        },
        {
            stt: 24,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '24'
        },
        {
            stt: 25,
            deviceId: 'CNME000000001',
            mac: '24:0B:2A:72:20:F5',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '25'
        },
        {
            stt: 26,
            deviceId: 'CNME0000000024',
            mac: '24:0B:2A:72:20:F6',
            version: 'D20220825_190000',
            status: 'Chưa cập nhật',
            key: '26'
        },
        {
            stt: 27,
            deviceId: 'CNME100000100',
            mac: '24:0B:2A:72:20:F7',
            version: 'D20220825_190000',
            status: 'Mới nhất',
            key: '27'
        },


    ]

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'deviceId',
            key: 'deviceId',
            filteredValue: [searchedDevice],
            onFilter: (value, record) => {
                return String(record.deviceId).toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'Địa chỉ MAC',
            dataIndex: 'mac',
            key: 'mac'
        },
        {
            title: 'Phiên bản hiện tại',
            dataIndex: 'version',
            key: 'version'
        }, {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            // render:(status)=>{
            //     return <p>{status?'Mới nhất': 'Chưa cập nhật'}</p>
            // },
            filters: [
                { text: 'Mới nhất', value: 'Mới nhất' },
                { text: 'Chưa cập nhật', value: 'Chưa cập nhật' }
            ],
            onFilter: (value, record) => record.status.includes(value),
        },

    ]

    return <div>
        <Typography style={{ margin: "40px" }}>QUẢN LÝ FIRMWARE</Typography>
        <div className="search" >
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ fontWeight: "bold" }}>Số lượng hiển thị</Typography>
                <Input
                    className="input"
                    placeholder="..."
                    style={{ width: "50px" }}
                    onChange={handleChange}
                    value={rowPerPage} />
            </div>
            <Search
                className="input"
                placeholder="Nhập mã thiết bị"
                enterButton="Tìm kiếm"
                style={{ width: "400px" }}
                onSearch={value => setSearchedDevice(value)}
                onChange={e => setSearchedDevice(e.target.value)}
            />
        </div>
        <Table
            dataSource={data}
            columns={columns}
            bordered
            pagination={{
                pageSize: rowPerPage
            }}
        >
        </Table>
    </div>
}

export default Firmwares;