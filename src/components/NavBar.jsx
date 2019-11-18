import React from 'react';
import Search from './Search';

function NavBar() {
    return (
        <div className="row">
            <div className="col-md-8">
                <a href="index.html">Home</a>
                <a href="notifications.html">Notifications</a>
                <a href="messages.html">Messages</a>
            </div>
            <Search />
        </div>
    );
}
        
export default NavBar;