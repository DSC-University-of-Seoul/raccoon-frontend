import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';

export default createMuiTheme({
	typography: {
		fontFamily: ['VT323', 'NanumGothic-Regular'],
	},
	palette: createPalette({
		type: 'dark',
		background: {
			paper: '#3e3d42', // main.grey.darken4
			default: '#18161c', // main.black.main
		},
		main: {
			white: {
				main: '#fcfcfc',
				contrastText: '#18161c', // main.black.main
			},
			grey: {
				darken1: {
					main: '#c9c8ca',
					contrastText: '#18161c', // main.black.main
				},
				darken2: {
					main: '#98979a',
					contrastText: '#18161c', // main.black.main
				},
				darken3: {
					main: '#69686c',
					contrastText: '#fcfcfc', // main.white.main
				},
				darken4: {
					main: '#3e3d42',
					contrastText: '#fcfcfc', // main.white.main
				},
			},
			black: {
				main: '#18161c',
				contrastText: '#fcfcfc', // main.white.main
			},
		},
		primary: {
			main: '#8917ce',
			lighten1: '#b66fdf',
			lighten2: '#dbb6ee',
			darken1: '#62208d',
			darken2: '#3c1e51',
			contrastText: '#ffe600', // accent1.main
		},
		accent1: {
			main: '#ffe600',
			lighten1: '#fff099',
			contrastText: '#8917ce', // primary.main
		},
		accent2: {
			main: '#d76258',
			lighten1: '#f1b0a7',
			contrastText: '#fcfcfc', // main.black.main
		},
		accent3: {
			main: '#358f60',
			lighten1: '#9cc5ab',
			contrastText: '#fcfcfc', // main.black.main
		},
		accent4: {
			main: '#2c76b1',
			lighten1: '#9eb6d7',
			contrastText: '#fcfcfc', // main.black.main
		},
	}),
});
