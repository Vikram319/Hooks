import React, { Component } from "react";
import { connect } from "react-redux";
import { getRPDropdownItems } from "../actionCreators/dropdownMenuActionCreators";
import DropdownMenuRP from "./DropdownMenuRP";
class RPImplementation extends Component {
  componentDidMount() {
    this.props.getRPDropdownItems();
  }
  render() {
    return (
      <DropdownMenuRP
        items={this.props.items}
        closeOnEscape
        pattern="Render Prop"
      >
        {({ toggle }) => (
          <button onClick={toggle} className="btn btn-outline-secondary">
            RP Dropdown
          </button>
        )}
      </DropdownMenuRP>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.dropdownItems.rpItems,
});
const mapDispatchToProps = (dispatch) => ({
  getRPDropdownItems: () => dispatch(getRPDropdownItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(RPImplementation);
