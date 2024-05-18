import React from 'react';
import './NavInshot.css'
import SwipeableTemporaryDrawer from './HamburgerDrawer';

const NavInshort = ({ setCategory }) => {
    return (
        <div className="nav">
            <div className="icon">
                <SwipeableTemporaryDrawer setCategory={setCategory} />
            </div>
            <img src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt="logo" height="80%" style={{ cursor: "pointer" }} />
        </div>
    );
};

export default NavInshort;