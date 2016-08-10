// dependencies
import React from 'react';


// Local variables
const propTypes = {
  children: React.PropTypes.any,
};

const styles = {
  container: {
    backgroundColor: '#F2F2F2',
    display: 'block',
    fontSize: '14px',
    height: '100%',
    paddingTop: '40px',
    position: 'relative',
  },
};


// Component definition
function LayoutContainer(props) {
  return (
    <div
      className="layout-container"
      style={styles.container}
    >
      {props.children}
    </div>
  );
}


// Component metadata
LayoutContainer.propTypes = propTypes;


export default LayoutContainer;
