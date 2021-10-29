import React, { Component } from "react";

export const Example = () => {
  return <h1>I'm a functional component</h1>;
};

export function Example1() {
  return <h1>I'm a functional Component</h1>;
}

import React, { Component } from "react";

export class ExampleComponent extends Component {
  render() {
    return <h1>I'm a class component</h1>;
  }
}
