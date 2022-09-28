import { Typography, Input, Table, Button, Drawer } from "antd";
import { FileExcelFilled } from '@ant-design/icons';
import './customers.css';
import CustomerDetail from './customerDetail.js';
import React, { useState } from 'react';
import { Excel } from "antd-table-saveas-excel"

const Custommers = () => {
    const [open, setOpen] = useState(false);
    const showDetail = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleExport = () => {
        const excel = new Excel();
        excel.addSheet("ThongKe").addColumns(columns).addDataSource(data, { str2Percent: true }).saveAs("DS-KhachHang.xlsx")
    }
    const [searchedName, setSearchedName] = useState('')
    const [searchedPhone, setSearchedPhone] = useState('')
    const data = [
        {
            stt: 1,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '1'
        },
        {
            stt: 2,
            name: 'Phong',
            nbphone: '0974428661',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '2'
        },
        {
            stt: 3,
            name: 'Hiến',
            nbphone: '0974428662',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '3'
        },
        {
            stt: 4,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '4'
        },
        {
            stt: 5,
            name: 'Phong',
            nbphone: '0974428660',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '5'
        },
        {
            stt: 6,
            name: 'Hiến',
            nbphone: '0974428660',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '6'
        },
        {
            stt: 7,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '7'
        },
        {
            stt: 8,
            name: 'Phong',
            nbphone: '0974428660',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '8'
        },
        {
            stt: 9,
            name: 'Hiến',
            nbphone: '0974428660',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '9'
        },
        {
            stt: 10,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '10'
        },
        {
            stt: 11,
            name: 'Phong',
            nbphone: '0974428660',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '11'
        },
        {
            stt: 12,
            name: 'Hiến',
            nbphone: '0974428660',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '12'
        },
        {
            stt: 13,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '13'
        },
        {
            stt: 14,
            name: 'Phong',
            nbphone: '0974428660',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '14'
        },
        {
            stt: 15,
            name: 'Hiến',
            nbphone: '0974428660',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '15'
        },
        {
            stt: 16,
            name: 'Son',
            nbphone: '0974428660',
            address: 'Hà Nội',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button onClick={showDetail}>Chi tiết</Button>,
            key: '16'
        },
        {
            stt: 17,
            name: 'Phong',
            nbphone: '0974428660',
            address: 'Hải Phòng',
            service: 'Trả sau',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '17'
        },
        {
            stt: 18,
            name: 'Hiến',
            nbphone: '0974428660',
            address: 'Quảng Ninh',
            service: 'Trả trước',
            date: '25/8/2022 15:00:00',
            action: <Button>Chi tiết</Button>,
            key: '18'
        },
    ]

    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'name',
            key: 'name',
            filteredValue: [searchedName],
            onFilter: (value, record) => {
                return String(record.name).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'nbphone',
            key: 'nbphone',
            filteredValue: [searchedPhone],
            onFilter: (value, record) => {
                return String(record.nbphone).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address'
        }, {
            title: 'Gói cước',
            dataIndex: 'service',
            key: 'service'
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'key'
        }
    ]

    return <div>
        <Typography style={{ margin: "40px", }}>DANH SÁCH KHÁCH HÀNG</Typography>
        <div className="search">
            <Input.Search
                className="input"
                placeholder="Nhập tên"
                onSearch={(value) => {
                    setSearchedName(value);
                }}
                onChange={e => {
                    setSearchedName(e.target.value)
                }}
            />
            <Input.Search
                className="input"
                onSearch={value => {
                    setSearchedPhone(value);
                }}
                onChange={e => {
                    setSearchedPhone(e.target.value)
                }}
                placeholder="Nhập số điện thoại"
            />
            <Input.Search className="input" placeholder="Nhập dịch vụ" />
            {/* <Button className="button" icon={<SearchOutlined />}>Tìm kiếm</Button> */}
            <Button className="button" onClick={handleExport} icon={<FileExcelFilled />}>Xuất file</Button>
        </div>
        <Table
            dataSource={data}
            columns={columns}
            bordered
        />
        <Drawer
            title="CHI TIẾT THIẾT BỊ KHÁCH HÀNG SỞ HỮU"
            closable={false}
            onClose={onClose}
            open={open}
            placement='left'
            width="1000px"
        >
            <CustomerDetail></CustomerDetail>
        </Drawer>
    </div>
}

export default Custommers;