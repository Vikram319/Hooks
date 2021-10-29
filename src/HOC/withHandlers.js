import React from "react";

const EnhancedComponent = (BaseComponent) => {
  class NewComponent extends React.Component {
    render() {
      const { toggle } = this.props;
      return (
        <BaseComponent
          {...this.props}
          onToggleClick={toggle}
          onEscape={toggle}
        />
      );
    }
  }
  return NewComponent;
};

export default EnhancedComponent;
