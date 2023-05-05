import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUserDetails = createAsyncThunk(
  "user/updateUserDetails",
  async ({ id, name, surname, email, password }, thunkAPI) => {
    try {
      const response = await updateUser(id, { name, surname, email, password });
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  userInfo: null,
  userId: null, 
  isAuthenticated: null,
  pending: true,
  loading: false,
  token: localStorage.getItem("token"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    registrationStart: (state) => {
      state.pending = true;
    },
    registrationEnd: (state) => {
      state.pending = false;
    },
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      state.token = action.payload.user.token;
      localStorage.setItem("token", action.payload.user.token);
      state.userId = action.payload.user._id; 
    },
    loginFailure: (state) => {
      state.pending = false;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
    loadStart: (state) => {
      state.pending = true;
    },
    loadSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.user;
      state.token = localStorage.getItem("token");
      state.pending = false;
    },
    loadFailure: (state) => {
      state.pending = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    fetchingStart: (state)=>{
      state.loading = true;
    },
    fetchingFinish: (state) => {
      state.loading = false;
    },
    addNewBoard: (state,action) => {
      state.userInfo.boards.unshift(action.payload);
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    }
  },
  extraReducers: {
    [updateUserDetails.pending]: (state) => {
      state.loading = true;
    },
    [updateUserDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    [updateUserDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setLoading,
  successFetchingUser,
  registrationStart,
  registrationEnd,
  loginStart,
  loginFailure,
  loginSuccess,
  loadStart,
  loadSuccess,
  loadFailure,
  logout,
  fetchingStart,
  fetchingFinish,
  addNewBoard,
  updateUser
} = userSlice.actions;
export default userSlice.reducer;
