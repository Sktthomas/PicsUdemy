import React from 'react'

class SearchBar extends React.Component {

    //it is community standard to call event handlers this way.
    onInputChange(event) { //We pass the event object gathered from the inputChange event
        
    }

    render() {
        return (
        <div className="ui segment">
            <form className="ui form">
                <div className="field">
                <label>Image Search</label>
                <input type="text"onChange={this.onInputChange}/> {/*You can also use an arrow function instead of calling onInputChange*/}
                </div>
            </form>

        </div>
        )
    }
}

export default SearchBar;