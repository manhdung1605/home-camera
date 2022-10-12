import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, Typography, Table, Modal, Popconfirm } from "antd";
import './error.css'
import { useState } from "react";
import { data } from "../fake-data/error"
const { Option } = Select;
const Error = () => {
    const { Search } = Input;
    const [open, setOpen] = useState(false);
    const [idDevice, setIdDevice] = useState('');
    const [typeDevice, setTypeDevice] = useState('');
    const [mac, setMac] = useState();
    const [idError, setIdError] = useState('');
    const [dateTime, setDateTime] = useState('');
    const [customer, setCustomer] = useState('');
    const [description, setDescription] = useState('');
    const [rowPerPage, setRowPerPage] = useState(10);
    const [searchedDevice, setSearchedDevice] = useState('')
    const [editRowKey, setEditRowKey] = useState('')

    const [form] = Form.useForm()
    const [form2] = Form.useForm()

    const handleChange = event => {
        setRowPerPage(event.target.value)
    }

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            editable: true,
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
            dataIndex: 'custommer',
            editable: true,
            key: 'custommer'
        },
        {
            title: 'Hành động',
            dataIndex: 'action',
            key: 'action',
            render: (text, record, index) => {
                const editable = isEditing(record)
                return <Space>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa ?"
                        onConfirm={() => console.log('delete')}
                    >
                        <Button danger type="primary" disabled={editable} >
                            Xóa
                        </Button>
                    </Popconfirm>
                    {editable ? (
                        <span>
                            <Space size="middle" >
                                <Button
                                    onClick={e => save(record.key)}
                                    type="primary"
                                    style={{ marginRight: 8 }}
                                >
                                    Lưu
                                </Button>
                                <Popconfirm title="Bạn chắc chắn muốn hủy ?" onConfirm={cancel}>
                                    <Button>Hủy</Button>
                                </Popconfirm>
                            </Space>
                        </span>
                    ) : (
                        <Button onClick={() => edit(record)} type="primary">
                            Sửa
                        </Button>
                    )}

                </Space >
            }
        }
    ]

    const isEditing = (record) => {
        return record.key === editRowKey;
    }
    const cancel = () => {
        setEditRowKey('');

    }
    const save = () => {

    }
    const edit = (record) => {
        form2.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            idError: "",
            dateTime: "",
            customer: "",
            description: "",
            ...record,
        });
        setEditRowKey(record.key);
    }

    const showDrawer = () => {
        form.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            idError: "",
            dateTime: "",
            customer: "",
            description: ""
        })
        setOpen(true);
        console.log("showDrawer");
    };

    const mergedColumns = columns.map((col) => {
        if (!col.editTable) {
            return col;
        } 
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    const EditableCell = ({
        editing,
        dataIndex,
        title,
        record,
        children,
        ...restProps
    }) => {
        const input = <Input />;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                required: true,
                                message: `Nhập ${title}`,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        )
    }
    const onClose = () => {
        form.setFieldsValue({
            idDevice: "",
            typeDevice: "",
            mac: "",
            idError: "",
            dateTime: "",
            customer: "",
            description: ""
        })
        setOpen(false);
    };

    const handleSubmit = (e) => {
        console.log(e.idDevice)
        console.log('submit')
        setOpen(false)
    }



    return <div>
        <Typography style={{ margin: "40px" }}>BÁO CÁO LỖI</Typography>
        <Drawer
            title=""
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{
                paddingBottom: 80,
            }}
        >
            <Form form={form} layout="vertical" hideRequiredMark onFinish={handleSubmit}>

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
                    <Button onClick={onClose} type="danger">Hủy bỏ</Button>
                    <Button htmlType="submit" type="primary">
                        Xác nhận
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
        <Form form={form2} component={false} >
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                dataSource={data}
                columns={mergedColumns}            
                bordered
                pagination={{
                    pageSize: rowPerPage
                }}
            >
            </Table>
        </Form>
    </div>
}

export default Error;