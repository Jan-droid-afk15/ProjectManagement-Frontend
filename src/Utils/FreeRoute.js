// import { useNavigate, useLocation } from "react-router-dom";

// const FreeRoute = ({ path, isAuthenticated }) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   if (localStorage.getItem("token")) {
//     navigate("/boards", { replace: true });
//     return null;
//   }
//   return path === location.pathname ? isAuthenticated : null;
// };

// export default FreeRoute;


// import { useNavigate, Outlet } from "react-router-dom";

// const FreeRoute = ({ path, isAuthenticated }) => {
//   const navigate = useNavigate();
//   if (localStorage.getItem("token")) {
//     navigate("/boards", { replace: true });
//     return null;
//   }
//   return <Outlet />;
// };

// export default FreeRoute;



// import { useNavigate } from "react-router-dom";

// const FreeRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   if (localStorage.getItem("token")) {
//     navigate("/boards", { replace: true });
//     return null;
//   }
//   return <Component {...rest} />;
// };

// export default FreeRoute;


// import { useNavigate, Route } from "react-router-dom";

// const FreeRoute = ({ component: Component, ...rest }) => {
//   const navigate = useNavigate();
//   if (localStorage.getItem("token")) {
//     navigate("/boards", { replace: true });
//     return null;
//   }
//   return <Route {...rest} element={<Component />} />;
// };

// export default FreeRoute;

import React from "react";
import { Navigate } from "react-router-dom";

export const FreeRoute = ({ children }) => {
  if (localStorage.getItem("token")) return <Navigate to="/boards" />;

  return children
}


export default FreeRoute;


// import React from "react";
// import { Route, Redirect } from "react-router-dom";

// const FreeRoute = ({ component: Component, ...rest }) => {
//   if (localStorage.getItem("token")) return <Redirect push to="/boards" />;
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
