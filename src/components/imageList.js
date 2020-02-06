import React from 'react';


const imageList = (props) => {
    const images = props.images.map(({description, id, urls}) => { //We deconstruct (take out) these props from the image
        return <img key={id} src={urls.regular} alt={description}/> //every item in a list should have a key, we use the id taken from the API
    }); 

    return <div>{images}</div>
};

export default imageList