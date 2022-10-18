import { Button, Col, Drawer, Form, Input, Row, Space, Typography, Table, Popconfirm, message } from "antd";
import './firmwares.css'
import { useState } from "react";
import { data } from "../fake-data/firmwares"
const Firmwares = () => {
    const { Search } = Input;
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('');

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
            filteredValue: [searchedDevice],
            // onFilter: (value, record) => {
            //     return String(record.idDevice).toLowerCase().includes(value.toLowerCase())
            // }
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
        },
        {
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
            version: "",
            mac: "",
            status: "",
        })
        setOpenCreate(true);
        console.log("show Drawer Create");
    };

    const showDrawerEdit = (record) => {
        formEdit.setFieldsValue({
            idDevice: record.idDevice,
            version: record.version,
            mac: record.mac,
            status: record.status,
        })
        setOpenEdit(true);
        console.log("show Drawer Edit ");
    };

    // Close and reset drawer
    const onCloseEdit = () => {
        formEdit.setFieldsValue({
            idDevice: "",
            version: "",
            mac: "",
            status: "",
        })
        setOpenEdit(false)
    };
    const onCloseCreate = () => {
        formCreate.setFieldsValue({
            idDevice: "",
            version: "",
            mac: "",
            status: "",
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
        <Typography style={{ margin: "40px" }}>QUẢN LÝ FIRMWARE</Typography>
        <Drawer
            title="Tạo mới thông tin firmware"
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
                            name="version"
                            label="Phiên bản hiện tại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập phiên bản hiện tại',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Nhập phiên bản hiện tại"
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
                            name="status"
                            label="Trạng thái"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập trạng thái',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập trạng thái" />
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
                            name="version"
                            label="Phiên bản hiện tại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập phiên bản hiện tại',
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    width: '100%',
                                }}
                                placeholder="Nhập phiên bản hiện tại"
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
                            name="status"
                            label="Trạng thái"
                            rules={[
                                {
                                    required: true,
                                    message: 'Nhập trạng thái',
                                },
                            ]}
                        >
                            <Input placeholder="Nhập trạng thái" />
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

export default Firmwares;