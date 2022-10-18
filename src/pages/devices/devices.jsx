import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Typography, Table, Modal, Popconfirm, message } from "antd";
import './devices.css'
import { data } from "../../fake-data/devices"
import { useState } from "react";
import moment, { now } from "moment/moment";
const Devices = () =>{
    const {Search} = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('');

    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [formCreate] = Form.useForm()
    const [formEdit] = Form.useForm()
    const [form2] = Form.useForm()

    // Handle show row per one page
    const handleChange = event => {
        setRowPerPage(event.target.value);
    }

    const columns = [
        {
            title: 'STT',
            dataIndex:'stt',
            key:'stt'
        },
        {
            title: 'Mã thiết bị',
            dataIndex:'idDevice',
            key:'idDevice',
            filteredValue: [searchedDevice],
            onFilter:(value, record) => {
                return String(record.idDevice).toLowerCase().includes(value.toLowerCase())
            }
        },
        {
            title: 'Loại thiết bị',
            dataIndex:'typeDevice',
            key:'typeDevice'
        },
        {
            title: 'Địa chỉ MAC',
            dataIndex:'mac',
            key:'mac'
        },   {
            title: 'Loại kết nối',
            dataIndex:'typeConnect',
            key:'typeConnect'
        },
        {
            title: 'Ngày kích hoạt',
            dataIndex:'dateTime',
            key:'dateTime'
        },
        {
            title: 'Gói cước',
            dataIndex:'service',
            key:'service'
        },
        {
            title: 'Khách hàng',
            dataIndex:'customer',
            key:'customer',
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return <Space>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa ?"
                        onConfirm={() => console.log('delete')}
                    >
                        <Button danger type="primary">
                            Xóa
                        </Button>
                    </Popconfirm>
                    <Button type="primary" onClick={() => { showDrawerEdit(record) }} >
                        Sửa
                    </Button>
                </Space >
            }
        }


    ]

    // Open drawer
    const showDrawerCreate = () => {
        formCreate.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            typeConnect: "",
            dateTime: "",
            service:"",
            customer: "",
        })
        setOpenCreate(true);
        console.log("show Drawer Create");
    };

    const showDrawerEdit = (record) => {
        formEdit.setFieldsValue({
            idDevice: record.idDevice,
            typeDevice: record.typeDevice,
            mac: record.mac,
            typeConnect: record.typeConnect,
            dateTime: moment(record.dateTime, 'DD/MM/YYYY hh:mm:ss'),
            customer: record.customer,
            service: record.service,
        })
        setOpenEdit(true);
        console.log("show Drawer Edit ");
    };

    // Close and reset drawer
    const onCloseEdit = () => {
        formEdit.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            typeConnect: "",
            dateTime: "",
            customer: "",
            service: ""
        })
        setOpenEdit(false)
    };
    const onCloseCreate = () => {
        formCreate.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            typeConnect: "",
            dateTime: "",
            customer: "",
            service: ""
        })
        setOpenCreate(false)
    };

    // Confirm Drawer
    const onFinishCreate = (e) => {
        console.log(`create ${e}`)
        message.success("Tạo mỡi thành công")
        setOpenCreate(false)
    }
    const onFinishEdit = (e) => {
        console.log(`edit abc${e}`)
        message.success("Chỉnh sửa thành công")
        setOpenEdit(false)

    }
    return <>
        <Typography style={{ margin: "40px" }}>DANH SÁCH THIẾT BỊ</Typography>
        <Drawer
            title="Tạo mới thông tin thiết bị"
            width={720}
            onClose={onCloseCreate}
            open={openCreate}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Form form={formCreate} layout="vertical" hideRequiredMark onFinish={onFinishCreate} >
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
                            name="typeConnect"
                            label="Loại kết nối"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập loại kết nối',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập loại kết nối" />
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
                            label="Ngày kích hoạt"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập thời gian kích hoạt',
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
                            name="service"
                            label="Gói cước"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập gói cước',
                                },
                            ]}
                        >
                            <Input rows={4} placeholder="Nhập gói cước" />
                        </Form.Item>
                    </Col>
                </Row>
                <Space>
                    <Button onClick={onCloseCreate} type="danger">Hủy bỏ</Button>
                    <Button htmlType="submit" type="primary">
                        Thêm mới
                    </Button>
                </Space>
            </Form>
        </Drawer>
        <Drawer
            title="Chỉnh sửa thông tin lỗi"
            width={720}
            onClose={onCloseEdit}
            open={openEdit}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Form form={formEdit} layout="vertical" hideRequiredMark onFinish={onFinishEdit}>
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
                            name="typeConnect"
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
                            label="Ngày kích hoạt"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập thời gian kích hoạt',
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
                            name="service"
                            label="Gói cước"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập gói cước',
                                },
                            ]}
                        >
                            <Input.TextArea rows={4} placeholder="Nhập gói cước" />
                        </Form.Item>
                    </Col>
                </Row>
                <Space>
                    <Button onClick={onCloseEdit} type="danger">Hủy bỏ</Button>
                    <Button htmlType="submit" type="primary">
                        Chỉnh sửa
                    </Button>
                </Space>
            </Form>
        </Drawer>
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
            <Button
                type="primary"
                onClick={showDrawerCreate}
            >
                Tạo mới
            </Button>
        </div>
        <Form form={form2}>
            <Table
                dataSource={data}
                columns={columns}
                bordered
                pagination={{
                    pageSize: rowPerPage
                }}
            />
        </Form>
    </>
}

export default Devices;