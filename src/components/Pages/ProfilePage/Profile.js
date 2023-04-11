
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './Styled';
import LoadingScreen from '../../LoadingScreen';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../../Services/userService';
import Drawer from '../../Drawer';
import Footer from '../../Footer';
import Container from '@mui/material/Container';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
const Profile = (loadUser ) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { userInfo, loading } = useSelector((state) => state.user);
  const color = useSelector((state) => state.user.userInfo.color);
  const name = useSelector((state) => state.user.userInfo.name);
  
  useEffect(() => {
    console.log(loadUser)
    console.log(dispatch)

    getUserData(id, dispatch);
  }, [dispatch, id]);
  
  useEffect(() => {
    document.title = 'Profile | Logo';
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: 'px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <>
    
    <Drawer/>
    <Container>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Avatar sx={{ width: 50, height: 50, bgcolor: color, fontSize: '0.875rem', fontWeight: '800' }}>
              {name[0]}
            </Avatar>
        <br></br>
        <Typography variant="h5" component="div">
        {userInfo.name} {userInfo.surname}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {userInfo.email}
        </Typography>

      </CardContent>
    </Card>

    </Container>
    <Footer/>
    </>

  );
};

export default Profile;


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';
// import { getUser } from "../Utils/userApi";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const loadProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const user = await getUser(id, token);
//         setUser(user);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadProfile();
//   }, [id]);

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getUserProfileFromId } from "../../../Services/userService";
// import { loadSuccess } from '../../../Redux/Slices/userSlice';

// const Profile = () => {
//   const dispatch = useDispatch();
//   const { name, surname, email, loading, avatar } = useSelector((state) => state.user);

//   const { id } = useParams();

//   useEffect(() => {
//     getUserProfileFromId(id, dispatch);
//   }, [dispatch, id]);

//   return (
//     <>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           <h1>{name}</h1>
//           <h1>{surname}</h1>
//           <h1>{email}</h1>
//           <h1>{avatar}</h1>
//         </div>
//       )}
//     </>
//   );
// };

// export default Profile;

// import React, { useEffect, useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as style from './Styled';
// import LoadingScreen from '../../LoadingScreen';
// import { useParams } from 'react-router-dom';
// import { loadUser } from '../../../Services/userService';

// const Profile = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const { userInfo, loading } = useSelector((state) => state.user);
 
//   const loadUserCallback = useCallback(() => {
//     dispatch(loadUser(id));
//   }, [dispatch,id]);

//   useEffect(() => {
    
//     loadUserCallback();
//   }, [loadUserCallback]);
  
//   useEffect(() => {
//     document.title = userInfo.name + ' | Logo';
//   }, [userInfo]);

//   if (loading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <>
//     <h1>surname: {userInfo.surname}</h1>
//     <h1>email: {userInfo.email}</h1>
//     </>
//   );
// };

// export default Profile;




// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import * as style from './Styled';
// import LoadingScreen from '../../LoadingScreen';
// import { useParams } from 'react-router-dom';
// import { getUserProfileFromId } from '../../../Services/userService';


// const Profile = () => {
//   const dispatch = useDispatch();
//   const { name, surname, email, loading } = useSelector((state) => state.user);
//   const { id } = useParams();

//   useEffect(() => {
//     getUserProfileFromId(id, dispatch);
//   }, [dispatch, id]);

//   useEffect(() => {
//     document.title = name + ' | Logo';
//   }, [name]);

//   if (loading) {
//     return <LoadingScreen />;
//   }

//   return (
//     <>
//     <h1>surname: {surname}</h1>
//     <h1>email: {email}</h1>
//     </>
//   );
// };

// export default Profile;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getUserProfileFromId } from "../../../Services/userService";
// import { loadSuccess } from '../../../Redux/Slices/userSlice';

// const Profile = () => {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({});
//   const { id } = useParams();


//   useEffect(() => {
//     const loadProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const user = await getUserProfileFromId(id, token);
//         setUser(user);
//         dispatch(loadSuccess({user}));
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadProfile();
//   }, [dispatch, id]);

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };

// export default Profile;


// import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getUserProfileFromId } from "../../../Services/userService";

// const Profile = () => {
//   const dispatch = useDispatch();
//   const [user, setUser] = useState({});
//   const { id } = useParams();


//   useEffect(() => {
//     const loadProfile = async () => {
//       const token = localStorage.getItem("token");
//       try {
//         const user = await getUserProfileFromId(id, token);
//         setUser(user);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     loadProfile();
//   }, [dispatch, id]);

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };

// export default Profile;

// import Navbar from '../../Navbar';
// import React, { useEffect, useState } from 'react';

// import * as style from './Styled';
// import LoadingScreen from '../../LoadingScreen';
// import { useParams } from 'react-router-dom';

// const UserProfile = () => {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = useState({});
//   const [searchString, setSearchString] = useState('');
//   const { id } = useParams();

//   useEffect(() => {
//     // Replace this with the actual code to fetch user data from a server using fetch or any other library
//     const fetchUserData = async () => {
//       try {
//         const response = await fetch(`/profile`);
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   useEffect(() => {
//     document.title = user.name ? `${user.name} | Logo` : 'User Profile | Logo';
//   }, [user]);

//   return (
//     <>
//       <Navbar searchString={searchString} setSearchString={setSearchString} />

//       <style.Container>
  
//         {loading && <LoadingScreen />}
//         {!loading && (
//           <div>
//             <p>User ID: {user._id}</p>
//             <p>Name: {user.name}</p>
//             <p>Email: {user.email}</p>
//           </div>
//         )}
//       </style.Container>
//     </>
//   );
// };

// export default UserProfile;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { loadUserProfile } from "../../../Services/userService";

// const Profile = () => {
//   const [user, setUser] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     loadUserProfile(id, token)
//       .then((data) => {
//         setUser(data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, [id]);

//   return (
//     <div>
//       <h1>{user.name}</h1>
//     </div>
//   );
// };

// export default Profile;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('http://localhost:3030/user');
//         setUser(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Welcome, {user.name}!</h1>
     
//       <p>Email: {user.email}</p>
     
//     </div>
//   );
// };

// export default Profile;