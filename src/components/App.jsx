import React from "react";
import Search from "./Search";
import NewsFeedControl from "./NewsFeedControl";
import NavBar from './NavBar';
// import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newsFeedList: [],
      currentSearchTerm: "",
    };

    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);

    this.handleAddingNewSearchTerm =
      this.handleAddingNewSearchTerm.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    var newNewsFeedList = this.state.newsFeedList.slice();
    newNewsFeedList.push(newPost);
    this.setState({ newsFeedList: newNewsFeedList });
  }

  handleAddingNewSearchTerm(newSearch) {
    this.setState({ currentSearchTerm: newSearch });
    console.log(this.state.currentSearchTerm);
  }

  render() {
    return (
      <div className="App container">
        <div className="row" >
          <NavBar handleAddingNewSearchTerm={this.handleAddingNewSearchTerm}/>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* <NewsFeedControl /> */}
          </div>

          <div className="col-md-8">
            {/* <FriendsList /> */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;