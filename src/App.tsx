import React, { useEffect, Dispatch } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { compose } from "redux";
import { SetAge, SetName } from "./store/actions";
import { IAppState } from "./store";
// import { IState } from "./store/reducers";

const App: React.FC = () => {
  const { age, name } = useSelector((state: IAppState) => state.app);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(SetAge(50));
  };

  const onClickName = () => {
    dispatch(SetName("bembem"));
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
