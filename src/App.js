import React, { useEffect } from "react";
import Index from "./components/Pages/IndexPage/Index";
import Login from "./components/Pages/LoginPage/Login";
import Register from "./components/Pages/RegisterPage/Register";
import Alert from "./components/AlertSnackBar";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Boards from "./components/Pages/BoardsPage/Boards";
import ProtectedRoute from "./Utils/ProtectedRoute";
import { loadUser } from "./Services/userService";
import Store from "./Redux/Store";
import FreeRoute from "./Utils/FreeRoute";
import Board from "./components/Pages/BoardPage/Board";
import Profile from "./components/Pages/ProfilePage/Profile";
import Calendar from "./components/Calendar";
import Dashboard from "./components/Pages/DashboardPage/Dashboard";
import NotFoundPage from "./components/Pages/NotFoundPage";

const App = () => {
  useEffect(() => {
    loadUser(Store.dispatch);
  }, []);

  const ProtectedCalendar = () => (
    <ProtectedRoute>
      <Calendar />
    </ProtectedRoute>
  );

  const ProtectedProfile = () => (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );

  const ProtectedBoards = () => (
    <ProtectedRoute>
      <Boards />
    </ProtectedRoute>
  );

  const ProtectedDashboard = () => (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
  
  const ProtectedBoard = () => (
    <ProtectedRoute>
      <Board />
    </ProtectedRoute>
  );

  return (
    <BrowserRouter>
      <Alert />
      <Routes>
        <Route path="/" element={<FreeRoute> <Index/> </FreeRoute>} />
        <Route path="/calendar" element={<ProtectedCalendar />} loadUser={loadUser}/>
        <Route path="/get-user/:id" element={<ProtectedProfile loadUser={loadUser} />} />
        <Route path="/dashboard" element={<ProtectedDashboard loadUser={loadUser} />} />
        <Route path="/boards" element={<ProtectedBoards />} />
        <Route path="/board/:id" element={<ProtectedBoard />}  />
        <Route path="/login" element={<FreeRoute> <Login/> </FreeRoute>} />
        <Route path="/register" element={<FreeRoute> <Register/> </FreeRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React, { useEffect } from "react";
// import Index from "./components/Pages/IndexPage/Index";
// import Login from "./components/Pages/LoginPage/Login";
// import Register from "./components/Pages/RegisterPage/Register";
// import Alert from "./components/AlertSnackBar";
// import { BrowserRouter,Route, Routes } from "react-router-dom";
// import Boards from "./components/Pages/BoardsPage/Boards";
// import ProtectedRoute from "./Utils/ProtectedRoute";
// import { loadUser } from "./Services/userService";
// import Store from "./Redux/Store";
// import FreeRoute from "./Utils/FreeRoute";
// import Board from "./components/Pages/BoardPage/Board";
// import Profile from "./components/Pages/ProfilePage/Profile";
// import Calendar from "./components/Calendar";
// import NotFoundPage from "./components/Pages/NotFoundPage";

// const App = () => {
//   useEffect(() => {
//     loadUser(Store.dispatch);
//   }, []);
//   return (
//     <BrowserRouter>
//       <Alert />
//       <Routes>

//       <Route path="/" element={<FreeRoute> <Index/> </FreeRoute>} />
//       <Route path="/calendar" element={<ProtectedRoute> <Calendar/> </ProtectedRoute>} />
//       <Route path="/profile/:id" element={<ProtectedRoute> <Profile/> </ProtectedRoute>} />
//       <Route path="/boards" element={<ProtectedRoute> <Boards/> </ProtectedRoute>} />
//       <Route path="/board/:id" element={<ProtectedRoute> <Board/> </ProtectedRoute>}  />
//        <Route path="/login" element={<FreeRoute> <Login/> </FreeRoute>} />
//        <Route path="/register" element={<FreeRoute> <Register/> </FreeRoute>} />
//        <Route path="*" element={<NotFoundPage />} />
 
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import LoadingScreen from "../components/LoadingScreen";

// const ProtectedRoute = () => {
//   const location = useLocation();
 
//   const user = useSelector((state) => state.user);
//   useEffect(() => {
//     if (!user.isAuthenticated && !user.pending) navigate("/");
//   });

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (user.isAuthenticated && !user.pending) {
//           return <Component {...props} />;
//         } else return <LoadingScreen />;
//       }}
//     />
//   );
// };

// export default ProtectedRoute;



// import React from "react";
// import { Route, Navigate } from "react-router-dom";

// const FreeRoute = ({ component: Component, ...rest }) => {
//   if (localStorage.getItem("token")) return <Navigate push to="/boards" />;
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         return <Component {...props} />;
//       }}
//     />
//   );
// };

// export default FreeRoute;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Container from "@mui/material/Container";
// import { Provider } from 'react-redux';
// import store from './store';
// import "./assets/app.css";

// //import pages
// import Landing from "./components/pages/LandingPage";

// import LoginPage from "./components/pages/LoginPage";
// import RegisterPage from "./components/pages/RegisterPage";

// import Board from "./components/pages/Board";
// import Alert from './components/other/Alert';



// import PageNotFound from "./components/pages/PageNotFound";

// //import components



// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';


// import Footer from "./components/Footer";
// import Dashboard from "./components/pages/Dashboard";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

// const App = () => {
//   useEffect(() => {
//     store.dispatch(loadUser());
//   }, []);

//   return (
//     <Provider store={store}>
//     <Router>
//     <>
//     <Alert />
       

//         <Routes>
//           <Route path="/" element={<Landing />} />
          
//           <Route
//             path="/login"
//             element={
//               <LoginPage
            
//               />
//             }
//           />
//           <Route
//             path="/board/:id"
//             element={
//               <Board
           
//               />
//             }
//           />
//            <Route
//             path="/register"
//             element={
//               <RegisterPage
               
//               />
//             }
//             /> 
//             <Route
//             path="/dashboard"
//             element={
//               <Dashboard
               
//               />
//             }
//           />
          
//           {/* <Route
//             path="/projects"
//             element={<ProjectsIndex authenticated={authenticated} />}
//           />
//           <Route path="*" element={<PageNotFound />} />
//           {protectedRoutes} */}

//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//         <Footer />
   
//         </>
//     </Router>
//     </Provider>
//   );
// };

// export default App;
