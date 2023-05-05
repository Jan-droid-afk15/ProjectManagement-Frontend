import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
  description: '',
  startDate: '',
  endDate: '',
  dueTime: '',
  members: [],
  card: {},
  completed: false,
  loading: true,
 
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEvent: (state, action) => {
      state.id = action.payload._id;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
      state.dueTime = action.payload.dueTime;
      state.members = action.payload.members;
      state.cards = action.payload.cards;
      state.completed = action.payload.completed;
    },
    updateTitle: (state, action) => {
      state.title = action.payload;
    },
    setActivityLoading: (state, action) => {
      state.activityLoading = action.payload;
    },
    updateMembers: (state, action) => {
      state.members = action.payload;
    },
    updateCards: (state, action) => {
      state.cards = action.payload;
    },
    updateCompleted: (state, action) => {
      state.completed = action.payload;
    },
    updateDescription: (state, action) => {
      state.description = action.payload;
    },
    updateStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    updateEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    updateDueTime: (state, action) => {
      state.dueTime = action.payload;
    },
    successCreatingEvent: (state, action) => {
      state.card.push(action.payload);
    },
    successDeletingEvent: (state, action) => {
      state.card = state.card.filter((card) => card.id !== action.payload.id);
    },
  },
});

export const {
  setLoading,
  setEvent,
  updateTitle,
  setActivityLoading,
  updateMembers,
  updateCards,
  updateCompleted,
  updateDescription,
  updateStartDate,
  updateEndDate,
  updateDueTime,
  successCreatingEvent,
  successDeletingEvent,
} = eventSlice.actions;

export default eventSlice.reducer;
