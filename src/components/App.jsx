import React from "react";
import Search from "./Search";
import NewsFeedControl from "./NewsFeedControl";
import FriendsList from "./FriendsList";
import NavBar from './NavBar';
// import './styles.css';


function App() {
  // var appStyles = {
  //   backgroundColor: '#ecf0f1',
  //   fontFamily: 'sans-serif',
  //   paddingTop: '50px'

  // }

  return (
    <div className="App">

      <div className="container">
        <div className="row" >
          <NavBar />
        </div>

        <div className="row">
          <div className="col-md-4">
            <NewsFeedControl />
          </div>

          <div className="col-md-8">
            <FriendsList />
          </div>



        </div>




      </div>
    </div>



  );
}

export default App;