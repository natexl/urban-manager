import { Card, Form, Row, Collapse } from "antd"
import type { CollapseProps } from 'antd';
import React from 'react';
import UserTable from "./userTable";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];

const UsersInterface = () => {
    return (
        <>
            <Card className="users-card">
                <UserTable />
                <Collapse accordion items={items} />
            </Card>
        </>
    )
}

export default UsersInterface