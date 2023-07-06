import JaMap from "@/components/map"
// import UserInfo from "@/components/user/userInfo"
import UserCard from "@/components/user/userCard"
import TopTitle from "./topTitle"
import { FloatButton, Drawer, Collapse } from 'antd';
import { CommentOutlined, MenuFoldOutlined, SearchOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import "./home.less"
import { useState } from "react";
import type { CollapseProps } from 'antd';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: '公告1-系统有更新',
        children: <p>{text}</p>,
    },
    {
        key: '2',
        label: '公告2-近期不可编辑数据',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: '公告3-数据规范化处理',
        children: <p>{text}</p>,
    },
];


const Home = () => {
    const [openNotice, setOpenNotice] = useState(false)
    const navigate = useNavigate()

    const onNoticeClose = () => {
        setOpenNotice(false);
    };

    return (
        <>
            <div className="home-wrap">
                <TopTitle title={"乡村房地矢量数据管理系统"}></TopTitle>
                <div className="map-container">
                    <JaMap></JaMap>
                </div>
                <div className="user-panel">
                    {/* <UserInfo nickname="japycer" avatarUrl="src/assets/user.png" introduction="Handsome boy!"></UserInfo> */}
                    <UserCard></UserCard>
                </div>
                <FloatButton.Group
                    trigger="hover"
                    type="primary"
                    style={{ right: 20, zIndex: 999 }}
                    icon={<MenuFoldOutlined />}
                >
                    <FloatButton icon={<SearchOutlined />} tooltip={"搜索"} />
                    <FloatButton icon={<AppstoreOutlined />} tooltip={"管理界面"} onClick={() => { navigate("/manager") }} />
                    <FloatButton icon={<CommentOutlined />} tooltip={"公告"} onClick={() => { setOpenNotice(true) }} />
                </FloatButton.Group>
            </div>
            <Drawer title="公告内容" placement="right" onClose={onNoticeClose} open={openNotice}>
                <Collapse accordion items={items} />
            </Drawer>
        </>
    )
}
export default Home