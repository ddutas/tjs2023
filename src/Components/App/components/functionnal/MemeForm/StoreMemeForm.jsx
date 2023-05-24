import React from 'react'
import MemeForm from './MemeForm'
import { useDispatch, useSelector } from 'react-redux'
import { changeMeme, clearMeme, fetchSaveCurrent } from '../../../store/current';
import { store } from '../../../store/store';

function StoreMemeForm() {

    const fnStoreDispatch= useDispatch();
    const images = useSelector(s=>s.listes.images)
    const currentMeme = useSelector(s=>s.current.currentMeme)
    console.log(store.getState());
    const onMemeChange=(meme)=>{
        fnStoreDispatch(changeMeme(meme))
    }
    const onSave=(meme)=>{
        fnStoreDispatch(fetchSaveCurrent(meme))
    }
    const onClear=(meme)=>{
        fnStoreDispatch(clearMeme(meme))
    }

  return (
    <MemeForm images={images} meme={currentMeme} onMemeChange={onMemeChange} onSave={onSave} onClear={onClear}/>
  )
}



export default StoreMemeForm
