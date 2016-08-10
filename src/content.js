// dependencies
import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import WorldSvgIcon from 'material-ui/svg-icons/social/public';
import Paper from 'material-ui/Paper';


// Local variables
const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#ab47bc',
};


// Component definition
class Content extends React.Component {

	render() {
		return (
			<Card>
				<CardHeader
		      title="Standard Built-in Objects"
		      subtitle="Objects available in the global scope"
		      avatar={WorldSvgIcon}
		    />
		    <Paper style={style} zDepth={3} />
		    <Paper style={style} zDepth={4} />
		    <Paper style={style} zDepth={5} />
		  </Card>
		)
	}
};


export default Content;
