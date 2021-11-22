import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.scss';
import { Octokit } from '@octokit/core';


function App() {
  const API_KEY = process.env.REACT_APP_GITHUB_AUTH;
  
  // const [currentUser, setCurrentUser] = useState('jtcaovan')
  const [userInfo, setUserInfo] = useState({
    profileImage: '',
    name: '',
    login: "",
    dateJoined: "",
    bio: "",
    repos: "",
    followers: "",
    following: "",
    location: "",
    site: "",
    twitter: "",
    company: ""
  })

  useEffect(() => {
    async function fetchData() {
      const octokit = new Octokit({ auth: `${API_KEY}` })

      try {
        const user = await octokit.request('GET /users/octocat', {
          username: 'username'
        })

        setUserInfo({
          profileImage: user.data.avatar_url,
          name: user.data.name,
          login: user.data.login,
          dateJoined: user.data.created_at,
          bio: user.data.bio,
          repos: user.data.public_repos,
          followers: user.data.followers,
          following: user.data.following,
          location: user.data.location,
          site: user.data.blog,
          twitter: user.data.twitter_username,
          company: user.data.company
        })
      } catch {
        console.log('error')
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className='mainContainer'>
      <Header />
      <SearchBar />
      <UserProfile userInfo={userInfo}/>
    </div>
  );
}

export default App;
