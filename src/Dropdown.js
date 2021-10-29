import React from "react";
import BaseMenu from "./BaseMenu";
import { connect } from "react-redux";
import {
  getDropdownItems,
  resetDropdownItems,
} from "./actionCreators/dropdownMenuActionCreators";

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  componentDidMount() {
    this.props.getDropdownItems();
    if (window === undefined) return;
    document.addEventListener("keydown", this.handleEscape);
  }

  componentWillUnmount() {
    this.props.resetDropdownItems();
    if (window === undefined) return;
    document.removeEventListener("keydown", this.handleEscape);
  }

  handleClick() {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  handleEscape(e) {
    if (e && e.keyCode === 27) {
      this.setState({ open: false });
    }
  }

  render() {
    return (
      <BaseMenu items={this.props.items} open={this.state.open}>
        <button
          onClick={this.handleClick}
          className="btn btn-outline-secondary"
        >
          Dropdown
        </button>
      </BaseMenu>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.dropdownItems.items,
});

const mapDispatchToProps = (dispatch) => ({
  getDropdownItems: () => dispatch(getDropdownItems()),
  resetDropdownItems: () => dispatch(resetDropdownItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
