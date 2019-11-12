import React from "react";
import Feed from "./Feed";



var masterFeedList = [
    {
    userName: 'dklsadjl', 
    feed: 'lorem ipsum dolor'
    },
    
    {
    userName: 'jgkdlfj', 
    feed: 'ghfjdfjkgjkdfhkd'
    }

];

function NewsFeed(){
    return (
        <div>
            <hr/>
            {masterFeedList.map((post, index) =>
              <Feed userName= {post.userName}
                  feed = {post.feed}
                  key={index}/>
            )}
        </div>
    );
}

export default NewsFeed;