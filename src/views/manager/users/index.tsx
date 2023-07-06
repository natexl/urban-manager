import { Card, Form, Row, Select, Input, Col } from "antd"
import React from 'react';
import UserTable from "./userTable";

const { Option } = Select;
const {Search} = Input

const selectBefore = (
    <Select defaultValue="all" style={{width: 100}}>
        <Option value="all">all</Option>
        <Option value="admin">admin</Option>
    </Select>
);

const UsersInterface = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <>
            <Card className="users-card">
                <Row style={{marginBottom: 20}}>
                    <Col span={12}>
                        <Search addonBefore={selectBefore}  defaultValue="" allowClear onSearch={onSearch}/>
                    </Col>
                </Row>
                <UserTable />
            </Card>
        </>
    )
}

export default UsersInterface