import React from 'react';
import { MemeSVGThumbnail } from 'orsys-tjs-meme';
import { useSelector } from 'react-redux';

const MemeThunbnail = props => {

    const memes = useSelector(s => s.listes.memes);
    const images = useSelector(s => s.listes.images);
    
    return (
        <MemeSVGThumbnail memes={memes} images={images} basePath=''/> 
    );
};

export default MemeThunbnail;