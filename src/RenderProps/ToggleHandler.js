import React from "react";
import PropTypes from "prop-types";

class ToggleHandler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this.props.defaultOpen,
    };

    this.toggle = this.toggle.bind(this);
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return this.state.value != nextState.value;
  //   }

  toggle(updateState) {
    this.setState((state) => ({
      open: updateState && !state.open,
    }));
  }

  render() {
    return this.props.children(this.toggle, this.state.open);
  }
}

export default ToggleHandler;
