import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { emptyMeme } from 'orsys-tjs-meme';
import { fetchAllValues } from './memes';
import { store } from './store';

const dbUrl = 'http://localhost:5679';

const initialState = {
    currentMeme: emptyMeme,
}

const meme = createSlice({
  name: 'current',
  initialState,
  reducers: {
    changeMeme: (state,action) => {
        state.currentMeme = action.payload
    },
    clearMeme: (state,action) => {
        state.currentMeme = emptyMeme
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSaveCurrent.fulfilled,(state,action) => {
        state.currentMeme = emptyMeme
    })
    
  }

});

export const fetchSaveCurrent = createAsyncThunk(
    'current/save',
    async (meme) => {
        const respSave = await fetch(dbUrl + '/memes', {
            method: meme.id ? 'PUT' : 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(meme)
        });
        return respSave.json();
})

export const {changeMeme,clearMeme} = meme.actions

export default meme.reducer