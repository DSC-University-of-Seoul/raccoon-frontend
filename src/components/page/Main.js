import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { Header } from '../UI';

const Main = () => {
	return (
		<div className="main">
			<Header />
			<Grid container spacing={3} className="buttons">
				<Grid item>
					<Link to={`/play/pin`}>
						<Button className="playButton" size="large">
							PLAY
						</Button>
					</Link>
				</Grid>
				<Grid item>
					<Link to={`/create`}>
						<Button className="createButton" size="large">
							HOST
						</Button>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
};

export default Main;
