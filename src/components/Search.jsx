import React from "react";

function Search() {
    return (
        <div className="col-md-4">
            <h3>Search</h3>
            <form id="search">
                <input type="text" name="searchButton" id="newsearch"></input>
                <button type="submit" class="btn btn-info">Submit</button>
            </form>
        </div>
    );
}

export default Search;