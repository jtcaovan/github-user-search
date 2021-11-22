import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.scss';
import { Octokit } from '@octokit/core';


function App() {
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
      const octokit = new Octokit({ auth: ` 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`})
      let user = await octokit.request('GET /users/jtcaovan', {
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
