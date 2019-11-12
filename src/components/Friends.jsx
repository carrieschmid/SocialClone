import React from 'react';
import PropTypes from 'prop-types';

function Friends(props){
    return (
        <div>
            <h5>{props.userName}</h5>
            <button type="click" class="btn btn-info">Button</button>
        </div>
    );
}

Friends.propTypes = {
    userName: PropTypes.string.isRequired
};

export default Friends;