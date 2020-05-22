import React from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Main: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Main;
