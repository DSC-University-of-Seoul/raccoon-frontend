import React from 'react';
import { Box, Grid } from '@material-ui/core';
import { Header } from '../UI';

const ColorPalette = () => {
	return (
		<>
			<Header left="left-1" right="right1" />
			<Grid container spacing={0}>
				<Grid container item xs={12}>
					<Grid item xs={2}>
						<Box
							bgcolor="main.white.main"
							color="main.white.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.white.main
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box
							bgcolor="main.grey.darken1.main"
							color="main.grey.darken1.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.grey.darken1.main
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box
							bgcolor="main.grey.darken2.main"
							color="main.grey.darken2.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.grey.darken2.main
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box
							bgcolor="main.grey.darken3.main"
							color="main.grey.darken3.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.grey.darken3.main
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box
							bgcolor="main.grey.darken4.main"
							color="main.grey.darken4.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.grey.darken4.main
						</Box>
					</Grid>
					<Grid item xs={2}>
						<Box
							bgcolor="main.black.main"
							color="main.black.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.black.main
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={3}>
						<Box
							bgcolor="accent1.lighten1"
							color="accent1.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent1.lighten1
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent2.lighten1"
							color="accent2.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent2.lighten1
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent3.lighten1"
							color="accent3.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent3.lighten1
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent4.lighten1"
							color="accent4.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent4.lighten1
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={3}>
						<Box
							bgcolor="accent1.main"
							color="accent1.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent1.main
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent2.main"
							color="accent2.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent2.main
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent3.main"
							color="accent3.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent3.main
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="accent4.main"
							color="accent4.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							accent4.main
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.main"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.main
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.darken1"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.darken1
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.darken2"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.darken2
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="main.black.main"
							color="main.black.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.black.main
						</Box>
					</Grid>
				</Grid>
				<Grid container item xs={12}>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.main"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.main
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.lighten1"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.lighten1
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="primary.lighten2"
							color="primary.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							primary.lighten2
						</Box>
					</Grid>
					<Grid item xs={3}>
						<Box
							bgcolor="main.white.main"
							color="main.white.contrastText"
							style={{ padding: 40, fontSize: '20px', textAlign: 'center' }}
						>
							main.white.main
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default ColorPalette;
