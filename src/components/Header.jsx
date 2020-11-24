import React from 'react'
import '../assets/styles/components/Header.scss'
import logo from '../assets/static/logo-platzi-video-BW2.png'
import user_icon from "../assets/static/user-icon.png"

let header__menu__profile_p = 'Profile'
let profile_options_account = 'Account'
let profile_options_logout = 'Logout'

const Header = () => {
    return(
        <header className = 'header'>
            <img className = 'header__img' alt = 'Platzi Video' src = {logo} />
            <div className = 'header__menu'>
                <div className = 'header__menu--profile'>
                    <img src={user_icon} alt="user icon"/>
                    <p>{header__menu__profile_p}</p>
                </div>
                <ul alt = 'list of profile options'>
                    <li href = '/' alt = 'Account'>{profile_options_account}</li>
                    <li href = '/' alt = 'Logout'>{profile_options_logout}</li>
                </ul>
            </div>
        </header>
    )
}

export default Header