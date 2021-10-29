// import React, { Component } from "react";
// import BaseMenu from "./BaseMenu";
// import { connect } from "react-redux";
// import { getDropdownItems } from "./actionCreators/dropdownMenuActionCreators";

// export class DropdownMenuPractice extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false,
//     };

//     this.handleClick = this.handleClick.bind(this);
//     this.handleEscape = this.handleEscape.bind(this);
//   }
//   componentDidMount() {
//     if (this.props.items.length === 0) {
//       this.props.getDropdownItems();
//     }
//     if (window === "undefined") return;
//     document.addEventListener("keydown", this.handleEscape);
//   }

//   componentWillUnmount() {
//     if (window === "undefined") return;
//     document.removeEventListener("keydown", this.handleEscape);
//   }

//   handleClick() {
//     this.setState({ open: !this.state.open });
//   }

//   handleEscape(event) {
//     event && event.keyCode === 27 && this.setState({ open: false });
//   }

//   render() {
//     return (
//       <BaseMenu items={this.props.items} open={this.state.open}>
//         <button onClick={this.handleClick}>Doropdown</button>
//       </BaseMenu>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   items: state.dropdownItems.items,
// });

// const mapDispatchToProps = (dispatch) => ({
//   getDropdownItems: () => dispatch(getDropdownItems()),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DropdownMenuPractice);

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getDropdownItems } from "./actionCreators/dropdownMenuActionCreators";

// export default function DropdownMenuPractice() {
//   const dispatch = useDispatch(),
//     items = useSelector((state) => state.dropdownItems.items),
//     [open, setState] = useState(false);

//   const handleEscape = (event) => {
//     if (event && event.keyCode === 27) {
//       setState(false);
//     }
//   };
//   useEffect(() => {
//     dispatch(getDropdownItems());
//   }, []);

//   useEffect(() => {
//     if (window !== undefined) {
//       document.addEventListener("keydown", handleEscape);
//     }
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, []);
//   const handleClick = () => {
//     setState(!open);
//   };
//   return (
//     <BaseMenu items={items} open={open}>
//       <button onClick={handleClick}>Doropdown</button>
//     </BaseMenu>
//   );
// }
