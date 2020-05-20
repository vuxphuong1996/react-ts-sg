import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return <div>helo</div>;
}

export default App;
