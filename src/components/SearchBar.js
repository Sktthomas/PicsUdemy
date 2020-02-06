import React from 'react'

class SearchBar extends React.Component {

    state= {term: 'Hi there!'};
  /*  //it is community standard to call event handlers this way.
    onInputChange(event) { //We pass the event object gathered from the inputChange event
        
    } */

    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input type="text"
                    value={this.state.term} //by making the value of the input our state, we make it controlled, since we know, via React, what it is.
                    onChange={(e) => this.setState({term: e.target.value}) }/> {/*You can also use an arrow function instead of calling onInputChange*/}
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;