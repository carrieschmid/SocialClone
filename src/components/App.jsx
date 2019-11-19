import React from "react";
import Search from "./Search";
import NewsFeedControl from "./NewsFeedControl";
import NavBar from './NavBar';
import FriendsList from './FriendsList';
// import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    //super accesses the React.Component constructor
    this.state = {
      //all state value key-value pairs go here
      newsFeedList: [
        {
          userName: "name1",
          feed: 'feed1'
        }
      ],
      currentSearchTerm: "",
    };

    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);

    this.handleAddingNewSearchTerm =
      this.handleAddingNewSearchTerm.bind(this);
      //Because handler is not bound by default, we must manually bind it in our constructor to define its "this"
      //constructor() does know what this is, because it defines and creates each instance of our component. That's why we may successfully call things like this.state = {}; in constructor().
      //anytime a method in a class-based component needs to reference this it must be bound.
  }

  handleAddingNewPostToList(newPost) {
    var newNewsFeedList = this.state.newsFeedList.slice();
    newNewsFeedList.push(newPost);
    this.setState({ newsFeedList: newNewsFeedList });
    //update our state define its new value
  }
  //this is the handler for the event of submitting the post
  //because its a class method, it's not bound

  handleAddingNewSearchTerm(newSearch) {
    this.setState({ currentSearchTerm: newSearch });
    console.log(this.state.currentSearchTerm);
  }
   //this is the handler for the event of submitting the search

  render() {
    //Like any other method, we may include logic before the return statement.(NewTicketControl.jsx)
    return (
      <div className="App container">
        <div className="row" >
          <NavBar handleAddingNewSearchTerm={this.handleAddingNewSearchTerm}/>
          {/* A method executed in response to an event is called an event handler. The event is the rendering of the NavBar.
          Here, we're passing the handleTroubleShootingConfirmation() method from App.jsx into NavBar as a prop named handleTroubleShootingConfirmation. */}
        </div>

        <div className="row">
          <div className="col-md-4">
            <NewsFeedControl newsFeedList={this.state.newsFeedList} handleAddingNewPostToList={this.handleAddingNewPostToList}/>
          </div>

          <div className="col-md-8">
            <FriendsList />
          </div>
        </div>
      </div>
    );
  }
}
export default App;