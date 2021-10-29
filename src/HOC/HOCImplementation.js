import React, { Component } from "react";
import { connect } from "react-redux";
import DropdownMenuWithHOCs from "./DropdownMenuHOC";
import { getHOCDropdownItems } from "../actionCreators/dropdownMenuActionCreators";
class HOCImplementation extends Component {
  componentDidMount() {
    this.props.getHOCDropdownItems();
  }
  render() {
    return (
      <DropdownMenuWithHOCs
        items={this.props.items}
        closeOnEscape
        pattern="HOC"
      >
        <button className="btn btn-outline-secondary"> HOC Dropdown</button>
      </DropdownMenuWithHOCs>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.dropdownItems.hocItems,
});
const mapDispatchToProps = (dispatch) => ({
  getHOCDropdownItems: () => dispatch(getHOCDropdownItems()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HOCImplementation);
