import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import { useSelector } from 'react-redux';
import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';
import { useNavigate } from 'react-router-dom';


function MemeEditor(props) {

  const images = useSelector(s => s.listes.images);
  const meme = useSelector(s => s.current.currentMeme);
  const memes = useSelector(s => s.listes.memes);

  
  useEffect((props) => {
   
  }, [memes])

  return (
    <>
        <MemeSVGViewer meme={meme} image={images.find((img)=>img.id === meme.imageId)} basePath='' />
        <StoreMemeForm/> 
    </>
  )
}

MemeEditor.propTypes = {
    id: PropTypes.number
}

export default MemeEditor
