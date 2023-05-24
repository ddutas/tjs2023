import React from 'react'
import PropTypes from 'prop-types'
import { MemeSVGViewer } from 'orsys-tjs-meme'
import MemeForm from '../../components/functionnal/MemeForm/MemeForm'
import { useSelector } from 'react-redux';
import StoreMemeForm from '../../components/functionnal/MemeForm/StoreMemeForm';

function MemeEditor(props) {

  const images = useSelector(s => s.listes.images);
  const meme = useSelector(s => s.current.currentMeme);

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
