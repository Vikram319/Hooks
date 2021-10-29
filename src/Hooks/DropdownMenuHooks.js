import React, { useCallback } from "react";
import PropTypes from "prop-types";
import useToggle from "./useToggle";
import useEscape from "./useEscape";

import BaseMenu from "./../BaseMenu";

const DropdownMenuHooks = (props) => {
  const [open, toggle] = useToggle(props.defaultOpen);
  const close = useCallback(() => toggle(false), [toggle]);
  useEscape(close, !props.closeOnEscape);

  return (
    <BaseMenu
      items={props.items}
      pattern={props.pattern}
      onItemClick={toggle}
      open={open}
      offsetTop={20}
    >
      {React.cloneElement(props.children, { onClick: toggle })}
    </BaseMenu>
  );
};

DropdownMenuHooks.propTypes = {
  children: PropTypes.node.isRequired,
  closeOnEscape: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  items: BaseMenu.propTypes.items,
};

DropdownMenuHooks.defaultProps = {
  closeOnEscape: false,
  defaultOpen: false,
  items: [],
};

export default DropdownMenuHooks;
