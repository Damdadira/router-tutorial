import React from 'react';
import { useParams } from 'react-router-dom';

const profileData = {
  velopert: {
    name: '김민준',
    description: '개발자'
  },
  gildong: {
    name: '홍길동',
    description: '전래동화 주인공'
  }
}

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];
  if(!profile){
    return <div>존재하지 않는 유저입니다.</div>
  }
  return (
    <div className='p-4'>
      <h3 className='text-2xl'>{username}({profile.name})</h3>
      <p className='pt-2 text-xl'>{profile.description}</p>
    </div>
  )
};

export default Profile;