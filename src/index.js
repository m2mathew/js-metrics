import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import './index.css';

// Needed for onTouchTap
// injectTapEventPlugin();

const AppWrapper = () => (
	<MuiThemeProvider>
		<App />
	</MuiThemeProvider>
);

ReactDOM.render(
  <AppWrapper />,
  document.getElementById('root')
);
