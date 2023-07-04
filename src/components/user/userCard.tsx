import { Card } from "antd"
import { useState } from "react";
import "./userCard.less"

const UserCard = () => {
    const [showDetail, setShowDetail] = useState(true);
    const toggleDetail = (v: boolean) => {
        setShowDetail(v);
    }

    return (
        <>
            <div onClick={() => { toggleDetail(true) }} onMouseLeave={() => { toggleDetail(false) }}>
                {!showDetail ? <>
                    <div className="avatar-hide">
                        <img src="src/assets/user.png" alt="#" />
                        <span className="username">Japycer</span>
                    </div>
                </> : <Card className="user-card" >
                    <div className="avatar-top">
                        <div className="avatar-img">
                            <img src="src/assets/user.png" alt="#" />
                        </div>
                        <div className="base-info">
                            <div className="user-name">Japycer</div>
                            <div className="user-lastLogin">最近登录：<span>2023/5/12</span></div>
                        </div>
                    </div>
                    <div className="avatar-content">
                        <div className="user-details">
                            <div className="user-others">
                                <div className="user-tag">管理员</div>
                                <div className="user-transaction">
                                    <span>待办事项</span><br/>
                                    <span className="user-waiting-deal-number">13</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="avatar-bottom">
                        <div className="user-operations">
                            <div className="user-edit">
                                <span>信息编辑</span>
                            </div>
                            <div className="user-permission">
                                <span>权限查询</span>
                            </div>
                            <div className="user-logout">
                                <span>退出登录</span>
                            </div>
                        </div>
                    </div>
                </Card>}

            </div>
        </>
    )
}

export default UserCard