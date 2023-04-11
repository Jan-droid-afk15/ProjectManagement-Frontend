import React, { useEffect, useRef, useState } from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const List = ({title}) => {
return (
		<>
		<Container>
        <Box sx={{
            width: 400,
            padding:3,
            backgroundColor:"#ccc",
            borderRadius:3,
            ml:-12
        }}>
           <h4>{title}</h4>
        </Box>
        </Container>

		</>
	);
};

export default List;