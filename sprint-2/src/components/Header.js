import React from 'react';
import Logo from "../assets/logo/Logo-brainflix.svg";
import Avatar from "../assets/images/Mohan-muruge.jpg"
import {Link} from "react-router-dom";
function Header() {
    return  (
        <header className = "header">
           <Link className = "header__logo-container" to = "/">
                    <img className = "header__logo" src = {Logo}  alt = "Logo"></img>
            
           </Link> 
            <input className = "header__search-bar" type="text" placeholder="Search"/>
            <form className = "header__upload-row">
                <Link className="header__upload-row-link" to = "/upload"><button className = "header__upload-row-btn">+ UPLOAD</button></Link>
                <img className = "header__upload-row-img"  alt = "Avatar"src = {Avatar}></img>
            </form>
        </header>
    );
}

export default Header