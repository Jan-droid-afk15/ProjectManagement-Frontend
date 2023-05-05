import axios from "axios";
import {
  setLoading,
  setEvent,
  updateEventTitle,
  updateEventDescription,
  successCreatingEvent,
  successDeletingEvent,
} from "../Redux/Slices/eventSlice";
import { openAlert } from "../Redux/Slices/alertSlice";
import { listSlice } from "../Redux/Slices/listSlice";
import { cardSlice } from "../Redux/Slices/cardSlice";

const baseUrl = "http://localhost:3030/event";

export const getEvents = async (boardId, dispatch) => {
  dispatch(setLoading(true));
  try {
    const listRes = await axios.get("http://localhost:3030/list/" + boardId);
    dispatch(listSlice.actions.successFetchingLists(listRes.data));

    const cardRes = await axios.get("http://localhost:3030/card/" + boardId);
    dispatch(cardSlice.actions.successFetchingCards(cardRes.data));

    dispatch(setEvent());
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 300);
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};

export const createEvent = async (
  boardId,
  listId,
  cardId,
  dispatch
) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.post(baseUrl + "/create", {
      boardId,
      listId,
      cardId,
    });
    dispatch(successCreatingEvent(res.data));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};

export const updateEvent = async (
  eventId,
  cardId,
  title,
  description,
  startDate,
  endDate,
  dueTime,
  members,
  dispatch
) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.put(baseUrl +`/${cardId}` + `/${eventId}`, {
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate,
      dueTime: dueTime,
      members: members,
    });
    dispatch(updateEventTitle(res.data.title));
    dispatch(updateEventDescription(res.data.description));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};

export const deleteEvent = async (eventId,cardId, dispatch) => {
  dispatch(setLoading(true));
  try {
    await axios.delete(baseUrl + `/${cardId}`  `/${eventId}`);
    dispatch(successDeletingEvent(eventId));
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
          ? error.response.data.errMessage
          : error.message,
        severity: "error",
      })
    );
  }
};
