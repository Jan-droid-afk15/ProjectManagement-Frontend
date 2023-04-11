
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";

const ProtectedRoute = ({children }) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isAuthenticated && !user.pending) {
      <Navigate to ="/"/>
    }
  }, [user.isAuthenticated, user.pending]);

  if (user.isAuthenticated && !user.pending) {
    return children;
  } else {
    return <LoadingScreen />;
  }
};

export default ProtectedRoute;


// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate, useLocation, Route } from "react-router-dom";
// import LoadingScreen from "./LoadingScreen";

// const ProtectedRoute = ({ path, element: Component }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     if (!user.isAuthenticated && !user.pending) {
//       navigate("/");
//     }
//   }, [navigate, user.isAuthenticated, user.pending]);

//   if (user.isAuthenticated && !user.pending) {
//     return <Route path={path} element={<Component />} />;
//   } else {
//     return <LoadingScreen />;
//   }
// };

// export default ProtectedRoute;



// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { Outlet, Navigate } from "react-router-dom";
// import LoadingScreen from "../components/LoadingScreen";

// const ProtectedRoute = ({ component: Component }) => {
  
//   const user = useSelector((state) => state.user);
  
//   useEffect(() => {
//     if (!user.isAuthenticated && !user.pending) Navigate("/")
//   });

//     if (user.isAuthenticated && !user.pending) {
//       return <Component />;
//     } else return <LoadingScreen />;

//   }
// export default ProtectedRoute;


// import { useSelector } from 'react-redux';
// import { Route, useLocation, Navigate } from 'react-router-dom';
// import LoadingScreen from "../components/LoadingScreen";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const location = useLocation();
//   const user = useSelector((state) => state.user);

//   if (user.pending) {
//     return <LoadingScreen />;
//   }

//   if (!user.isAuthenticated) {
//     return <Navigate to="/" />;
//   }

//   return <Route {...rest} element={<Component />} />;
// };

// export default ProtectedRoute;