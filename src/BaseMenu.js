import React from "react";
import PropTypes from "prop-types";
import "./App.css";

const BaseMenu = (props) => {
  return (
    <div className="menu-container">
      {props.children}

      {console.log("Rendering!", props.pattern)}

      {props.open && (
        <div className="menu-position mt-4">
          <ul className="wrapper">
            {props.items.map((item) => (
              <li className="menu-item" key={item.label}>
                <a className="menu-item-link" href={item.link}>
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

BaseMenu.propTypes = {
  children: PropTypes.node, // The toggle element
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      icon: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  open: PropTypes.bool,
  pattern: PropTypes.string,
};

BaseMenu.defaultProps = {
  children: undefined,
  open: true,
};

export default BaseMenu;
