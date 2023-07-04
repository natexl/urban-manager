import { useState } from 'react';
import './userinfo.css';

export interface UserInfoProps {
  nickname: string,
  avatarUrl: string,
  introduction: string
}

const UserInfo = ({ nickname, avatarUrl, introduction }: UserInfoProps) => {
  const [showDetail, setShowDetail] = useState(true);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  }

  return (
    <div className="user-info" onMouseEnter={toggleDetail} onMouseLeave={toggleDetail}>
      <img className="avatar" src={avatarUrl} alt="用户头像" />
      {showDetail && (<h3 className="nickname">{nickname}</h3>)}
      {showDetail && (
        <div className="user-detail">
          <p className="introduction">{introduction}</p>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
