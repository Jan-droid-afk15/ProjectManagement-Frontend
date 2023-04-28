import axios from "axios";
import {
  registrationStart,
  registrationEnd,
  loginStart,
  loginFailure,
  loginSuccess,
  loadSuccess,
  loadFailure,
  loadStart,
  fetchingStart,
  fetchingFinish,
} from "../Redux/Slices/userSlice";
import { setLoading, successFetchingUser,} from "../Redux/Slices/userSlice";
import { openAlert } from "../Redux/Slices/alertSlice";
import setBearer from "../Utils/setBearer";

const baseUrl = "http://localhost:3030/user/";


export const register = async (
  { name, surname, email, password, repassword },
  dispatch
) => {
  dispatch(registrationStart());
  if (password !== repassword) {
    dispatch(
      openAlert({
        message: "Your passwords does not match!",
        severity: "error",
      })
    );
  } else {
    try {
      const res = await axios.post(`${baseUrl}register`, {
        name,
        surname,
        email,
        password,
      });
      dispatch(
        openAlert({
          message: res.data.message,
          severity: "success",
          nextRoute: "/login",
          duration: 1500,
        })
      );
    } catch (error) {
      dispatch(
        openAlert({
          message: error?.response?.data?.errMessage
            ? error.response.data.errMessage
            : error.message,
          severity: "error",
        })
      );
    }
  }
  dispatch(registrationEnd());
};

export const login = async ({ email, password }, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(baseUrl + "login", { email, password });
    const { user, message } = res.data;
    localStorage.setItem("token", user.token);
    setBearer(user.token);
      dispatch(loginSuccess({ user }));
    dispatch(
      openAlert({
        message,
        severity: "success",
        duration: 10,
        nextRoute: "/boards",
      })
    );
  } catch (error) {
    dispatch(loginFailure());
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

export const loadUser = async (dispatch) => {
  dispatch(loadStart());
  if (!localStorage.token) return dispatch(loadFailure());
  setBearer(localStorage.token);
  try {
    const res = await axios.get(baseUrl + "get-user");
    dispatch(loadSuccess({ user: res.data }));
  } catch (error) {
    dispatch(loadFailure());
  }
};

export const getUserData = async (userId,dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.get(baseUrl + "get-user/" + userId);
      dispatch(loadSuccess({user: res.data}));    
    setTimeout(() => {
      dispatch(setLoading(false));      
    }, 1000);
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




export const getUserFromEmail = async (email, dispatch) => {

  dispatch(fetchingStart());
  if (!email) {
    dispatch(
      openAlert({
        message: "Please write an email to invite",
        severity: "warning",
      })
      );
      dispatch(fetchingFinish());
      return null;
    }
    
  try {
    const res = await axios.post(baseUrl + "get-user-with-email", { email });
    dispatch(fetchingFinish());
    return res.data;
    
  } catch (error) {
    dispatch(
      openAlert({
        message: error?.response?.data?.errMessage
        ? error.response.data.errMessage
        : error.message,
        severity: "error",
      })
      );
     dispatch(fetchingFinish());
     return null;
  }

};
export const updateUser = async (data, dispatch) => {
  dispatch(setLoading(true));
  try {
    const res = await axios.put(baseUrl + "update-user", data);
    dispatch(loadSuccess({ user: res.data }));
    dispatch(
      openAlert({
        message: "User profile updated successfully",
        severity: "success",
      })
    );
  } catch (error) {
    dispatch(
      openAlert({
        message: error?.response
?.data?.errMessage
? error.response.data.errMessage
: error.message,
severity: "error",
})
);
}
dispatch(setLoading(false));
};

// export const getUserProfile = async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await axios.get(profileRoute + "/me");
//     dispatch(successFetchingUser({ user: res.data }));
//   } catch (error) {
//     dispatch(
//       openAlert({
//         message: error?.response?.data?.errMessage
//           ? error.response.data.errMessage
//           : error.message,
//         severity: "error",
//       })
//     );
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// export const getUserProfile = async (userId, dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await axios.get(profileRoute + "/" + userId);
//     dispatch(successFetchingUser({ user: res.data }));
//   } catch (error) {
//     dispatch(
//       openAlert({
//         message: error?.response?.data?.errMessage
//           ? error.response.data.errMessage
//           : error.message,
//         severity: "error",
//       })
//     );
//   } finally {
//     dispatch(setLoading(false));
//   }
// };


// export const getUserProfileFromId = async (userId,dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await axios.get(profileRoute + "/" + userId);
//     dispatch(successFetchingUser({ users: res.data}));
//     setTimeout(() => {
//       dispatch(setLoading(false));
//     }, 1000);
//   } catch (error) {
//     dispatch(setLoading(false));
//     dispatch(
//       openAlert({
//         message: error?.response?.data?.errMessage
//           ? error.response.data.errMessage
//           : error.message,
//         severity: "error",
//       })
//     );
//   }
// };
// export const getUserData = async (userId, dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const res = await axios.get(userDataRoute + '/' + userId);
//     dispatch(successFetchingUserData(res.data));
//     setTimeout(() => {
//       dispatch(setLoading(false));
//     }, 300);
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


// export const getUserProfile = async (userId) => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       return null;
//     }
//     const res = await axios.get(baseUrl + `profile/${userId}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };


// export const getUserProfile = async (id) => {
//   try {
//     const res = await axios.get(baseUrl +  `profile/${id}`);
//     return res.data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
