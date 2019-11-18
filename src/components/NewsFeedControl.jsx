import React from "react";
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';

class NewsFeedControl extends React.Component {

    
      

    render(){
        return (
            <div>
                <NewPost onPostCreation={this.handleAddingNewPostToList}/>
                {/* accepts a method as a prop to make a new post */}

                <hr />

                <NewsFeed newsFeedList={this.state.newsFeedList} />
                {/* //takes the object arrawy from state and makes a bunch of feed components */}

            </div>
        );
    }

}

export default NewsFeedControl;
