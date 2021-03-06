import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

interface ComponentProps {
  Component: React.FC<any>;
  exact: boolean;
  path: string;
}

const ProtectedRoute: React.FC<ComponentProps> = ({
  Component,
  path,
  exact,
}) => {
  const { state } = useLocation();
  const locationState = state as { token: string };

  return locationState?.token ? (
    <Route component={Component} path={path} exact />
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
