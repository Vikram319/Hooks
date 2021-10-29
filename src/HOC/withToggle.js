import React from "react";
import PropTypes from "prop-types";

const EnhancedComponent = (BaseComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        open: this.props.defaultOpen,
      };

      this.toggle = this.toggle.bind(this);
    }

    toggle(updateState) {
      this.setState((state) => ({
        open: updateState && !state.open,
      }));
    }

    render() {
      return (
        <BaseComponent
          {...this.props}
          open={this.state.open}
          toggle={this.toggle}
        />
      );
    }
  }
  return NewComponent;
};

export default EnhancedComponent;
