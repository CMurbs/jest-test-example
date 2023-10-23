import React, { useState } from 'react';
import { useLocation } from 'react-router';
import users from '../data';

interface User {
  name: string;
  username: string;
  email: string;
  bio: string;
  avatar: string;
}

const getUserProfile = (email: string): User => {
  const res = users.find((user) => user.email === email)
  if (res) {
    return res
  } else {
    return {
      name: 'John Doe',
      username: 'johndoe123',
      email: 'johndoe@example.com',
      bio: 'Web Developer | JavaScript Enthusiast',
      avatar: 'https://example.com/avatar.jpg',
    };
  }
}

const ProfilePage: React.FC = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const email = query.get('email');
  const [user, setUser] = useState<User>(getUserProfile(email!))

  return (
    <div>
      <h1>Profile Page</h1>
      <div className="profile-card" data-testid='profile-page'>
        <img src={user?.avatar} alt={`${user.username}'s profile`} />
        <h2>Name: {user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Bio: {user.bio}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
