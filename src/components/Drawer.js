import * as React  from "react";
import { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//Icons
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import LoginIcon from "@mui/icons-material/Login";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import CreateIcon from "@mui/icons-material/Create";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import TableViewIcon from '@mui/icons-material/TableView';

//List For Drawer
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";


import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Container } from "@mui/system";
import { logout } from '../Redux/Slices/userSlice';
import { reset } from '../Redux/Slices/boardsSlice';
import { useParams } from 'react-router-dom';
import { getUserData } from '../Services/userService';
const drawerWidth = 185;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),

}));

export default function MiniDrawer(props) {
  const {id} = useParams();
  
  console.log(id)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadUser } = props;

  const handleLogout = () => {
    dispatch(reset());
    dispatch(logout());
    navigate("/");
  };
  

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   console.log(loadUser)
  //   console.log(dispatch)

  //   getUserData(_id, dispatch);
  // }, [dispatch,_id]);



  
  const itemsList = [
    {
      text: "Login",
      icon: (
        <LoginIcon
          sx={{
            ml: -0.6,
          }}
          style={{
            fill: "white",
          }}
        />
      ),
      to: "/login",
    },
    {
      text: "Register",
      icon: (
        <GroupAddIcon
          sx={{
            mr: -0.5,
          }}
          style={{ fill: "white" }}
        />
      ),
      to: "/register",
    },
  ];

  const itemsList2 = [
    
    {
      text: "Home",
      icon: <HomeIcon style={{ fill: "white" }} />,
      to: "/",
    },
    {
      text: "Profile",
      icon: <PersonIcon style={{ fill: "white" }} />,
      to: `/get-user/${id}`
    },
    {
      text: "Dashboard",
      icon: <DashboardIcon style={{ fill: "white" }} />,
      to: `/dashboard/${id}`,
    },
    {
      text: "Calendar",
      icon: <CalendarMonthIcon style={{ fill: "white" }} />,
      to: `/calendar/${id}`,
    },
    {
      text: "Table",
      icon: <TableViewIcon style={{ fill: "white" }} />,
      to: `/table/${id}`,
    },
  ];

  return (
    <Container>
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
      style={{backgroundColor:"transparent" , boxShadow: 'none'}}  
      open={open}
      >
      </AppBar>
        <Toolbar >
    
          <IconButton
            color="white"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mb:2,    
              ml:-19,
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
     
           
          </IconButton>
          


          {/* Account Icon Disappears if logged out, checks if user is logged in then appears */}

        </Toolbar>
  
      
      <Drawer variant="permanent" open={open}
        PaperProps={{
            style: {
            backgroundColor: "#1E1D1D",
            color:"white"
            },
        }}
     >
        <DrawerHeader style={{backgroundColor: "#1E1D1D"}} >
          <Typography sx={{ mr: 1.5}}>
            <NetworkCheckIcon sx={{ mr: 0.2 }} />
           KanbanGo
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={{color:"white"}}/>
            ) : (
              <ChevronLeftIcon style={{color:"white" }} sx={{mr:1}}/>
            )}
          </IconButton>
        </DrawerHeader>
        <Divider  />
        <List >
          <Typography
            sx={{
              margin: 0.5,
              padding: 2.4,
              opacity: open ? 1 : 0,
            }}
          >
            Authentication
          </Typography>
          {itemsList.map((item, index) => {
            const { text, icon } = item;
            return (
              <ListItem
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                component={Link}
                to={item.to}
                button
                key={text}
              >
                {icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  sx={{ opacity: open ? 1 : 0 }}
                  primary={text}
                  style={{ color: "white" }}
                />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List >
          <Typography
            sx={{
              padding: 2.4,
              opacity: open ? 1 : 0,
            }}
          >
            Application
          </Typography>
          {itemsList2.map((item, ) => {
            const { text, icon } = item;
            return (
              <ListItem
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                component={Link}
                to={item.to}
                button
                key={text}
              >
                {icon && (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                )}
                <ListItemText
                  sx={{
                  ml:-1, 
                  opacity: open ? 1 : 0 }}
                  primary={text}
                  style={{ color: "white" }}
                />
                
              </ListItem>
             
            );
          })}
       
          <br></br>
          <IconButton
              onClick={handleLogout}
              
              sx={{ml:1.5, color:"white",}}
              >
                <LogoutIcon/>
                <Typography
            sx={{
              padding: 2.4,
              opacity: open ? 1 : 0,
            }}
          >
            Logout
          </Typography>
              </IconButton>
        </List>
      </Drawer>
    </Box>
    </Container>
  );
}

