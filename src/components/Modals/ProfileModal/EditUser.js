import React, { useState } from "react";
import {
  Modal,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Services/userService";

const EditUser = ({ user }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(user.id, {
        name,
        surname,
        email,
        password,
      });
      dispatch({
        type: "UPDATE_USER_SUCCESS",
        payload: { name, surname, email },
      });
      handleClose();
    } catch (error) {
      dispatch({ type: "UPDATE_USER_FAILURE", payload: error.message });
    }
  };

  return (
    <>
      <Card sx={{ minWidth: 300 }}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {user.name} {user.surname}
          </Typography>
          <Typography sx={{ mt: 1 }} color="text.secondary">
            {user.email}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleOpen}>
            Edit Profile
          </Button>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Card sx={{ width: 400, p: 3 }}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Edit Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="New Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button onClick={handleSubmit}type="submit" variant="contained">
              Save Changes
            </Button>
          </form>
        </Card>
      </Modal>
    </>
  );
};

export default EditUser;
