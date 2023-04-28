import React, { useEffect, useState } from "react";
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
import LoadingScreen from "../../LoadingScreen";
import { Doughnut, Bar, Line, Pie, PolarArea, Bubble } from "react-chartjs-2";
import { Grid, Paper } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from "chart.js";

const Dashboard = () => {
  const { pending, boardsData } = useSelector((state) => state.boards);

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

  useEffect(() => {
    document.title = "Dashboard | Logo";
  }, []);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    RadialLinearScale,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ArcElement
  );
  const [card1ChartType, setCard1ChartType] = useState("bar");
  const [card2ChartType, setCard2ChartType] = useState("doughnut");
  const [card3ChartType, setCard3ChartType] = useState("line");

const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
      responsive: true,
    },
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Doughnut Chart",
      },
    },
  };

  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      responsive: true,
    },
  };


  const options4 = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };
  
 const options5 = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
   const options6 = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const options7 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const options8 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const boardsChartData = {
    labels:
      boardsData && Array.isArray(boardsData)
        ? boardsData.map((board) => board.title)
        : [],
    datasets: [
      {
        label: "Number of Boards",
        data:
          boardsData && Array.isArray(boardsData)
            ? boardsData.map((board) => board._id.length > 0)
            : [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Number of Members",
        data:
          boardsData && Array.isArray(boardsData)
            ? boardsData.map((board) => board.members?.length ?? 0)
            : [],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  console.log("boardsData:", boardsData);
  console.log("allLists:", allLists);

  // console.log(boardsChartData)
  const cardChartData = {
    labels:
      allLists && Array.isArray(allLists)
        ? allLists.map((list) => list.title)
        : [],
    datasets: [
      {
        label: "Number of Cards",
        data:
          allLists && Array.isArray(allLists)
            ? allLists.map((list) => list.cards?.length ?? 0)
            : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const listChartData = {
    labels: allLists.map((list) => list.title),
    datasets: [
      {
        label: "Number of Lists",
        data:
          allLists && Array.isArray(allLists)
            ? allLists.map((list) => list._id.length > 0)
            : [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // console.log(listsChartData)
  return (
    <>
      {pending && <LoadingScreen />}
      <Drawer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Number of boards & Number of Members per board
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <br></br>
                    <FormControl sx={{ minWidth: 120 }}>
                      <InputLabel id="card1-chart-type-label">
                        Chart Type
                      </InputLabel>
                      <Select
                        labelId="card1-chart-type-label"
                        id="card1-chart-type"
                        value={card1ChartType}
                        onChange={(e) => setCard1ChartType(e.target.value)}
                      >
                        <MenuItem value="bar">Bar Chart</MenuItem>
                        <MenuItem value="stacked">Stacked Bar Chart</MenuItem>
                        <MenuItem value="horizontal">Horizontal Bar Chart</MenuItem>
                        <MenuItem value="line">Line Chart</MenuItem>
                        <MenuItem value="multi">Multi-Axis Chart</MenuItem>
                        <MenuItem value="area">Area Chart</MenuItem>
                        <MenuItem value="pie">Pie Chart</MenuItem>
                        <MenuItem value="bubble">Bubble Chart</MenuItem>
                        <MenuItem value="doughnut">Doughnut Chart</MenuItem>
                        <MenuItem value="polar">Polar Area Chart</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {loadingListService && <LoadingScreen />}
                  {!loadingListService && (
                    <div style={{ height: 300 }}>
                      {card1ChartType === "bar" && (
                        <Bar data={boardsChartData} options={options1} />
                      )}
                      {card1ChartType === "line" && (
                        <Line data={boardsChartData} options={options3} />
                      )}
                             {card1ChartType === "stacked" && (
                        <Bar data={boardsChartData} options={options} />
                      )}
                             {card1ChartType === "horizontal" && (
                        <Bar data={boardsChartData} options={options4} />
                      )}
                               {card1ChartType === "area" && (
                        <Line data={boardsChartData} options={options2} />
                      )}
                               {card1ChartType === "multi" && (
                        <Line data={boardsChartData} options={options7} />
                      )}
                              {card1ChartType === "pie" && (
                        <Pie data={boardsChartData} options={options1} />
                      )}
                               {card1ChartType === "bubble" && (
                        <Bubble data={boardsChartData} options={options8} />
                      )}
                              {card1ChartType === "doughnut" && (
                        <Doughnut data={boardsChartData} options={options2} />
                      )}
                              {card1ChartType === "polar" && (
                        <PolarArea data={boardsChartData} options={options2} />
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Number of cards in each list
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <br></br>
                    <FormControl sx={{ minWidth: 120 }}>
                      <InputLabel id="card1-chart-type-label">
                        Chart Type
                      </InputLabel>
                      <Select
                        labelId="card2-chart-type-label"
                        id="card2-chart-type"
                        value={card2ChartType}
                        onChange={(e) => setCard2ChartType(e.target.value)}
                      >
                        <MenuItem value="bar">Bar Chart</MenuItem>
                        <MenuItem value="horizontal">Horizontal Bar Chart</MenuItem>
                        <MenuItem value="line">Line Chart</MenuItem>
                        <MenuItem value="multi">Multi-Axis Chart</MenuItem>
                        <MenuItem value="area">Area Chart</MenuItem>
                        <MenuItem value="pie">Pie Chart</MenuItem>
                        <MenuItem value="bubble">Bubble Chart</MenuItem>
                        <MenuItem value="doughnut">Doughnut Chart</MenuItem>
                        <MenuItem value="polar">Polar Area Chart</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {loadingListService && <LoadingScreen />}
                  {!loadingListService && (
                    <div style={{ height: 300 }}>
                                                    {card2ChartType === "doughnut" && (
                        <Doughnut data={cardChartData} options={options2} />
                      )}
                      {card2ChartType === "line" && (
                        <Line data={cardChartData} options={options3} />
                      )}
                        {card2ChartType === "bar" && (
                        <Bar data={cardChartData} options={options1} />
                      )}
                   
                             {card2ChartType === "horizontal" && (
                        <Bar data={cardChartData} options={options4} />
                      )}
                               {card2ChartType === "area" && (
                        <Line data={cardChartData} options={options2} />
                      )}          
                      {card2ChartType === "multi" && (
                        <Line data={cardChartData} options={options7} />
                      )}
                              {card2ChartType === "pie" && (
                        <Pie data={cardChartData} options={options1} />
                      )}
                               {card2ChartType === "bubble" && (
                        <Bubble data={cardChartData} options={options8} />
                      )}
                              {card2ChartType === "polar" && (
                        <PolarArea data={cardChartData} options={options2} />
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
            <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Number of Lists
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <br></br>
                    <FormControl sx={{ minWidth: 120 }}>
                      <InputLabel id="card1-chart-type-label">
                        Chart Type
                      </InputLabel>
                      <Select
                        labelId="card3-chart-type-label"
                        id="card3-chart-type"
                        value={card3ChartType}
                        onChange={(e) => setCard3ChartType(e.target.value)}
                      >
                        <MenuItem value="bar">Bar Chart</MenuItem>
      
                        <MenuItem value="horizontal">Horizontal Bar Chart</MenuItem>
                        <MenuItem value="line">Line Chart</MenuItem>
                        <MenuItem value="multi">Multi-Axis Chart</MenuItem>
                        <MenuItem value="area">Area Chart</MenuItem>
                        <MenuItem value="pie">Pie Chart</MenuItem>
                        <MenuItem value="bubble">Bubble Chart</MenuItem>
                        <MenuItem value="doughnut">Doughnut Chart</MenuItem>
                        <MenuItem value="polar">Polar Area Chart</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  {loadingListService && <LoadingScreen />}
                  {!loadingListService && (
                    <div style={{ height: 300 }}>
                                                    {card3ChartType === "doughnut" && (
                        <Doughnut data={listChartData} options={options2} />
                      )}
                      {card3ChartType === "line" && (
                        <Line data={listChartData} options={options3} />
                      )}
                        {card3ChartType === "bar" && (
                        <Bar data={listChartData} options={options1} />
                      )}
                             {card3ChartType === "horizontal" && (
                        <Bar data={listChartData} options={options4} />
                      )}
                               {card3ChartType === "area" && (
                        <Line data={listChartData} options={options2} />
                      )}
                               {card3ChartType === "multi" && (
                        <Line data={listChartData} options={options7} />
                      )}
                              {card3ChartType === "pie" && (
                        <Pie data={listChartData} options={options1} />
                      )}
                               {card3ChartType === "bubble" && (
                        <Bubble data={listChartData} options={options8} />
                      )}
                              {card3ChartType === "polar" && (
                        <PolarArea data={listChartData} options={options2} />
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBoard } from "../../../Services/boardsService";
// import { getBoards } from "../../../Services/boardsService";
// import { getLists } from "../../../Services/boardService";
// import { useParams } from "react-router-dom";
// import Drawer from "../../Drawer";
// import Footer from "../../Footer";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import LoadingScreen from "../../LoadingScreen";
// import { Doughnut, Bar, Line } from "react-chartjs-2";
// import { Grid, Paper } from "@mui/material";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// const Dashboard = () => {
//   const { pending, boardsData } = useSelector((state) => state.boards);

//   const { allLists, loadingListService } = useSelector(
//     (state) => state.list
//   );
//   const loading = useSelector(
//     (state) => state.board.loading || !allLists
//   );

//   const { id } = useParams();
//   const dispatch = useDispatch();

//   const [selectedChartType, setSelectedChartType] = useState("bar");

//   useEffect(() => {
//     getBoards(id, dispatch);
//     getBoard(id, dispatch);
//     getLists(id, dispatch)
//       .then((response) => console.log(response))
//       .catch((error) => console.log(error));
//   }, [dispatch, id]);

//   useEffect(() => {
//     document.title = "Dashboard | Logo";
//   }, []);

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
//   );

//   const options1 = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//       responsive: true,
//     },
//   };

//   const options2 = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Doughnut Chart",
//       },
//     },
//   };

//   const options3 = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Line Chart",
//       },
//       responsive: true,
//     },
//   };
//   const boardsChartData = {
//     labels:
//       boardsData && Array.isArray(boardsData)
//         ? boardsData.map((board) => board.title)
//         : [],
//     datasets: [
//       {
//         label: "Number of Boards",
//         data:
//           boardsData && Array.isArray(boardsData)
//             ? boardsData.map((board) => board._id.length > 0)
//             : [],
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//       {
//         label: "Number of Members",
//         data:
//           boardsData && Array.isArray(boardsData)
//             ? boardsData.map((board) => board.members?.length ?? 0)
//             : [],

// backgroundColor: "rgba(54, 162, 235, 0.5)",
// borderColor: "rgba(54, 162, 235, 1)",
// borderWidth: 1,
// },
// ],
// };

// const listChartData = {
// labels:
// allLists && Array.isArray(allLists)
// ? allLists.map((list) => list.title)
// : [],
// datasets: [
// {
// label: "Number of Cards",
// data:
// allLists && Array.isArray(allLists)
// ? allLists.map((list) => list.cards?.length ?? 0)
// : [],
// backgroundColor: "rgba(255, 159, 64, 0.5)",
// borderColor: "rgba(255, 159, 64, 1)",
// borderWidth: 1,
// },
// ],
// };

// const chartTypeHandler = (type) => {
// setSelectedChartType(type);
// };

// return (
// <div>
// {loading ? (
// <LoadingScreen />
// ) : (
// <div>
// <Drawer />
// <Box sx={{ flexGrow: 1 }}>
// <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
// <Typography
//              component="h1"
//              variant="h3"
//              align="center"
//              color="text.primary"
//              gutterBottom
//            >
// Dashboard
// </Typography>
// <Grid container spacing={3}>
// <Grid item xs={12} md={8} lg={9}>
// <Paper
// sx={{
// p: 2,
// display: "flex",
// flexDirection: "column",
// height: 240,
// }}
// >
// {selectedChartType === "bar" && (
// <Bar data={boardsChartData} options={options1} />
// )}
// {selectedChartType === "doughnut" && (
// <Doughnut data={boardsChartData} options={options2} />
// )}
// {selectedChartType === "line" && (
// <Line data={listChartData} options={options3} />
// )}
// </Paper>
// </Grid>
// <Grid item xs={12} md={4} lg={3}>
// <Card
// sx={{ height: "100%", display: "flex", flexDirection: "column" }}
// >
// <CardContent sx={{ flexGrow: 1 }}>
// <Typography gutterBottom variant="h5" component="h2">
// Select Chart Type
// </Typography>
// <Grid container spacing={2}>
// <Grid item xs={12}>
// <Box
// sx={{
// display: "flex",
// justifyContent: "space-between",
// alignItems: "center",
// }}
// >
// <Typography gutterBottom variant="h6" component="h3">
// Bar Chart
// </Typography>
// <input
// type="radio"
// value="bar"
// checked={selectedChartType === "bar"}
// onChange={() => chartTypeHandler("bar")}
// />
// </Box>
// </Grid>
// <Grid item xs={12}>
// <Box
// sx={{
// display: "flex",
// justifyContent: "space-between",
// alignItems: "center",
// }}
// >
// <Typography gutterBottom variant="h6" component="h3">
// Doughnut Chart
// </Typography>
// <input
// type="radio"
// value="doughnut"
// checked={selectedChartType === "doughnut"}
// onChange={() => chartTypeHandler("doughnut")}
// />
// </Box>
// </Grid>
// <Grid item xs={12}>
// <Box
// sx={{
// display: "flex",
// justifyContent:
// "space-between",
// alignItems: "center",
// }}
// >
// <Typography gutterBottom variant="h6" component="h3">
// Line Chart
// </Typography>
// <input
// type="radio"
// value="line"
// checked={selectedChartType === "line"}
// onChange={() => chartTypeHandler("line")}
// />
// </Box>
// </Grid>
// </Grid>
// </CardContent>
// </Card>
// </Grid>
// </Grid>
// </Container>
// </Box>
// </div>

// )}
// </div>
// );
// }
// export default Dashboard;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBoard } from "../../../Services/boardsService";
// import { getBoards } from "../../../Services/boardsService";
// import { getLists } from "../../../Services/boardService";
// import { useParams } from "react-router-dom";
// import Drawer from "../../Drawer";
// import Footer from "../../Footer";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import LoadingScreen from "../../LoadingScreen";
// import { Doughnut, Bar } from "react-chartjs-2";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from "chart.js";

// const Dashboard = () => {
//   const { pending, boardsData } = useSelector((state) => state.boards);
//   const {  loading } = useSelector((state) => state.board);
//   const { allLists, loadingListService } = useSelector((state) => state.list);

//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getBoards(id, dispatch);
//     getBoard(id, dispatch);
//     getLists(id, dispatch)
//     .then((response) => console.log(response))
//     .catch((error) => console.log(error));
//   }, [dispatch, id]);

//   useEffect(() => {
//     document.title = "Dashboard | Logo";
//   }, []);

//   ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//     ArcElement
//   );

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Chart.js Bar Chart",
//       },
//     },
//   };

//   const boardsChartData = {
//     labels:
//       boardsData && Array.isArray(boardsData)
//         ? boardsData.map((board) => board.title)
//         : [],
//     datasets: [
//       {
//         label: "Boards",
//         data:
//           boardsData && Array.isArray(boardsData)
//             ? boardsData.map((board) => board.length ?? 0)
//             : [],
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//         borderColor: "rgba(255, 99, 132, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const listsChartData = {
//     labels: ["Cards"],
//     datasets: [
//       {
//         data:
//           allLists && Array.isArray(allLists)
//             ? allLists.map((list) => list.cards?.length ?? 0)
//             : [],
//         backgroundColor: [
//           "rgba(255, 99, 132, 0.5)",
//           "rgba(54, 162, 235, 0.5)",
//           "rgba(255, 206, 86, 0.5)",
//           "rgba(75, 192, 192, 0.5)",
//           "rgba(153, 102, 255, 0.5)",
//           "rgba(255, 159, 64, 0.5)",
//         ],
//         borderColor: [
//           "rgba(255, 99, 132, 1)",
//           "rgba(54, 162, 235, 1)",
//           "rgba(255, 206, 86, 1)",
//           "rgba(75, 192, 192, 1)",
//           "rgba(153, 102, 255, 1)",
//           "rgba(255, 159, 64, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <>
//       <Drawer id={id} />
//       <Container maxWidth="lg">
//         <Box sx={{ mt: 4 }}>
//           {loading || loadingListService ? (
//             <LoadingScreen />
//           ) : (
//             <>
//               <Card sx={{ mb: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5">Your Boards</Typography>
//                   <br></br>
//                   <Bar options={options} data={boardsChartData} />
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h5">All Lists</Typography>
//                   <br></br>
//                   <Doughnut options={options} data={listsChartData} />
//                 </CardContent>
//               </Card>
//             </>
//           )}
//         </Box>
//       </Container>
//     </>
//   );
// };
// export default Dashboard;
// import React, { useState } from 'react';
// import { Doughnut, Bar, Line } from 'react-chartjs-2';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
//   PointElement,
//   LineElement,
// } from 'chart.js';

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Bar Chart',
//       },
//     },
//   };

//  ChartJS.register(
//       CategoryScale,
//       LinearScale,
//       BarElement,
//       Title,
//       Tooltip,
//       Legend,
//       ArcElement,
//       PointElement,
//       LineElement,
//     );

// const boardData = {
//   labels: ['Board 1', 'Board 2', 'Board 3', 'Board 4', 'Board 5'],
//   datasets: [
//     {
//       label: 'Number of Lists',
//       backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
//       data: [5, 3, 2, 7, 4]
//     }
//   ]
// };
// console.log(boardData)

// const listData = {
//   labels: ['List 1', 'List 2', 'List 3', 'List 4', 'List 5'],
//   datasets: [
//     {
//       label: 'Number of Cards',
//       backgroundColor: ['#B21F00', '#C9DE00', '#2FDE00', '#00A6B4', '#6800B4'],
//       data: [3, 2, 4, 1, 5]
//     }
//   ]
// };
// console.log(listData)
// const cardData = {
//   labels: ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'],
//   datasets: [
//     {
//       label: 'Number of Activities',
//       fill: false,
//       lineTension: 0.5,
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [5, 7, 3, 6, 4]
//     }
//   ]
// };

// const Charts = () => {
//   const [selectedChart, setSelectedChart] = useState('board');

//   const handleChangeChart = (event) => {
//     setSelectedChart(event.target.value);
//   };

//   const renderChart = () => {
//     switch (selectedChart) {
//       case 'board':
//         return <Bar data={boardData} options={{ title: { display: true, text: 'Boards' } }} />;
//       case 'list':
//         return <Doughnut data={listData} options={{ title: { display: true, text: 'Lists' } }} />;
//       case 'card':
//         return <Line data={cardData} options={{ title: { display: true, text: 'Cards' } }} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <h1>Charts</h1>
//       <select value={selectedChart} onChange={handleChangeChart}>
//         <option value="board">Boards</option>
//         <option value="list">Lists</option>
//         <option value="card">Cards</option>
//       </select>
//       {renderChart()}
//     </div>
//   );
// };

// export default Charts;

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getBoard } from "../../../Services/boardsService";
// import { getBoards } from "../../../Services/boardsService";
// import { getLists } from "../../../Services/boardService";
// import { useParams } from "react-router-dom";
// import Drawer from "../../Drawer";
// import Footer from "../../Footer";
// import Container from "@mui/material/Container";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import LoadingScreen from '../../LoadingScreen';
// import { loadUser } from "../../../Services/userService";

// const Dashboard = () => {
//   const { pending, boardsData } = useSelector((state) => state.boards);
//   const {  loading } = useSelector((state) => state.board);
//   const { allLists, loadingListService } = useSelector((state) => state.list);
//   const { id } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     getBoards(id,dispatch);
//     getBoard(id,dispatch);
//     getLists(id,dispatch);
//   }, [dispatch,id]);

//   useEffect(() => {
//     document.title = "Dashboard | Logo";
//   }, []);

//   return (
//     <>
//       <Drawer id={id}/>
//       <Container maxWidth="lg">
//         <Box sx={{ mt: 4 }}>
//           {loading || loadingListService ? (
//             <LoadingScreen />
//           ) : (
//             <>
//               <Card sx={{ mb: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5">Your Boards</Typography>
//                   <br></br>
//                   {boardsData.map((board) => (
//                     <Box key={board._id} sx={{ mb: 1 }}>
//                       <Typography variant="h6">{board.title}</Typography>
//                       <Typography variant="body1">
//                         {allLists.filter((list) => list.boardId === board._id).length}{" "}
//                         {allLists.filter((list) => list.boardId === board._id).length === 1
//                           ? "list"
//                           : "lists"}
//                       </Typography>
//                     </Box>
//                   ))}
//                 </CardContent>
//               </Card>
//               <Card sx={{ mb: 2 }}>
//                 <CardContent>
//                   <Typography variant="h5">Your Lists</Typography>
//                   <br></br>
//                   {allLists.map((list) => (
//                     <Box key={list._id} sx={{ mb: 1 }}>
//                       <Typography variant="h6">{list.title}</Typography>
//                       <Typography variant="body1">
//                         {list.length}{" "}
//                         {list.length === 1 ? "card" : "cards"}

//                       </Typography>
//                     </Box>
//                   ))}
//                 </CardContent>
//               </Card>
//             </>
//           )}
//         </Box>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Dashboard;
