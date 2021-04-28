import React from 'react';

const Header = (props) =>
{
    return (
        <header>
        <div className="user">
            <img src="" alt="" />
            <span className="name">{props.user.name}</span>
        </div>
        <button className="logout" onclick="logout()">Logout</button>
    </header>
    )
}
export default Header;