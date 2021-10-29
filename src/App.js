import "./App.css";
import HOCImplementation from "./HOC/HOCImplementation";
import RPImplementation from "./RenderProps/RPImplementation";
import HooksImplementation from "./Hooks/HooksImplementation";
import React from "react";
import Dropdown from "./Dropdown";
import DropdownHooks from "./DropdownHooks";

const App = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <RPImplementation />
          </div>
          <div className="col">
            <HOCImplementation />
          </div>

          <div className="col">
            <HooksImplementation />
          </div>
          {/* <div className="col">
            <DropdownHooks />
          </div> */}
          {/* <div className="col">
            <Dropdown />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default App;
