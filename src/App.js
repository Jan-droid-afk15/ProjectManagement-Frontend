import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";

import "./assets/app.css";

//import pages
import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// import ProjectsIndex from "./pages/project_tracker/Index";
// import ProjectsShow from "./pages/project_tracker/Show";
// import ProjectsCreate from "./pages/project_tracker/Create";
// import ProjectsEdit from "./pages/project_tracker/Edit";

import PageNotFound from "./pages/PageNotFound";

//import components
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);
  let protectedRoutes;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setAuthenticated(true);
    }
  }, []);

  const onAuthenticated = (auth, token) => {
    setAuthenticated(auth);

    if (auth) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  // if (authenticated) {
  //   protectedRoutes = (
  //     <>
  //       <Route path="/projects/:id/edit" element={<ProjectsEdit />} />
  //       <Route path="/projects/:id" element={<ProjectsShow />} />
  //       <Route path="/projects/create" element={<ProjectsCreate />} />
  //     </>
  //   );
  // }
  return (
    <Router>
      <Container>
        <Drawer onAuthenticated={onAuthenticated} authenticated={authenticated}/>

        <Routes>
          <Route path="/" element={<Home authenticated={authenticated} />} />
          <Route
            path="/login"
            element={
              <LoginPage
                onAuthenticated={onAuthenticated}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage
                onAuthenticated={onAuthenticated}
                authenticated={authenticated}
              />
            }
          />
          {/* <Route
            path="/projects"
            element={<ProjectsIndex authenticated={authenticated} />}
          />
          <Route path="*" element={<PageNotFound />} />
          {protectedRoutes} */}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Container>
    
    </Router>
    
  );
};

export default App;
