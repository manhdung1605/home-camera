import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space,Typography, -/9* } from "antd";
im7port './error.css'
i7mport { useState } from "react";
import CRUDTable, {
    Fields,
    Field,
    CreateForm,
    UpdateForm,
    DeleteForm
} from "react-crud-table";
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

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return <div>
        <Typography style={{ margin: "40px" }}>BÁO CÁO LỖI</Typography>
        <Drawer
            title="Create a new account"
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
            extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onClose} type="primary">
                        Submit
                    </Button>
                </Space>
            }
        >
            <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter user name',
                                },
                            ]}
                        >
                            <Input placeholder="Please enter user name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="url"
                            label="Url"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter url',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                                addonBefore="http://"
                                addonAfter=".com"
                                placeholder="Please enter url"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="owner"
                            label="Owner"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select an owner',
                                },
                            ]}
                        >
                            <Select placeholder="Please select an owner">
                                <Option value="xiao">Xiaoxiao Fu</Option>
                                <Option value="mao">Maomao Zhou</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="type"
                            label="Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the type',
                                },
                            ]}
                        >
                            <Select placeholder="Please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="approver"
                            label="Approver"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the approver',
                                },
                            ]}
                        >
                            <Select placeholder="Please choose the approver">
                                <Option value="jack">Jack Ma</Option>
                                <Option value="tom">Tom Liu</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="dateTime"
                            label="DateTime"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the dateTime',
                                },
                            ]}
                        >
                            <DatePicker.RangePicker
                                style={{
                                    width: '100%',
                                }}
                                getPopupContainer={(trigger) => trigger.parentElement}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="description"
                            label="Description"
                            rules={[
                                {
                                    required: true,
                                    message: 'please enter url description',
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="please enter url description" />
                        </Form.Item>
                    </Col>
                </Row>
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