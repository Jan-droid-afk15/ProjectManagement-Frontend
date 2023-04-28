import axios from 'axios';
import {
  openAlert
} from '../Redux/Slices/alertSlice';
import {
  setLoading,
  successCreatingCard,
  deleteCard,
  successCreatingCardEvent, 
  deleteCardEvent
} from '../Redux/Slices/listSlice';
import {
  successCreatingEvent,
  successDeletingEvent
} from '../Redux/Slices/eventSlice';

const baseUrl = 'http://localhost:3030/card';
const eventRoute = 'http://localhost:3030/event';
export const createCard = async (title, listId, boardId, dispatch) => {
	dispatch(setLoading(true));
	try {
		const updatedList = await axios.post(baseUrl + '/create', { title: title, listId: listId, boardId: boardId });
		dispatch(successCreatingCard({ listId: listId, updatedList: updatedList.data }));
		dispatch(setLoading(false));
	} catch (error) {
		dispatch(setLoading(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const cardDelete = async(listId,boardId,cardId,dispatch)=>{
	try {
		await dispatch(deleteCard({listId,cardId}));
		await axios.delete(baseUrl + "/"+boardId+"/"+listId + "/" + cardId+ "/delete-card");
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
}


export const createCardEvent = async (title, listId, boardId, eventId, dispatch) => {
  dispatch(setLoading(true));
  try {
    const updatedList = await axios.post(baseUrl + '/create-event', {
      title: title,
      listId: listId,
      boardId: boardId,
      eventId: eventId,
    });
    dispatch(
      successCreatingCardEvent({
        listId: updatedList.data.listId,
        card: updatedList.data.card,
        eventId: eventId,
      })
    );
    dispatch(successCreatingEvent(updatedList.data.event));
  } catch (error) {
    dispatch(openAlert(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

console.log(createCard)
console.log(createCardEvent.successCreatingCardEvent)

export const cardDeleteEvent = (listId, boardId, cardId, eventId) => async (dispatch) => {
  try {
    // Wait for deleteCard to complete before making the API call
    dispatch(deleteCardEvent({ listId, cardId, eventId }));
    await axios.delete(baseUrl + "/" + boardId + "/" + listId + "/" + cardId + "/" + eventId + "/delete-event");

    // Delete the corresponding event from the calendar
    const deletedEvent = {
      id: cardId
    };
    dispatch(successDeletingEvent(deletedEvent));
  } catch (error) {
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
        severity: 'error',
      })
    );
  }
};
console.log(cardDelete)
console.log(cardDeleteEvent.deleteCardEvent)
// import axios from 'axios';
// import {
//   openAlert
// } from '../Redux/Slices/alertSlice';
// import {
//   setLoading,
//   successCreatingCard,
//   deleteCard
// } from '../Redux/Slices/listSlice';
// import {
//   successCreatingEvent
// } from '../Redux/Slices/eventSlice';

// const baseUrl = 'http://localhost:3030/card';

// export const createCard = async (title, listId, boardId, dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const updatedList = await axios.post(baseUrl + '/create', {
//       title: title,
//       listId: listId,
//       boardId: boardId
//     });
//     dispatch(successCreatingCard({
//       listId: listId,
//       updatedList: updatedList.data
//     }));

//     // Add new event to the calendar
//     const newEvent = {
//       id: updatedList.data.cards[updatedList.data.cards.length - 1]._id, // card ID
//       title: updatedList.data.cards[updatedList.data.cards.length - 1].title, // card title
//       start: new Date(), // today's date
//       end: new Date(), // today's date
//       allDay: true // event lasts the entire day
//     };
//     dispatch(successCreatingEvent(newEvent));

//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setLoading(false));
//     dispatch(
//       openAlert({
//         message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
//         severity: 'error',
//       })
//     );
//   }
// };

// export const cardDelete = async(listId,boardId,cardId,dispatch)=>{
// 	try {
// 		await dispatch(deleteCard({listId,cardId}));
// 		await axios.delete(baseUrl + "/"+boardId+"/"+listId + "/" + cardId+ "/delete-card");
// 	} catch (error) {
// 		dispatch(
// 			openAlert({
// 				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
// 				severity: 'error',
// 			})
// 		);
// 	}
// }
