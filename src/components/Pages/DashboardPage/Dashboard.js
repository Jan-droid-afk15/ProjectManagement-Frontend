import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import LoadingScreen from "../../LoadingScreen";
import { useParams } from "react-router-dom";
import { getUserData } from "../../../Services/userService";
import Drawer from "../../Drawer";
import Footer from "../../Footer";
import Container from "@mui/material/Container";


import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Dashboard = ({ loadUser }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.user);

  useEffect(() => {
    getUserData(id, dispatch);
  }, [dispatch, id]);

  useEffect(() => {
    document.title = "Dashboard | Logo";
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  
  return (
    <>
      <Drawer />
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Card>
            <CardContent sx={{height:"900px"}}>
       
                </CardContent>
          </Card>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Dashboard;
