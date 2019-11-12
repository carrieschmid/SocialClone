import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){
    return(
    
        
        <div> 
           <h3>{props.userName}</h3>
           <p>{props.feed}</p>
        </div>
    );
}

Feed.propTypes = {
    userName: PropTypes.string.isRequired,
    feed: PropTypes.string.isRequired
};

export default Feed;