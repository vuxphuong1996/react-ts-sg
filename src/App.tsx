import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from './store/reducers';
import { SetAge, SetName } from './store/actions';

const App: React.FC = () => {
  const { age, name } = useSelector((state: IAppState) => state.app);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(SetAge(50));
  };

  const onClickName = () => {
    dispatch(SetName('bem'));
  };

  return (
    <div>
      age: {age}
      age: {name}
      <div>
        <button onClick={onClick}>Add</button>
        <button onClick={onClickName}>Add name</button>
      </div>
    </div>
  );
};

export default App;
