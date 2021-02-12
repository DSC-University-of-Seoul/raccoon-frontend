import React from 'react';
import { Header, CRUI } from '../UI';
import { Button, Drawer, List, ListItem, Toolbar } from '@material-ui/core';
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
				className="header"
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
							className={`${'btn'} ${'rightbtn'}`}
							component={Link}
							to="/list"
						>
							EXIT
						</Button>
						<Button
							variant="contained"
							color="secondary"
							className={`${'btn'} ${'rightbtn'}`}
						>
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
				{list()}
				<Button variant="contained">Add question</Button>
			</Drawer>
			{/* Main */}
			<div className="main">
				<CRUI />
			</div>
		</div>
	);
};

export default CreateRoom;
