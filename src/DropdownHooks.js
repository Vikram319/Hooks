import React, { useEffect, useState } from "react";
import BaseMenu from "./BaseMenu";
import { useSelector, useDispatch } from "react-redux";
import {
  getDropdownItems,
  resetDropdownItems,
} from "./actionCreators/dropdownMenuActionCreators";

const DropdownHooks = () => {
  const dispatch = useDispatch(),
    items = useSelector((state) => state.dropdownItems.items),
    [open, setState] = useState(false);

  useEffect(() => {
    dispatch(getDropdownItems());
    return () => {
      dispatch(resetDropdownItems());
    };
  }, []);

  useEffect(() => {
    if (window === undefined) return;
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  });
  const handleClick = () => {
    setState(!open);
  };

  const handleEscape = (event) => {
    if (event && event.keyCode === 27) {
      setState(false);
    }
  };

  return (
    <BaseMenu items={items} open={open}>
      <button onClick={handleClick} className="btn btn-outline-secondary">
        Dropdown
      </button>
    </BaseMenu>
  );
};

export default DropdownHooks;
