import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';
import { fetchSaveCurrent } from './current';

const dbUrl = 'http://localhost:5679';

const initialState = {
    images: [],
    memes: [],
}

const memes = createSlice({
  name: 'listes',
  initialState,
  reducers: {
    addImage: (state,action) => {
        state.images.push(action.payload)
    },
    addImages: (state,action) => {
        state.images.push(...action.payload)
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchSaveCurrent.fulfilled,(state,action)=>{
        const pos = state.memes.findIndex(meme => meme.id === action.payload.id)
        if(pos >= 0)
        {
          // Modification
          state.memes[pos] = action.payload
        }
        else
        {
          // Ajout
          state.memes.push(action.payload)
        }
    })
    builder.addCase(fetchAllValues.fulfilled,(state,action) => {
        state.images.push(...action.payload.images)
        state.memes.push(...action.payload.memes)
    })
    builder.addDefaultCase((state,action) => console.log(action))
  }
});

export const fetchAllValues = createAsyncThunk(
    'listes/fetchAll',
    async () => {
        const prImage = await fetch(dbUrl + '/images');
        const prMeme = await fetch(dbUrl + '/memes');
        
        const prs = await Promise.all([prImage,prMeme]);
        const imgs= await prs[0].json();
        const memes= await prs[1].json();
        return {images: imgs,memes: memes};
})

export const {addImage,addImages} = memes.actions

export default memes.reducer