import React from "react";
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';
import PropTypes from 'prop-types';


function NewsFeedControl(props) {
    return (
        <div>
            <NewPost onAddingNewPostToList={props.handleAddingNewPostToList} />
            {/* accepts a method as a prop to make a new post */}

            <hr />

            <NewsFeed newsFeedList={props.newsFeedList} />
            {/* //takes the object arrawy from state and makes a bunch of feed components */}
        </div>
    );
}

export default NewsFeedControl;
