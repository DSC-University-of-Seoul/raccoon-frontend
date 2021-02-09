import React, { useState } from 'react';
import { Header } from '../UI';
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
			<Drawer
				className="sidebar"
				variant="permanent"
				classes={{
					paper: 'drawerPaper',
				}}
			>
				<Toolbar />
				{list()}
			</Drawer>
		</div>
	);
};

export default CreateRoom;
