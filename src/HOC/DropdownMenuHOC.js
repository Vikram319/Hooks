import PropTypes from "prop-types";

import withHandlers from "./withHandlers";
import withToggle from "./withToggle";
import withEscape from "./withEscape";
import withOnClick from "./withOnClick";
import BaseMenu from "../BaseMenu";

const DropdownMenuWithHOCs = withToggle(
  withHandlers(withEscape(withOnClick(BaseMenu)))
);

DropdownMenuWithHOCs.propTypes = {
  closeOnEscape: PropTypes.bool,
  defaultOpen: PropTypes.bool,
};

DropdownMenuWithHOCs.defaultProps = {
  closeOnEscape: false,
  defaultOpen: false,
};

export default DropdownMenuWithHOCs;
