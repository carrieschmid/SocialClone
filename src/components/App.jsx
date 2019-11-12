import React from "react";
import Search from "./Search";
import NewsFeed from "./NewsFeed";
import Posts from "./Posts"

function App(){
  return (
    <div>
       <Search/>
       <Posts/>
       <NewsFeed/>

    </div>
  );
}

export default App;