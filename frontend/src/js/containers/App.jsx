import React from 'react';
import { connect } from 'react-redux';

const App = (props) => {
  const {
    store,
    children,
  } = props;

  return (
    <div>
      {children}
    </div>
  );
};

const mapStateToProps = state => ({
  store: state,
});
export default connect(mapStateToProps)(App);
