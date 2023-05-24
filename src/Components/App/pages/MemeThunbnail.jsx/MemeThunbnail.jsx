import React from 'react';
import PropTypes from 'prop-types';
import { MemeSVGThumbnail } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';

const MemeThunbnail = props => {

    const memes = useSelector(s => s.listes.memes);
    const images = useSelector(s => s.listes.images);
    
    return (
        <MemeSVGThumbnail memes={memes} images={images} basePath=''/> 
    );
};

MemeThunbnail.propTypes = {
    
};

export default MemeThunbnail;