import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  backgroundImageLink: '',
  isImage: true,
  lists: [],
  members: [],
  activity: [],
  loading: true,
  description: '',
  activityLoading: false,
  unregisteredMembers: [],
};

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    successFetchingBoard: (state, action) => {
      state.id = action.payload._id;
      state.title = action.payload.title;
      state.backgroundImageLink = action.payload.backgroundImageLink;
      state.isImage = action.payload.isImage;
      state.lists = action.payload.lists;
      state.members = action.payload.members;
      state.activity = action.payload.activity;
      state.description = action.payload.description;
      state.unregisteredMembers = action.payload.unregisteredMembers;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    setActivityLoading: (state, action) => {
      state.activityLoading = action.payload;
    },
    updateActivity: (state, action) => {
      state.activity = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateBackground: (state, action) => {
      const { background, isImage } = action.payload;
      state.backgroundImageLink = background;
      state.isImage = isImage;
    },
    addMembers: (state, action) => {
      state.members = action.payload;
    },
	addUnregisteredMembers: (state, action) => {
		state.unregisteredMembers = action.payload;
	  },
	  
  },
});

export const {
  setLoading,
  successFetchingBoard,
  updateTitle,
  setActivityLoading,
  updateActivity,
  updateDescription,
  updateBackground,
  addMembers,
  addUnregisteredMembers,
} = boardSlice.actions;

export default boardSlice.reducer;
