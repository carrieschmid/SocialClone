import React from "react";
import Search from "./Search";
import NewsFeed from "./NewsFeed";
import Posts from "./Posts";
import FriendsList from "./FriendsList";
// import './styles.css';


function App(){
  // var appStyles = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'
    
  // }

  return (
    <div className = "App">

      <div className ="container">
      <div className = "row" >
       <Search/> 
       </div>

       <div className = "row">
       <div className = "col-md-4">
       <Posts/>
        <NewsFeed/>
       </div>

       <div className = "col-md-8">
       <FriendsList/>
       </div>

       
       
       </div>

       
        
      
      </div>
      </div>
    
   

  );
}

export default App;