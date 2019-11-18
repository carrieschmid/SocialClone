import React from 'react';
import Feed from './Feed';
import PropTypes from 'prop-types';


function NewsFeed(props) {
    console.log(props.newsFeedList);
    return (
        <div>
            <hr />
            {props.newsFeedList.map((post, index) =>
                <Feed userName={post.userName}
                    feed={post.feed}
                    key={index} />
            )}
        </div>
    );
}

NewsFeed.propTypes = {
    newsFeedList: PropTypes.array
};

export default NewsFeed;