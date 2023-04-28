import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUser } from '../../../Services/userService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ProfileForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [nameValue, setNameValue] = useState('');
  const [surnameValue, setSurnameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, { name: nameValue, surname: surnameValue, email: emailValue, password: passwordValue });
      alert('User updated successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          Update User Details
        </Typography>
        <br></br>
        <form onSubmit={handleSubmit}>
          <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
            <TextField
              required
              id="name"
              label="Name"
              onChange={(e) => setNameValue(e.target.value)}
            />
            <TextField
              required
              id="surname"
              label="Surname"
              onChange={(e) => setSurnameValue(e.target.value)}
            />
            <TextField
              required
              id="email"
              label="Email"
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <TextField
              required
              id="password"
              type="password"
              label="Password"
              onChange={(e) => setPasswordValue(e.target.value)}
            />
          </Box>
          <br></br>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
