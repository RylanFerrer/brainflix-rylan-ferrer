import React from 'react';
import Logo from "../assets/logo/Logo-brainflix.svg";
import Avatar from "../assets/images/Mohan-muruge.jpg"
function Header() {
    return  (
        <header className = "header">
            <div className = "header__logo-container">
                <img className = "header__logo" src = {Logo}  alt = "Logo"></img>
            </div>
            <input className = "header__search-bar" type="text" placeholder="Search"/>
            <div className = "header__upload-row">
                <button className = "header__upload-row-btn">+ UPLOAD</button>
                <img className = "header__upload-row-img"  alt = "Avatar"src = {Avatar}></img>
            </div>
        </header>
    );
}

export default Header