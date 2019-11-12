import React from "react";

function Search(){
    return(
        <div>
            <div className = "row">
            
            <div className = "col-md-8">
            <a href="index.html">Home</a>
            <a href="notifications.html">Notifications</a>
            <a href="messages.html">Messages</a>
            </div>

            <div className = "col-md-4">
            <h3>Search</h3>
            <form id="search">
            <input type="text" name="searchButton" id="newsearch"></input>
            <button type="submit" class="btn btn-info">Submit</button>
            </form>
            </div>

            
            </div>
        </div>
    );
}

export default Search;