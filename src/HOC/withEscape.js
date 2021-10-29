import React, { Component } from "react";

const ESCAPE_KEY = 27;

const EnhancedComponent = (BaseComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.handleEscape = this.handleEscape.bind(this);
    }

    componentDidMount() {
      if (this.props.closeOnEscape) {
        document.addEventListener("keydown", this.handleEscape);
      }
    }

    componentWillUnmount() {
      if (this.props.closeOnEscape) {
        document.removeEventListener("keydown", this.handleEscape);
      }
    }

    handleEscape(event) {
      if (event.keyCode === ESCAPE_KEY) {
        this.props.onEscape(false);
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }
  return NewComponent;
};

export default EnhancedComponent;
