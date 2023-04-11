import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import styled from 'styled-components';
import BlurOnIcon from '@mui/icons-material/BlurOn';
const Icon = styled.img`
	width: 10vw;
`;

export default function LoadingScreen() {
	const [open] = React.useState(true);
	/*  const handleClose = () => {
    setOpen(false);
  }; */
	return (
		<div>
			<Backdrop
				sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={open}
				//onClick={handleClose}
			>
				<BlurOnIcon/>
			</Backdrop>
		</div>
	);
}
