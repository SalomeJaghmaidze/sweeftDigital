import React from "react";
import { Link } from "react-router-dom";
import UserList from "./components/UserList";

function Main() {
  
  return (
    <div>
      <UserList endpoint={`user`}></UserList>
    </div>
  );
}

export default Main;
