import JaMap from "@/components/map"
// import UserInfo from "@/components/user/userInfo"
import UserCard from "@/components/user/userCard"
import "./home.less"

const Home = () => {
    return (
        <>
         <div className="home-wrap">
            <div className="map-container">
                <JaMap></JaMap>
            </div>
            <div className="user-panel">
                {/* <UserInfo nickname="japycer" avatarUrl="src/assets/user.png" introduction="Handsome boy!"></UserInfo> */}
                <UserCard></UserCard>
            </div>
         </div>
        </>
    )
}
export default Home