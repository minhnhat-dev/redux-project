import { createSlice } from '@reduxjs/toolkit';

const initialStatePhoto = {
    photos: []
};

const photoSlice = createSlice({
    name: 'photo',
    initialState: initialStatePhoto,
    reducers: {
        getPhoto: (state) => state.photos,
        addPhoto: (state, action) => {
            state.photos.push(action.payload);
            return state;
        },
        editPhoto: (state, action) => state.photos.push(action.payload),
        deletePhoto: (state, action) => { state.photos.push(action.payload); }
    }
});

export const { getPhoto, addPhoto, editPhoto, deletePhoto } = photoSlice.actions;
export const photoSelector = (state) => state.photo.photos;
export default photoSlice.reducer;
