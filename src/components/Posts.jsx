import React from 'react';
import PropTypes from 'prop-types';


function Posts(){
    return(
        <div>
            <h1 class="jumbotron">Posts</h1>
            <form id="post">
            <input type="text" name="NewPost" id="newpost"></input>
            <button type="submit" class="btn btn-info">Submit</button>
            </form>

        </div>
    );
}

export default Posts;