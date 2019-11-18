import React from 'react';
import Search from './Search';
import PropTypes from 'prop-types';

function NavBar(props) {
    return (
        <div className="row">
            <div className="col-md-8">
                <a href="index.html">Home</a>
                <a href="notifications.html">Notifications</a>
                <a href="messages.html">Messages</a>
            </div>
            <Search onSearchCreation={props.handleAddingNewSearchTerm}/>
        </div>
    );
}

NavBar.propTypes = { 
    handleAddingNewSearchTerm: PropTypes.func
}
        
export default NavBar;