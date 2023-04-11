import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';
import { xs } from '../BreakPoints';
import ProfileBox from './ProfileBox';
import { useNavigate } from 'react-router-dom';

import BlurOnIcon from '@mui/icons-material/BlurOn'
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const Container = styled.div`
	height: 3rem;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	backdrop-filter: blur(24px);
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	gap: 0.5rem;
	${xs({
		padding: '0.5rem, 0rem',
	})}
`;

const LeftSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	gap: 1rem;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		gap: '0.1rem',
		width: 'fit-content',
	})}
`;

const RightSide = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;



const DropdownContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	${xs({
		display: 'none',
	})}
`;

 function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
}

const Navbar = (props) => {
	const navigate = useNavigate();

	return (
		<Container>
			<LeftSide>
				<LogoContainer>
				<Tooltip disableHoverListener title="Add">
            	<Button>
       
					<BlurOnIcon
						onClick={() => {
							navigate('/boards');
						}}
						sx={{
							color: 'white',
							
						}}
						
					/>
					</Button>
			   </Tooltip>
				</LogoContainer>
				<DropdownContainer>
					<DropdownMenu title='Your Boards' />
				</DropdownContainer>
			</LeftSide>
			<RightSide>
				<SearchBar searchString={props.searchString} setSearchString={props.setSearchString} />
				<ProfileBox />
			</RightSide>

				
		</Container>
	);
};

export default Navbar;
