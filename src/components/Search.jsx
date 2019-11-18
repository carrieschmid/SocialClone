import React from "react";
import PropTypes from 'prop-types';

function Search(props) {
    let _currentSearchTerm = null;
    function onNewSearchFormSubmission(event){
        event.preventDefault();
        props.onSearchCreation({currentSearchTerm: _currentSearchTerm.value});
    }

    return (
        <div className="col-md-4">
            <h3>Search</h3>
            <form onSubmit={onNewSearchFormSubmission}>
                <input type ="text"
                id="currentSearchTerm"
                placeholder ='Search'
                ref ={(input) => {_currentSearchTerm = input;}}/>
                <button type="submit" className="btn btn-info">Submit</button>
            </form>
        </div>
    );
}

Search.propTypes = { 
    onSearchCreation : PropTypes.func
}
export default Search;