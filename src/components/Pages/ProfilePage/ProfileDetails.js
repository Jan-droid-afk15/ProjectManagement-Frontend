import React from 'react';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const ProfileDetails = () => {
  const { userInfo } = useSelector((state) => state.user);
  const color = useSelector((state) => state.user.userInfo.color);
  const name = useSelector((state) => state.user.userInfo.name);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar
          sx={{
            width: 50,
            height: 50,
            bgcolor: color,
            fontSize: '0.875rem',
            fontWeight: '800',
          }}
        >
          {name[0]}
        </Avatar>
        <br />
        <Typography variant="h5" component="div">
          {userInfo.name} {userInfo.surname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {userInfo.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileDetails;
