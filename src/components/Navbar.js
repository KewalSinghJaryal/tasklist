import React from "react";
import { useDispatch } from "react-redux";
import { removeAll } from "../actions";

function Navbar() {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand font-bold mb-0 h1">Task List</span>
          <button
            type="button"
            className="btn bg-light"
            onClick={() => dispatch(removeAll())}
          >
            Clear All
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
