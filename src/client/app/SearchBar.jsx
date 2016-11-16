import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {searchKey : 0};
	    this.searchHandler = this.searchHandler.bind(this);
  	}

    searchHandler(event) {
        var searchKey = event.target.value;
        this.setState({searchKey: searchKey});
        this.props.searchHandler(searchKey);
    }

	render() {
        return (
            <input type="search" value={this.state.symbol} onChange={this.searchHandler} placeholder={this.props.findMethod} />
        );
  	}
}

export default SearchBar;