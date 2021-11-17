import React from 'react'
import {ReactComponent as Location} from '../assets/icon-location.svg'
import {ReactComponent as Website} from '../assets/icon-website.svg'
import {ReactComponent as Twitter} from '../assets/icon-twitter.svg'
import {ReactComponent as Company} from '../assets/icon-company.svg'

import './UserProfile.scss'


const UserProfile = () => 
    <section>

        <header>
            <p>Profile Picture</p>
            <div>
                <h2>Profile Name</h2>
                <h3>GitHub tag</h3>
                <h4>Join date</h4>
            </div>
        </header>

        <div>
            <p>Bio</p>

            <div className='gitHubStatsContainer'>
                <div className='gitHubStats'>
                    <p>Repos</p>
                    <p>8</p>
                </div>
                <div className='gitHubStats'>
                    <p>Followers</p>
                    <p>3000</p>
                </div>
                <div className='gitHubStats'>
                    <p>Following</p>
                    <p>8</p>
                </div>
            </div>

            <ul className='socialContainer'>
                <li className='social'>
                    <Location />
                    <p>Phoenix</p>                    
                </li>
                <li className='social'>
                    <Website />
                    <p></p>
                </li>
                <li className='social'>
                    <Twitter />
                    <p></p>
                </li>
                <li className='social'>
                    <Company />
                    <p></p>
                </li>
            </ul>
        </div>

    </section>



// User
// User Information
// Social Media

export default UserProfile