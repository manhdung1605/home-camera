import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Typography, Table } from "antd";
import './error.css'
import { useState } from "react";
const { Option } = Select;
const Error = () => {
    const { Search } = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('')
    const handleChange = event => {
        setRowPerPage(event.target.value)
    }
    const data = [
        {
            stt: 1,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '1'
        },
        {
            stt: 2,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '2'
        },
        {
            stt: 3,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '3'
        },
        {
            stt: 4,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '4'
        },
        {
            stt: 5,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '5'
        },
        {
            stt: 6,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '6'
        },
        {
            stt: 7,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '7'
        },
        {
            stt: 8,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '8'
        },
        {
            stt: 9,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '9'
        },
        {
            stt: 10,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '10'
        },
        {
            stt: 11,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '11'
        },
        {
            stt: 12,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '12'
        },
        {
            stt: 13,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '13'
        },
        {
            stt: 14,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '14'
        },
        {
            stt: 15,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '15'
        },
        {
            stt: 16,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '16'
        },
        {
            stt: 17,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '17'
        },
        {
            stt: 18,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '18'
        },
        {
            stt: 19,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '19'
        },
        {
            stt: 20,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '20'
        },
        {
            stt: 21,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '21'
        },
        {
            stt: 22,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '22'
        },
        {
            stt: 23,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '23'
        },
        {
            stt: 24,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '24'
        },
        {
            stt: 25,
            deviceId: 'CNME000000001',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F5',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Son',
            key: '25'
        },
        {
            stt: 26,
            deviceId: 'CNME000000024',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F6',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Phong',
            key: '26'
        },
        {
            stt: 27,
            deviceId: 'CNME000000100',
            deviceType: 'HC22',
            mac: '24:0B:2A:72:20:F7',
            errorId: 'FFFFFFFF',
            errorDetail: 'Giải mã chi tiết lỗi tại đây',
            errorDate: '30/8/2022 17:30:05',
            custommer: 'Hiến',
            key: '27'
        },
    ]

    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'deviceId',
            key: 'deviceId',
            filteredValue: [searchedDevice],
            onFilter: (value, record) => {
                return String(record.deviceId).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Loại thiết bị',
            dataIndex: 'deviceType',
            key: 'deviceType'
        },
        {
            title: 'Địa chỉ MAC',
            dataIndex: 'mac',
            key: 'mac'
        }, {
            title: 'Mã lỗi',
            dataIndex: 'errorId',
            key: 'errorId'
        },
        {
            title: 'Chi tiết lỗi',
            dataIndex: 'errorDetail',
            key: 'errorDetail'
        },
        {
            title: 'Ngày ghi nhận',
            dataIndex: 'errorDate',
            key: 'errorDate'
        },
        {
            title: 'Khách hàng',
            dataIndex: 'custommer',
            key: 'custommer'
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary">Sửa</Button>
                    <Button type="danger">Xóa</Button>
                </Space>
            )
        }
    ]
    const [open, setOpen] = useState(false);
    const [idDevice, setIdDevice] = useState('');
    const [typeDevice, setTypeDevice] = useState('');
    const [mac, setMac] = useState();
    const [idError, setIdError] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        console.log(idDevice)
        console.log('submit')
        setOpen(false)
    }

    return <div>
        <Typography style={{ margin: "40px" }}>BÁO CÁO LỖI</Typography>
        <Drawer
            title="Thêm lỗi"
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Form layout="vertical" hideRequiredMark onFinish={handleSubmit}>
              
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="idDevice"
                            label="Mã thiết bị"
                            value="idDevice"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập mã thiết bị',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập mã thiết bị" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="typeDevice"
                            label="Loại thiết bị"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập loại thiết bị',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                                // addonBefore="http://"
                                // addonAfter=".com"
                                placeholder="Nhập loại thiết bị"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="mac"
                            label="Địa chỉ MAC"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập địa chỉ mac',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập địa chỉ MAC" />

                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="idError"
                            label="Mã lỗi"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập mã lỗi',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập mã lỗi" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="customer"
                            label="Khách hàng"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập tên khách hàng',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập tên khách hàng" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label="Ngày ghi nhận"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập thời gian ghi nhận lỗi',
                                },
                            ]}
                        >
                            <DatePicker showTime
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Chi tiết lỗi"
                            rules={[
                                {
                                    required: true,
                                    message: 'Ghi rõ chi tiết lỗi',
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="Nhập chi tiết lỗi" />
                        </Form.Item>
                    </Col>
                </Row>
                <Space>
                    <Button onClick={onClose}>Hủy bỏ</Button>
                    <Button htmlType="submit" type="primary">
                        Thêm mới
                    </Button>
                </Space>
            </Form>
        </Drawer>
        <div className="search" >
            <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ fontWeight: "bold" }}>Số lượng hiển thị</Typography>
                <Input className="input" placeholder="20" style={{ width: "50px" }} onChange={handleChange} value={rowPerPage} />
            </div>
            <Search
                className="input"
                placeholder="Nhập mã thiết bị"
                enterButton="Tìm kiếm"
                style={{ width: "400px" }}
                onSearch={value => {
                    setSearchedDevice(value)
                }}
                onChange={e => {
                    setSearchedDevice(e.target.value)
                }}
            />
            <Button type="primary" onClick={showDrawer}>Tạo mới</Button>
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

export default Error;