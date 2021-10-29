/* eslint-disable react/prop-types */
import React from "react";

const withOnClick = (BaseComponent) => {
  class NewComponent extends React.Component {
    render() {
      return (
        <BaseComponent {...this.props}>
          {React.cloneElement(this.props.children, {
            onClick: this.props.onToggleClick,
          })}
        </BaseComponent>
      );
    }
  }
  return NewComponent;
};

export default withOnClick;
