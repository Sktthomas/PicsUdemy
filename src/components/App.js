import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class App extends React.Component {

    state = { images: [] }; //expects image state to be an array, therefore initialize it as such

    onSearchSubmit = async (term) => { //Sends an AJAX request to Unsplashed to retrieve photos based on our term object. Use async to make it asynchronous
        const response = await unsplash.get('/search/photos', { //use await keyword in front of async request, and assign it to an object
            params: { query: term },
           
            
        });

        this.setState({ images: response.data.results})
    }

    render() {
    return (
    <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/> {/* Run the onSearchSubmit function when onSubmit is run */}
        <ImageList images = {this.state.images}/>
    </div>
    );
}
}

export default App;