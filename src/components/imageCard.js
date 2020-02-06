import React from 'react';

class ImageCard extends React.Component {

    constructor(props){
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef(); //ref reference
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans =() => { //Has to be an arrow function due to line 12 this.setSpans
        const height = this.imageRef.current.clientHeight

        const spans = Math.ceil(height / 10);

        this.setState({ spans })
    }


    render() {
        const {description, urls} = this.props.image //deconstruction, we rip out data from a prop object
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img
                ref = {this.imageRef} //Wiring up of an image ref 
                alt={description}
                src={urls.regular}/>
            </div>
        );
    }
}
export default ImageCard;