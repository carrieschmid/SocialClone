import React from "react";
import NewPost from './NewPost';
import NewsFeed from './NewsFeed';

class NewsFeedControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newsFeedList: [
            {
                userName: 'dklsadjl',
                feed: 'lorem ipsum dolor'
            },
        
            {
                userName: 'jgkdlfj',
                feed: 'ghfjdfjkgjkdfhkd'
            }
          ]
        };
        this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);
      }

      handleAddingNewPostToList(newPost) {
          var newNewsFeedList = this.state.newsFeedList.slice();
          newNewsFeedList.push(newPost);
          this.setState({newsFeedList: newNewsFeedList});
      }

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
