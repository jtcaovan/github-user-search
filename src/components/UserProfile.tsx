import React from 'react'
import {ReactComponent as Location} from '../assets/icon-location.svg'
import {ReactComponent as Website} from '../assets/icon-website.svg'
import {ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import {ReactComponent as Company} from '../assets/icon-company.svg'

import './UserProfile.scss'


const UserProfile = (props : any) => {
    let date = new Date(props.userInfo.dateJoined);
    // console.log(date.toLocaleDateString())
    const day = date.getUTCDate();
    // const month = new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date);
    const year = date.getUTCFullYear();


    return (
        <section className='userProfileContainer'>
            <header className='profileHeader'>
                <img src={props.userInfo.profileImage} className='profilePicture' alt='User Profile'></img>
                <div className='headerContent'>
                    <h2 className='userName'>{props.userInfo.name}</h2>
                    <h3 className='login'>@{props.userInfo.login}</h3>
                    <h4 className='dateJoined'>
                        Joined {day} {year}
                    </h4>
                </div>
            </header>

            <div>
                <p className='bio'>{props.userInfo.bio ? props.userInfo.bio : 'This profile has no bio'}</p>
                <div className='gitHubOuterContainer'>
                    <div className='gitHubInnerContainer'>
                        <div className='gitHubStats'>
                            <p className='gitHubTitle'>Repos</p>
                            <p className='gitHubStat'>{props.userInfo.repos}</p>
                        </div>
                        <div className='gitHubStats'>
                            <p className='gitHubTitle'>Followers</p>
                            <p className='gitHubStat'>{props.userInfo.followers}</p>
                        </div>
                        <div className='gitHubStats'>
                            <p className='gitHubTitle'>Following</p>
                            <p className='gitHubStat'>{props.userInfo.following}</p>
                        </div>
                    </div>
                </div>

                <ul className='socialContainer'>
                    <li className='social'>
                        <Location />
                        <p>{props.userInfo.location ? props.userInfo.location : 'Not available'}</p>                    
                    </li>
                    <li className='social'>
                        <Website />
                        <p>{props.userInfo.site ? props.userInfo.site : 'Not available'}</p>
                    </li>
                    <li className='social'>
                        <Twitter />
                        <p>{props.userInfo.twitter ? props.userInfo.twitter : 'Not available'}</p>
                    </li>
                    <li className='social'>
                        <Company />
                        <p>{props.userInfo.company ? props.userInfo.company : 'Not available'}</p>
                    </li>
                </ul>
            </div>
        </section>
)
}

export default UserProfile