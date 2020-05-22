import React from 'react';
import { RouteComponentProps, Route, RouteProps } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteWithLayout: React.FC = (props) => {
  const { layout: Layout, component: Component, ...rest }: any = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.defaultProps = {
  path: '/'
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
