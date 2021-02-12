import React, { useState } from 'react';
import { Header } from '../UI';
import {
	Button,
	Drawer,
	List,
	ListItem,
	Toolbar,
	InputBase,
	Grid,
	Paper,
	Select,
	FormControl,
	MenuItem,
	Typography,
	Checkbox,
} from '@material-ui/core';
import StarsIcon from '@material-ui/icons/Stars';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
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
				<Grid container>
					<Grid item xs>
						{/* main 위치조정 */}
						<Toolbar />
					</Grid>
					<Grid item xs={10}>
						<Grid container className="mainContainer">
							{/* Title 입력 칸 */}
							<Grid item xs={12}>
								<Paper component="form" className="inputPaper">
									<InputBase
										className="inputTitle"
										placeholder="Click to start typing your question"
										inputProps={{
											maxLength: 110,
											style: { textAlign: 'center' },
										}}
										multiline
									/>
								</Paper>
							</Grid>
							{/* 퀴즈 옵션 설정하기 */}
							<Grid container className="optContainer">
								<Grid item xs={4} className="circleItem">
									<div className="circleDiv">
										<Typography className="circleText">Time Limit</Typography>
										<Paper className="circle">
											<FormControl>
												<Select className="selectOpt" defaultValue={20}>
													<MenuItem value={20}>20 seconds</MenuItem>
												</Select>
											</FormControl>
										</Paper>
									</div>
								</Grid>
								<Grid item xs={4} className="circleItem">
									<div className="circleDiv">
										<Typography className="circleText">Points</Typography>
										<Paper className="circle">
											<FormControl>
												<Select className="selectOpt" defaultValue={20}>
													<MenuItem value={20}>20 seconds</MenuItem>
												</Select>
											</FormControl>
										</Paper>
									</div>
								</Grid>
								<Grid item xs={4} className="circleItem">
									<div className="circleDiv">
										<Typography className="circleText">Answer Opt</Typography>
										<Paper className="circle">
											<FormControl>
												<Select className="selectOpt" defaultValue={20}>
													<MenuItem value={20}>20 seconds</MenuItem>
												</Select>
											</FormControl>
										</Paper>
									</div>
								</Grid>
							</Grid>
							{/* 정답 설정하기 */}
							<Grid container>
								<Grid item xs={6} className="ansItem">
									<Paper elevation={0} className="ansPaper">
										<StarsIcon className="ansInput" />
										<InputBase
											className="ansInput"
											placeholder="Add Answer"
											fullWidth
										/>
										<Checkbox
											checked={true}
											icon={<CircleUnchecked className="ansInput" />}
											checkedIcon={<CircleCheckedFilled className="ansInput" />}
										/>
									</Paper>
								</Grid>
								<Grid item xs={6} className="ansItem">
									<Paper elevation={0} className="ansPaper">
										<StarsIcon className="ansInput" />
										<InputBase
											className="ansInput"
											placeholder="Add Answer"
											fullWidth
										/>
										<Checkbox
											checked={true}
											icon={<CircleUnchecked className="ansInput" />}
											checkedIcon={<CircleCheckedFilled className="ansInput" />}
										/>
									</Paper>
								</Grid>
								<Grid item xs={6} className="ansItem">
									<Paper elevation={0} className="ansPaper">
										<StarsIcon className="ansInput" />
										<InputBase
											className="ansInput"
											placeholder="Add Answer"
											fullWidth
										/>
										<Checkbox
											checked={true}
											icon={<CircleUnchecked className="ansInput" />}
											checkedIcon={<CircleCheckedFilled className="ansInput" />}
										/>
									</Paper>
								</Grid>
								<Grid item xs={6} className="ansItem">
									<Paper elevation={0} className="ansPaper">
										<StarsIcon className="ansInput" />
										<InputBase
											className="ansInput"
											placeholder="Add Answer"
											fullWidth
										/>
										<Checkbox
											checked={true}
											icon={<CircleUnchecked className="ansInput" />}
											checkedIcon={<CircleCheckedFilled className="ansInput" />}
										/>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default CreateRoom;
