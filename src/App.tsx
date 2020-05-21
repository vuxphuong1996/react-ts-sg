import React, { useEffect, Dispatch } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { SetAge } from "./store/actions";
import { IAppState } from "./store";

interface IProps {
  age: number;
  onClick(): void;
}

const App: React.FC<IProps> = ({ age, onClick }) => {
  return (
    <div>
      age: {age}
      <div>
        <button onClick={onClick}>Add</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    age: state.app.age,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {  
    onClick: () => dispatch(SetAge),
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);
