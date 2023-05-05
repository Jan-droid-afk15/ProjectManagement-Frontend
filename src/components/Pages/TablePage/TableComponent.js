import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBoard } from "../../../Services/boardsService";
import { getBoards } from "../../../Services/boardsService";
import { getLists } from "../../../Services/boardService";
import { useParams } from "react-router-dom";
import Drawer from "../../Drawer";
import Footer from "../../Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import MenuItem from "@mui/material/MenuItem";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LoadingScreen from "../../LoadingScreen";
import { Grid, Paper } from "@mui/material";

const TableComponent = () => {
  const { pending, boardsData, } = useSelector((state) => state.boards);

  const { allLists, loadingListService } = useSelector((state) => state.list);
  const loading = useSelector((state) => state.board.loading || !allLists);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {

    getBoards(id, dispatch);
    getBoard(id, dispatch);
    getLists(id, dispatch)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, [dispatch, id]);
  console.log(boardsData);
  console.log(allLists);
  useEffect(() => {
    document.title = "Dashboard | Logo";
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Drawer />

      {loading && <LoadingScreen />}
      <Box sx={{ flexGrow: 1 }}>
        <br></br>
        <Grid item xs={12} sm={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                Choose a board
              </Typography>
              <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="select-board-label">Select Board</InputLabel>
                <Select
                  labelId="select-board-label"
                  id="select-board"
                  value={id}
                  onChange={(event) => {
                    window.location.replace(`/dashboard/${event.target.value}`);
                  }}
                >
                  {boardsData && Array.isArray(boardsData) ? (
                    boardsData.map((board) => (
                      <MenuItem key={board._id} value={board._id}>
                        {board.title}
                      </MenuItem>
                    ))
                  ) : (
                    <MenuItem value="">
                      <em>No Boards</em>
                    </MenuItem>
                  )}
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </Grid>

        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                  <TableCell>Background</TableCell>
                    <TableCell>Board Title</TableCell>
                    <TableCell align="right">Number of Boards</TableCell>
                    <TableCell align="right">Number of Members</TableCell>
                    <TableCell align="right">Member Name</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {boardsData && Array.isArray(boardsData) ? (
                    boardsData.map((board) => (
                      <TableRow key={board._id}>
                        <TableCell component="th" scope="row">
                          <img
                            src={board.backgroundImageLink}
                            alt="Board background"
                            width="100"
                          />
                        </TableCell>
                        <TableCell component="th" scope="row">
                          {board.title}
                        </TableCell>
                        <TableCell align="right">
                          {board.boards?.length ?? 0}
                        </TableCell>

                        <TableCell align="right">
                          {board.members?.length ?? 0}
                        </TableCell>
                        <TableCell align="right">
                          {board.members
                            ? board.members
                                .map((member) => member.name)
                                .join(", ")
                            : "No members"}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    
                    <TableRow>
                      <TableCell colSpan={3}>No Data</TableCell>
                    </TableRow>
                    
                  )}
                  
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
         
        
          <Grid item xs={12} sm={6}>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>List Title</TableCell>
                    <TableCell align="right">Number Cards in a List</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allLists && Array.isArray(allLists) ? (
                    allLists.map((list) => (
                      <TableRow key={list._id}>
                        <TableCell component="th" scope="row">
                          {list.title}
                        </TableCell>
                        <TableCell align="right">
                          {list.cards?.length ?? 0}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={2}>No Data</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TableComponent;




// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBoard } from "../../Services/boardsService";
// import { useParams } from "react-router-dom";
// import Drawer from "../Drawer";
// import Footer from "../Footer";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import MenuItem from "@mui/material/MenuItem";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import LoadingScreen from "../LoadingScreen";
// import { Grid, Paper } from "@mui/material";

// const TableComponent = () => {
//   const { backgroundImageLink, isImage, loading, title} = useSelector((state) => state.board);
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const board = useSelector((state) => state.board);
//   useEffect(() => {
//     getBoard(id, dispatch);
//   }, [dispatch, id]);

//   useEffect(() => {
//     document.title = "Dashboard | Logo";
//   }, []);

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Drawer />

//       {loading && <LoadingScreen />}
//       <Box sx={{ flexGrow: 1 }}>
//         <br></br>
//         <Grid item xs={12} sm={12}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" component="h2">
//                 Board: {board.title}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         <br></br>
//         <Grid container spacing={2}>
//           <Grid item lg={12}>
//             <TableContainer component={Paper}>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Background</TableCell>
//                     <TableCell>Board Title</TableCell>
//                     <TableCell align="right">Number of Lists</TableCell>
//                     <TableCell align="right">Number of Members</TableCell>
//                     <TableCell align="right">Member Name</TableCell>
//                   </TableRow>
                  
//                 </TableHead>
                
//                 <TableBody>
//                   <TableRow key={board._id}>
//                     <TableCell component="th" scope="row">
//                       <img
//                         src={board.backgroundImageLink}
//                         alt="Board background"
//                         width="100"
//                       />
//                     </TableCell>
//                     <TableCell component="th" scope="row">
//                       {board.title}
//                     </TableCell>
//                     <TableCell align="right">
//                       {board.lists?.length ?? 0}
//                     </TableCell>
//                     <TableCell align="right">
//                       {board.members?.length ?? 0}
//                     </TableCell>
//                     <TableCell align="right">
//                       {board.members
//                         ? board.members
//                             .map((member) => member.name)
//                             .join(", ")
//                         : "No members"}
//                     </TableCell>
//                   </TableRow>
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </Grid>
        
// </Grid>
// </Box>
// <Footer />
// </Container>
// );
// };

// export default TableComponent;