import { createSlice, current } from '@reduxjs/toolkit';
import faker from 'faker';

const randomId = Math.trunc(Math.random() * 200);
function getPhotoDefault(params) {

}
const photosDefault = [
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'fashion',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'life',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    },
    {
        id: faker.random.uuid(),
        title: faker.lorem.words(),
        category: 'car',
        photoUrl: `https://picsum.photos/id/${Math.trunc(Math.random() * 100)}/300/300`,
        content: faker.lorem.words()
    }
];

const initialStatePhoto = {
    photos: photosDefault
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
        editPhoto: (state, action) => {
            const { payload: newPhoto } = action;
            const { id: photoId } = newPhoto;
            const index = state.photos.findIndex((photo) => photo.id === photoId);
            state.photos[index] = newPhoto;
        },
        deletePhoto: (state, action) => {
            const { payload: photoId } = action;
            const index = state.photos.findIndex((photo) => photo.id === photoId);
            state.photos.splice(index, 1);
        }
    }
});

export const { getPhoto, addPhoto, editPhoto, deletePhoto } = photoSlice.actions;
export default photoSlice.reducer;
