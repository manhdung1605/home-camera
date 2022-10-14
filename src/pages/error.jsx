import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Typography, Table, Modal, Popconfirm, message } from "antd";
import './error.css'
import { useState } from "react";
import { data } from "../fake-data/error"
import moment, { now } from "moment/moment";
const Error = () => {
    const { Search } = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('')

    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [formCreate] = Form.useForm()
    const [formEdit] = Form.useForm()
    const [form2] = Form.useForm()

    const handleChange = event => {
        setRowPerPage(event.target.value)
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt'
        },
        {
            title: 'Mã thiết bị',
            dataIndex: 'idDevice',
            key: 'idDevice',
            editable: true,
            filteredValue: [searchedDevice],
            onFilter: (value, record) => {
                return String(record.idDevice).toLowerCase().includes(value.toLowerCase());
            }
        },
        {
            title: 'Loại thiết bị',
            dataIndex: 'typeDevice',
            key: 'typeDevice',
            editable: true,
        },
        {
            title: 'Địa chỉ MAC',
            dataIndex: 'mac',
            key: 'mac',
            editable: true,
        }, {
            title: 'Mã lỗi',
            dataIndex: 'idError',
            editable: true,
            key: 'idError'
        },
        {
            title: 'Chi tiết lỗi',
            dataIndex: 'description',
            editable: true,
            key: 'description'
        },
        {
            title: 'Ngày ghi nhận',
            dataIndex: 'dateTime',
            editable: true,
            key: 'dateTime'
        },
        {
            title: 'Khách hàng',
            dataIndex: 'customer',
            editable: true,
            key: 'customer'
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => {
                return <Space>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa ?"
                        onConfirm={handleDelete}
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
            idError: "",
            dateTime: "",
            customer: "",
            description: ""
        })
        setOpenCreate(true);
        console.log("show Drawer Create");
    };

    const showDrawerEdit = (record) => {
        formEdit.setFieldsValue({
            idDevice: record.idDevice,
            typeDevice: record.typeDevice,
            mac: record.mac,
            idError: record.idError,
            dateTime: moment(record.dateTime, 'DD/MM/YYYY hh:mm:ss'),
            customer: record.customer,
            description: record.description,
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
            idError: "",
            dateTime: "",
            customer: "",
            description: ""
        })
        setOpenEdit(false)
    };
    const onCloseCreate = () => {
        formCreate.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            idError: "",
            dateTime: "",
            customer: "",
            description: ""
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

    const handleDelete = () => {
        console.log('delete')
    }

    return <>
        <Typography style={{ margin: "40px" }}>BÁO CÁO LỖI</Typography>
        <Drawer
            title="Tạo mới thông tin lỗi"
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
                    <Button onClick={onCloseEdit} type="danger">Hủy bỏ</Button>
                    <Button htmlType="submit" type="primary">
                        Chỉnh sửa
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

export default Error;