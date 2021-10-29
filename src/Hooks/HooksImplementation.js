import DropdownMenuHooks from "./DropdownMenuHooks";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getDropdownItems } from "../actionCreators/dropdownMenuActionCreators";

const HooksImplementation = () => {
  const dispatch = useDispatch();
  const [items] = useSelector((state) => [state.dropdownItems.items]);
  useEffect(() => {
    dispatch(getDropdownItems());
  }, [dispatch]);
  return (
    <DropdownMenuHooks items={items} closeOnEscape pattern="Hooks">
      <button className="btn btn-outline-secondary">Hooks Dropdown</button>
    </DropdownMenuHooks>
  );
};

export default HooksImplementation;
