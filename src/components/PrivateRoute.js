import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component, user, ...rest}) => {

  return (
    <Route {...rest} render={(props) => (
      user ? (
        React.createElement(component, props)
      ) : (
        <Redirect to="/login" />
      )
    )} />
  );
};

export default PrivateRoute;