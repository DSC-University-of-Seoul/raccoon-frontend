import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// 페이지에서 <Header />를 불러와주세요!
// props.left는 타이틀의 바로 왼쪽에 생성
// props.right는 bar의 오른쪽에 순서대로 생성됩니다.
function Header(props) {
	return (
		<div className="Header">
			<AppBar position="static" className="bar">
				<Toolbar color="inherit">
					<div className="left">
						<Typography className="title">RACCOON</Typography>
						{props.left}
					</div>
					<div className="middle"> </div>
					<div className="right">{props.right}</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
