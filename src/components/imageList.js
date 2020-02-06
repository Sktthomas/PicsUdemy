import './imageList.css';
import React from 'react';
import ImageCard from './imageCard'



const imageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/> //every item in a list should have a key, we use the id taken from the API
    }); 

    return <div className="image-list">{images}</div>
};

export default imageList