import { Card, Drawer, Collapse } from "antd"
import type {CollapseProps} from "antd"
import { useState } from "react";
import "./userCard.less"

const permissionIntroduce = [
    { name: "find", introduce: "数据查询和展示的权限" },
    { name: "notice", introduce: "发布公告等权限" },
    { name: "user-manage", introduce: "用户管理，能够创建和修改用户信息" },
    { name: "permission", introduce: "权限管理，能够新建角色并分配权限" },
    { name: "transaction", introduce: "能够处理事务，现在的事务主要是审批权限申请、矢量编辑等" },
    { name: "edit", introduce: "矢量编辑的权限，能够在管理界面编辑矢量" },
    { name: "visitor", introduce: "游客权限，最基本的权限，只能进入系统界面，无其他任何权限。" },
]

const items: CollapseProps['items'] = permissionIntroduce.map((item, index) => {
    return {
        key: index.toString(),
        label: item.name,
        children: <p>{item.introduce}</p>,
    }
})

const UserCard = () => {
    const [showDetail, setShowDetail] = useState(false);
    const toggleDetail = (v: boolean) => {
        setShowDetail(v);
    }

    const [openPermisson, setOpenPermission] = useState(false)

    const onPermissonClose = () => {
        setOpenPermission(false);
    };
    return (
        <>
            <div onClick={() => { toggleDetail(true) }} onMouseLeave={() => { toggleDetail(false) }} className="usercard">
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
                                    <span>待办事项</span><br />
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
                            <div className="user-permission" onClick={() => {setOpenPermission(true)}}>
                                <span>权限查询</span>
                            </div>
                            <div className="user-logout">
                                <span>退出登录</span>
                            </div>
                        </div>
                    </div>
                </Card>}
                <Drawer title="权限介绍" placement="right" onClose={onPermissonClose} open={openPermisson}>
                    <Collapse accordion items={items} />
                </Drawer>
            </div>
        </>
    )
}

export default UserCard