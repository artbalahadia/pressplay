import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component{

    state = { input: '' }

    onInputChange = (event) => {
        this.setState({ input: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onInputSubmit(this.state.input)
    }


    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <input
                            className="text-input"
                            input="text"
                            value={this.state.input}
                            onChange={this.onInputChange}
                            placeholder="Search new videos"
                        />
                    </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;




