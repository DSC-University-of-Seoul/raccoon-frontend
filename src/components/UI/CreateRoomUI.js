import React from 'react';
import {
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

function QuizLayout() {
	return (
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
	);
}

function TFLayout() {
	return <div></div>;
}

function CreateRoomQuiz() {
	return <QuizLayout />;
}

export default CreateRoomQuiz;
