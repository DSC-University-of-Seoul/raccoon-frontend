import React, { useState } from 'react';
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

function QuizLayout(props) {
	const ans4 = ['ansred', 'ansblue', 'ansyel', 'ansgren'];
	const ans4list = ans4.map((ans4, index) => (
		<Grid item xs={6} className="ansItem">
			<Paper elevation={0} className={`${'ansPaper'} ${ans4}`}>
				<StarsIcon className="ansInput" />
				<InputBase className="ansInput" placeholder="Add Answer" fullWidth />
				<Checkbox
					className="ansInputCheck"
					value={index}
					checked={props.ansData[index].checked}
					onChange={props.handleChange}
					icon={<CircleUnchecked className="ansInputIcon" />}
					checkedIcon={<CircleCheckedFilled className="ansInputIcon" />}
				/>
			</Paper>
		</Grid>
	));
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
										<Select
											className="selectOpt"
											defaultValue={20}
											classes={{ icon: 'selectIcon' }}
										>
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
										<Select
											className="selectOpt"
											defaultValue={20}
											classes={{ icon: 'selectIcon' }}
										>
											<MenuItem value={20}>standard</MenuItem>
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
										<Select
											className="selectOpt"
											defaultValue={20}
											classes={{ icon: 'selectIcon' }}
										>
											<MenuItem value={20}>single</MenuItem>
										</Select>
									</FormControl>
								</Paper>
							</div>
						</Grid>
					</Grid>
					{/* 정답 설정하기 */}
					<Grid container>{ans4list}</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

function TFLayout(props) {
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
						<Grid item xs={6} className="circleItem">
							<div className="circleDiv">
								<Typography className="circleText">Time Limit</Typography>
								<Paper className="circle">
									<FormControl>
										<Select
											className="selectOpt"
											defaultValue={20}
											classes={{ icon: 'selectIcon' }}
										>
											<MenuItem value={20}>20 seconds</MenuItem>
										</Select>
									</FormControl>
								</Paper>
							</div>
						</Grid>
						<Grid item xs={6} className="circleItem">
							<div className="circleDiv">
								<Typography className="circleText">Points</Typography>
								<Paper className="circle">
									<FormControl>
										<Select
											className="selectOpt"
											defaultValue={20}
											classes={{ icon: 'selectIcon' }}
										>
											<MenuItem value={20}>standard</MenuItem>
										</Select>
									</FormControl>
								</Paper>
							</div>
						</Grid>
					</Grid>
					{/* 정답 설정하기 */}
					<Grid container className="ansContainer">
						<Grid item xs={6} className="ansItem">
							<Paper elevation={0} className={`${'ansPaper'} ${'ansblue'}`}>
								<StarsIcon className="ansInput" />
								<InputBase
									className="ansInput"
									placeholder="Add Answer"
									fullWidth
								/>
								<Checkbox
									className="ansInputCheck"
									value={0}
									checked={props.ansData[0].checked}
									onChange={props.handleChange}
									icon={<CircleUnchecked className="ansInputIcon" />}
									checkedIcon={<CircleCheckedFilled className="ansInputIcon" />}
								/>
							</Paper>
						</Grid>
						<Grid item xs={6} className="ansItem">
							<Paper elevation={0} className={`${'ansPaper'} ${'ansred'}`}>
								<StarsIcon className="ansInput" />
								<InputBase
									className="ansInput"
									placeholder="Add Answer"
									fullWidth
								/>
								<Checkbox
									className="ansInputCheck"
									value={1}
									checked={props.ansData[1].checked}
									onChange={props.handleChange}
									icon={<CircleUnchecked className="ansInputIcon" />}
									checkedIcon={<CircleCheckedFilled className="ansInputIcon" />}
								/>
							</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

function CreateRoomQuiz(props) {
	const toggleId = props.toggleId;
	const quizlist = props.quizlist;
	const defaultansData = [
		[
			{ checked: true },
			{ checked: false },
			{ checked: false },
			{ checked: false },
		],
		[{ checked: false }, { checked: true }],
	];
	const [ansData, setansData] = useState(defaultansData);
	const handleChange = (e) => {
		const selected = ansData[toggleId];
		const data = ansData;
		setansData([
			...data.slice(0, toggleId),
			[
				...selected.slice(0, e.target.value),
				{ checked: !selected[e.target.value].checked },
				...selected.slice(e.target.value, selected.length),
			],
			...data.slice(toggleId + 1, data.length),
		]);
	};
	if (quizlist[toggleId].sort === 'Quiz')
		return (
			<QuizLayout ansData={ansData[toggleId]} handleChange={handleChange} />
		);
	else
		return <TFLayout ansData={ansData[toggleId]} handleChange={handleChange} />;
}

export default CreateRoomQuiz;
