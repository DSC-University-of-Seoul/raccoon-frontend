import React, { useState } from 'react';
import {
	Grid,
	Button,
	Typography,
	InputAdornment,
	TextField,
} from '@material-ui/core';
import { ArrowDropDown, AccountCircle } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { Header, RaccoonListUI } from '../UI';
import { Link } from 'react-router-dom';

const RaccoonList = () => {
	const [Raccoon, setRaccoon] = useState(0);
	return (
		<div className="Rclist">
			<Header
				right={
					<div>
						<Button
							component={Link}
							to="/create"
							variant="contained"
							color="primary"
							className={`${'NavBtn'} ${'createBtn'}`}
							disableElevation
						>
							CREATE
						</Button>
						<Button
							variant="contained"
							color="default"
							className="NavBtn"
							endIcon={<ArrowDropDown fontSize="large" />}
							size="small"
						>
							<AccountCircle />
						</Button>
					</div>
				}
			/>
			<Grid container linespacing={2} className="mainContainer">
				<Grid item xs={12} className="mainTitle">
					<Typography className="mainText"> RACCOON LIST </Typography>
				</Grid>
				<Grid item xs={12} className="mainTitle">
					<TextField
						variant="outlined"
						className="searchBar"
						fullWidth
						style={{ margin: '0 25%' }}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon fontSize="large" />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item className="subTitle">
					<Typography className="subText">My Raccoon</Typography>
				</Grid>
				<Grid item className="subTitle">
					<Typography className="subText2">Raccoons({Raccoon})</Typography>
					<Link to="/create">
						<Typography className="smallText">Create new</Typography>
					</Link>
				</Grid>
				<Grid container className="subTitle">
					<RaccoonListUI RaccoonNum={Raccoon} />
				</Grid>
			</Grid>
		</div>
	);
};

export default RaccoonList;
