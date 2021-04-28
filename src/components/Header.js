import React from 'react';

const Header = () =>
{
    return (
        <header>
        <div className="user">
            <img src="" alt="" />
            <span className="name">Max Symonenko</span>
        </div>
        <button className="logout" onclick="logout()">Logout</button>
    </header>
    )
}
export default Header;