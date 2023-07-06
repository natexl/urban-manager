import { Card, Collapse } from "antd"
import type { CollapseProps } from "antd"


const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: '事项办理',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: '待办事项',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: '已完成事项',
        children: <p>{text}</p>,
    },
];

const TransactionInterface = () => {
    return (
        <>
            <Card>
                <Collapse accordion items={items} />
            </Card>
        </>
    )
}

export default TransactionInterface