import React from "react";
import PropTypes from "prop-types";

import ToggleHandler from "./ToggleHandler";
import Escape from "./Escape";

import BaseMenu from "../BaseMenu";

class DropdownMenuRP extends React.Component {
  render() {
    const { props } = this;
    return (
      <ToggleHandler defaultOpen={props.defaultOpen}>
        {(toggle, open) => {
          return (
            <>
              <Escape onEscape={() => toggle(false)} />
              <BaseMenu items={props.items} open={open} pattern={props.pattern}>
                {props.children({ toggle })}
              </BaseMenu>
            </>
          );
        }}
      </ToggleHandler>
    );
  }
}

DropdownMenuRP.propTypes = {
  children: PropTypes.func.isRequired,
  closeOnEscape: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  items: BaseMenu.propTypes.items,
};

DropdownMenuRP.defaultProps = {
  closeOnEscape: false,
  defaultOpen: false,
  items: [],
};

export default DropdownMenuRP;
