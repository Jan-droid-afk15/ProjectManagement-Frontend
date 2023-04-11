import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cardId: '',
	title: '',
	labels: [],
	members: [],
	description: '',
	date: {
		startDate: null,
		dueDate: null,
		dueTime: null,
		completed: false,
	},
    eventId:'',
	pending: false,
};

const cardsSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		reset: (state) => initialState,
		setPending: (state, action) => {
			state.pending = action.payload;
		},
		setCard: (state, action) => {
			state.cardId = action.payload._id;
			state.title = action.payload.title;
			state.labels = action.payload.labels;
			state.members = action.payload.members;
			state.watchers = action.payload.watchers;
			state.activities = action.payload.activities;
			state.owner = action.payload.owner;
			state.listTitle = action.payload.listTitle;
			state.listId = action.payload.listId;
			state.boardId = action.payload.boardId;
			state.description = action.payload.description;
			state.checklists = action.payload.checklists;
			state.date = action.payload.date;
			state.attachments = action.payload.attachments;
			state.cover = action.payload.cover;
		},
		updateTitle: (state, action) => {
			state.title = action.payload;
		},
		updateDescription: (state, action) => {
			state.description = action.payload;
		},
        updateStartDueDates: (state, action) => {
			const { startDate, dueDate, dueTime } = action.payload;
			state.date.startDate = startDate;
			state.date.dueDate = dueDate;
			state.date.dueTime = dueTime;
			if (dueDate === null) state.date.completed = false;
		},
		updateDateCompleted: (state, action) => {
			state.date.completed = action.payload;
		},

	},
});

export const {
	reset,
	setPending,
	setCard,
	updateTitle,
	updateDescription,
	addComment,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
	createLabel,
	updateLabel,
	deleteLabel,
	updateLabelSelection,
	updateCreatedLabelId,
	createChecklist,
	updateCreatedChecklist,
	deleteChecklist,
	addChecklistItem,
	updateAddedChecklistItemId,
	setChecklistItemCompleted,
	setChecklistItemText,
	deleteChecklistItem,
	updateStartDueDates,
	updateDateCompleted,
	addAttachment,
	updateAddedAttachmentId,
	deleteAttachment,
	updateAttachment,
	updateCover,
} = cardsSlice.actions;
export default cardsSlice.reducer;
