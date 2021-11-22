import React from 'react'
import {ReactComponent as Location} from '../assets/icon-location.svg'
import {ReactComponent as Website} from '../assets/icon-website.svg'
import {ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import {ReactComponent as Company} from '../assets/icon-company.svg'

import './UserProfile.scss'


const UserProfile = (props : any) => {
    console.log(props)
    return (
        <section>
            <header>
                <img src={props.userInfo.profileImage} alt='User Profile'></img>
                <div>
                    <h2>{props.userInfo.name}</h2>
                    <h3>@{props.userInfo.login}</h3>
                    <h4>{props.userInfo.joined}</h4>
                </div>
            </header>

            <div>
                <p>{props.userInfo.bio}</p>
                <div className='gitHubStatsContainer'>
                    <div className='gitHubStats'>
                        <p>Repos</p>
                        <p>{props.userInfo.repos}</p>
                    </div>
                    <div className='gitHubStats'>
                        <p>Followers</p>
                        <p>{props.userInfo.followers}</p>
                    </div>
                    <div className='gitHubStats'>
                        <p>Following</p>
                        <p>{props.userInfo.following}</p>
                    </div>
                </div>

                <ul className='socialContainer'>
                    <li className='social'>
                        <Location />
                        <p>{props.userInfo.location}</p>                    
                    </li>
                    <li className='social'>
                        <Website />
                        <p>{props.userInfo.site}</p>
                    </li>
                    <li className='social'>
                        <Twitter />
                        <p>{props.userInfo.twitter}</p>
                    </li>
                    <li className='social'>
                        <Company />
                        <p>{props.userInfo.company}</p>
                    </li>
                </ul>
            </div>
        </section>
)
}

export default UserProfile