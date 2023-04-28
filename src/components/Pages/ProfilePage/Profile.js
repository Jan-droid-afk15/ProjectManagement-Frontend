import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingScreen from "../../LoadingScreen";
import Drawer from "../../Drawer";
import Footer from "../../Footer";
import Container from "@mui/material/Container";
import ProfileDetails from "./ProfileDetails";
import ProfileForm from "./ProfileForm";
import Grid from "@mui/material/Grid"

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { userInfo, loading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({ type: "LOAD_USER_REQUEST" });
    const fetchUser = async () => {
      try {
        const user = await loadUser(id);
        dispatch({ type: "LOAD_USER_SUCCESS", payload: user });
      } catch (error) {
        dispatch({ type: "LOAD_USER_FAILURE", payload: error.message });
      }
    };
    fetchUser();
  }, [dispatch, id]);

  if (loading) {
    return <LoadingScreen />;
  }
  function loadUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = {
          id: id,
          name: "John",
          surname: "Doe",
          email: "johndoe@example.com",
          color: "#3f51b5",
        };
        resolve(user);
      }, 1000);
    });
  }
  
  return (
    <>
      <Drawer id={id} />
      <Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <ProfileDetails userInfo={userInfo} />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ProfileForm id={id} userInfo={userInfo} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
      
    </>
  );
  
};

export default Profile;

