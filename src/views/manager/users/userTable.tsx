import React, { useState } from 'react';
import { Table, Popconfirm, Tag, Button, Row, Col, DatePicker, Drawer, Form, Input, Select, Space } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

interface DataType {
    key: React.Key;
    username: string;
    role: string;
    register_time: string;
    description: string;
}

const {Option} = Select

const UserTable = () => {
    const [editForm] = Form.useForm()
    const [editDraweropen, setEditDraweropen] = useState(false);
    const [currentEditModel, setCurrentEditModel] = useState<"update" | "new">("new")

    const handleDelete = (key: React.Key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const editClickHandler = (key: string) => {
        setCurrentEditModel("update")
        let curData = data.filter((item) => item.key === key)
        editForm.setFieldsValue({ ...curData[0] })
        setEditDraweropen(true)
    }

    const newUserClickHandler = () => {
        setCurrentEditModel("new")
        editForm.setFieldsValue({
            username: "",
            role: "",
            description: "",
            create_time: "",
            key: ""
        })
        setEditDraweropen(true)
    }

    const onEditDrawerClose = () => {
        setEditDraweropen(false);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'Username',
            dataIndex: 'username',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: 'Role',
            dataIndex: 'role',
            filters: [
                {
                    text: 'admin',
                    value: 'admin',
                },
                {
                    text: 'editor',
                    value: 'editor',
                },
            ],
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            onFilter: (value: any, record) => record.role.indexOf(value as string) === 0,
            sorter: (a, b) => a.role.length - b.role.length,
            sortDirections: ['descend'],
        },
        {
            title: 'registerTime',
            dataIndex: 'register_time',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: 'description',
            dataIndex: 'description',
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record: { key: React.Key }) =>
                data.length >= 1 ? (
                    <Row gutter={10} align={"middle"}>
                        <Col>
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                <Button type='primary' danger>删除</Button>
                            </Popconfirm>
                        </Col>
                        <Col>
                            <Button type='primary' onClick={() => { editClickHandler(record.key as string) }}>编辑</Button>
                        </Col>
                    </Row>
                ) : null,
        },
    ];

    const [data, setData] = useState([
        {
            key: '1',
            username: 'John Brown',
            role: "admin",
            register_time: '2023/07/06',
            description: 'New York No. 1 Lake Park'
        },
        {
            key: '2',
            username: 'Li Shi',
            role: "editor",
            register_time: '2023/07/09',
            description: 'New York No. 1 Lake Park'
        },
        {
            key: '3',
            username: 'Wang Er',
            role: "editor",
            register_time: '2023/07/08',
            description: 'New York No. 1 Lake Park'
        },
        {
            key: '4',
            username: 'Ma Zi',
            role: "others",
            register_time: '2023/07/08',
            description: 'New York No. 1 Lake Park'
        }
    ])

    return (
        <>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <Row>
                <Col><Button type='primary' onClick={newUserClickHandler}>新增用户</Button></Col>
            </Row>
            <Drawer
                title={currentEditModel === "new" ? "Create a new user" : "Update User"}
                width={720}
                onClose={onEditDrawerClose}
                open={editDraweropen}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onEditDrawerClose}>Cancel</Button>
                        <Button onClick={onEditDrawerClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Form layout="vertical" form={editForm}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="key"
                                label="ID"
                                rules={[{ required: true, message: 'Please enter ID' }]}
                            >
                                <Input placeholder="Please enter user ID" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="username"
                                label="用户名"
                                rules={[{ required: true, message: 'Please enter username' }]}
                            >
                                <Input
                                    style={{ width: '100%' }}
                                    placeholder="Please enter username"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="register_time"
                                label="创建时间"
                            >
                                <Input placeholder="Please enter user name" disabled />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="role"
                                label="角色"
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    // onChange={onGenderChange}
                                    allowClear
                                >
                                    <Option value="Editor">Editor</Option>
                                    <Option value="Manager">Manager</Option>
                                    <Option value="Admin">Admin</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="描述"
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
        </>
    )
}

export default UserTable;