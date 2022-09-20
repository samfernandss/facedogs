import React from 'react';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import Feed from '../Feed/Feed';
import { Routes, Route } from 'react-router-dom';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStats />} />
      </Routes>
    </section>
  )
}

export default User;