import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
	marginTop: '50px',
}

class ButtonContainer extends React.Component {

	render() {
		return (
			<div style={style}>
				<FlatButton primary label="I am flat" />
				<RaisedButton secondary label="I am raised" />
			</div>
		);
	}
}

export default ButtonContainer;
