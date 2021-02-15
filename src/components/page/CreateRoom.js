import React from 'react';
import { Header, CRUI } from '../UI';
import {
	Button,
	Drawer,
	List,
	ListItem,
	Toolbar,
	Grid,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
	const list = () => (
		<List>
			<ListItem>Hi</ListItem>
		</List>
	);
	return (
		<div className="CreateRoom">
			{/* Header */}
			<Header
				left={
					<Button variant="contained" color="primary" className="btn">
						Settings
					</Button>
				}
				right={
					<>
						<Button
							variant="contained"
							color="default"
							className="rightbtn"
							component={Link}
							to="/list"
						>
							EXIT
						</Button>
						<Button variant="contained" className={`${'btn1'} ${'rightbtn'}`}>
							DONE
						</Button>
					</>
				}
			/>
			{/* SideBar(Left) */}
			<Drawer
				className="drawer"
				variant="permanent"
				classes={{
					paper: 'drawerPaper',
				}}
			>
				<Toolbar />
				<Grid container className="drawerContainer">
					{list()}
					<Grid item className="drawerItem">
						<Button className="drawerBtn" color="primary" variant="contained">
							Add question
						</Button>
					</Grid>
				</Grid>
			</Drawer>
			{/* Main */}
			<div className="main">
				<CRUI />
			</div>
		</div>
	);
};

export default CreateRoom;
