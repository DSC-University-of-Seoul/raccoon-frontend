import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function CreateCard() {
	return (
		<Grid item xs={12} className="cardItem">
			<Link to="/create">
				<Card className="Card">
					<CardContent>
						<Typography variant="h6">+ Add a Raccoon</Typography>
					</CardContent>
				</Card>
			</Link>
		</Grid>
	);
}

function RaccoonCard() {
	return <div>RaccoonCard</div>;
}

function RaccoonListUi(props) {
	const RaccoonNum = props.RaccoonNum;
	if (RaccoonNum === 0) return <CreateCard />;
	else return <RaccoonCard />;
}

export default RaccoonListUi;
