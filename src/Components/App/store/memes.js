import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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