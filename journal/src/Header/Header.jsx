import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={s.headerLogo}><a href="#" className={s.headerLink}>Logo</a></div>
            <div className={s.headerNav}>
                <ul className={s.headerList}>
                    <li className={s.headerItems}><a href="#">Submit</a></li>
                    <li className={s.headerItems}><a href="#">Article</a></li>
                    <li className={s.headerItems}><a href="#">Log In</a></li>
                    <li className={s.headerItems}><a href="#">Register</a></li>
                    <li className={s.headerItems}><a href="#"></a>Subscribe</li>
                    <li className={s.headerItems}><a href="#">Claim</a></li>
                    <li className={s.headerItems}><a href="#"></a></li>
                </ul>
            </div>
        </header>
    )
}



export default Header;