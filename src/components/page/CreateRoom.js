import React, { useState } from 'react';
import { Header, CRUI } from '../UI';
import {
	Button,
	Drawer,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Toolbar,
	Grid,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const CreateRoom = () => {
	const [toggleId, settoggleId] = useState(0);
	const [quizlist, setquizlist] = useState([
		{ sort: 'Quiz' },
		{ sort: 'True or False' },
	]);
	const quizitem = quizlist.map((quizlist, index) => (
		<ListItem
			button
			selected={toggleId === index}
			classes={{ selected: 'drawerActive' }}
			key={index}
			onClick={() => settoggleId(index)}
		>
			<ListItemText primary={index + 1} />
			<ListItemText primary={quizlist.sort} />
			<ListItemIcon>
				<DeleteIcon />
			</ListItemIcon>
		</ListItem>
	));
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
					<List>{quizitem}</List>
					<Grid item className="drawerItem">
						<Button className="drawerBtn" color="primary" variant="contained">
							Add question
						</Button>
					</Grid>
				</Grid>
			</Drawer>
			{/* Main */}
			<div className="main">
				<CRUI quizlist={quizlist} toggleId={toggleId} />
			</div>
		</div>
	);
};

export default CreateRoom;
