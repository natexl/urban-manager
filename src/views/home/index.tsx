import JaMap from "@/components/map"
// import UserInfo from "@/components/user/userInfo"
import UserCard from "@/components/user/userCard"
import TopTitle from "./topTitle"
import { FloatButton } from 'antd';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import "./home.less"

const Home = () => {
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
                    icon={<CustomerServiceOutlined />}
                >
                    <FloatButton />
                    <FloatButton icon={<CommentOutlined />} />
                </FloatButton.Group>
            </div>
        </>
    )
}
export default Home