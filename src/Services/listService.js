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


const baseUrl = 'http://localhost:3030/card';

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
    // Create a new card with title
    const newCard = await axios.post(baseUrl + '/create', {
      title: title,
      boardId: boardId,
      listId: listId,
    });
    const cardId = newCard.data.id;
    // Create an event for the new card
    const updatedList = await axios.post(baseUrl + `/${boardId}/${listId}/${cardId}/event/create`, {
      title: title,
      eventId: eventId,
    });
    dispatch(
      successCreatingCardEvent({
        listId: listId, 
        updatedList: updatedList.data,
        cardId: cardId,
        eventId: eventId,
      })
    );
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




export const cardDeleteEvent = async(listId, boardId, cardId, eventId, dispatch) => {
  try {
    await dispatch(deleteCardEvent({ listId, cardId, eventId }));
    await axios.delete(baseUrl + "/" + boardId + "/" + listId + "/" + cardId + "/" + eventId + "/delete-event");
  } catch (error) {
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
        severity: 'error',
      })
    );
  }
};



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
