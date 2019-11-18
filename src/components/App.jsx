import React from "react";
import Search from "./Search";
import NewsFeedControl from "./NewsFeedControl";
import NavBar from './NavBar';
import FriendsList from './FriendsList';
// import { Switch, Route } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
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