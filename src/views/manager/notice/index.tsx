import { Card, Form, Select, Input, Button } from "antd";
const { TextArea } = Input;

const NoticeInterface = () => {
    return (
        <>
            <Card>
                <Form name="noticeContent"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item label="公告名称">
                        <Input placeholder="请输入..."></Input>
                    </Form.Item>

                    <Form.Item label="公告内容">
                        <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
                    </Form.Item>

                    <Form.Item label="面向群体">
                        <Select defaultValue={"所以用户"} options={[{ value: "all" }, { value: "editor" }]}></Select>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </>
    )
}

export default NoticeInterface