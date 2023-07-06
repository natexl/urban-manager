import React, { useState } from 'react';
import { Table, Popconfirm, Tag, Button, Row, Col, DatePicker, Drawer, Form, Input, Select, Space } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import { Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
import {defaultPermissions} from "@/config/other"

interface RecordType {
  key: string;
  title: string;
  description?: string;
}

const mockData: RecordType[] = defaultPermissions.map((v, i) => ({
  key: i.toString(),
  title: v,
  description: `...`,
}));

const initialTargetKeys: string[] = [];

interface DataType {
    key: React.Key;
    rolename: string;
    register_time: string;
    description: string;
    permissons: string[]
}

const { Option } = Select;

const PermissonTable = () => {
    const [editForm] = Form.useForm()
    const [editDraweropen, setEditDraweropen] = useState(false);
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [currentEditModel, setCurrentEditModel] = useState<"update" | "new">("new")

    const [data, setData] = useState<DataType[]>([
        {
            key: '1',
            rolename: '张三',
            register_time: '2023/07/05',
            description: 'New York No. 1 Lake Park',
            permissons: []
        },
        {
            key: '2',
            rolename: '李四',
            register_time: '2023/07/05',
            description: 'New York No. 1 Lake Park',
            permissons: ["edit", "notice", "find"]
        },
        {
            key: '3',
            rolename: '王二',
            register_time: '2023/07/05',
            description: 'New York No. 1 Lake Park',
            permissons: []
        },
        {
            key: '4',
            rolename: '麻子',
            register_time: '2023/07/05',
            description: 'New York No. 1 Lake Park',
            permissons: []
        }
    ])


    const handleDelete = (key: React.Key) => {
        const newData = data.filter((item) => item.key !== key);
        setData(newData);
    };

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    const editClickHandler = (key: string, perms: string[]) => {
        setCurrentEditModel("update")
        let curData = data.filter((item) => item.key === key)
        editForm.setFieldsValue({ ...curData[0] })
        setTargetKeys(perms.map(item => defaultPermissions.indexOf(item).toString()).filter(item => item !== '-1'))
        setEditDraweropen(true)
    }

    const newRoleClickHandler = () => {
        setCurrentEditModel("update")
        editForm.setFieldsValue({})
        setTargetKeys([])
        setEditDraweropen(true)
    }

    const onEditDrawerClose = () => {
        setEditDraweropen(false);
    };

    const columns: ColumnsType<DataType> = [
        {
            title: 'rolename',
            dataIndex: 'rolename',
            defaultSortOrder: 'descend',
            align: "center",
            sorter: (a, b) => a.rolename.length - b.rolename.length,
        },
        {
            title: 'registerTime',
            dataIndex: 'register_time',
            defaultSortOrder: 'descend',
            align: "center",
            sorter: (a, b) => a.register_time.length - b.register_time.length,
        },
        {
            title: 'description',
            dataIndex: 'description',
            align: "center",
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            align: "center",
            render: (_, record: { key: React.Key, permissons: string[] }) =>
                data.length >= 1 ? (
                    <Row gutter={10} align={"middle"}>
                        <Col>
                            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
                                <Button type='primary' danger>删除</Button>
                            </Popconfirm>
                        </Col>
                        <Col>
                            <Button type='primary' onClick={() => { editClickHandler(record.key as string, record.permissons) }}>编辑</Button>
                        </Col>
                    </Row>

                ) : null,
        },
        {
            title: 'permissons',
            dataIndex: 'permissons',
            align: "center",
            render: (_, record: { key: React.Key, permissons: string[] }) => {
                return record.permissons.map((item: string, index) => <Tag color='processing' key={index}>{item}</Tag>)
            }
        }
    ];

    // Transfer
    const onTransferChange = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
        console.log('targetKeys:', nextTargetKeys);
        console.log('direction:', direction);
        console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };

    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        console.log('sourceSelectedKeys:', sourceSelectedKeys);
        console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };

    const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
        // console.log('direction:', direction);
        // console.log('target:', e.target);
    };

    return (
        <>
            <Table columns={columns} dataSource={data} onChange={onChange} />
            <Row>
                <Col><Button type='primary' onClick={newRoleClickHandler}>新增角色</Button></Col>
            </Row>
            <Drawer
                title= {currentEditModel === "new" ? "Create a new account" : "Update account"}
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
                                name="rolename"
                                label="Name"
                                rules={[{ required: true, message: 'Please enter roleName' }]}
                            >
                                <Input
                                    style={{ width: '100%' }}
                                    placeholder="Please enter roleName"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                name="register_time"
                                label="DateTime"
                            >
                                <Input placeholder="Please enter user name" disabled />
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
                <Row>
                    {targetKeys.map((item, index) => <Col key={index}><Tag color="success">{defaultPermissions[parseInt(item)]}</Tag></Col>)}
                </Row>
                <Transfer
                    dataSource={mockData}
                    titles={['Source', 'Target']}
                    targetKeys={targetKeys}
                    selectedKeys={selectedKeys}
                    onChange={onTransferChange}
                    onSelectChange={onSelectChange}
                    onScroll={onScroll}
                    render={(item) => item.title}
                    style={{marginTop: 10}}
                />
            </Drawer>
        </>
    )
}

export default PermissonTable;