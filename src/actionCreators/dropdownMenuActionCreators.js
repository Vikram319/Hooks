import {
  GET_DROPDOWN_ITEMS,
  GET_HOC_DROPDOWN_ITEMS,
  GET_RP_DROPDOWN_ITEMS,
  RESET_DROPDOWN_ITEMS,
  RESET_HOC_DROPDOWN_ITEMS,
  RESET_RP_DROPDOWN_ITEMS,
} from "../actions/dropDownMenuActions";
import menu from "../menu.json";

export const getDropdownItems = () => {
  console.info("getDropdownItems");
  return {
    type: GET_DROPDOWN_ITEMS,
    payload: menu,
  };
};
// export const getDropdownItems = () => ({
//   type: GET_DROPDOWN_ITEMS,
//   payload: menu,
// });

export const getHOCDropdownItems = () => ({
  type: GET_HOC_DROPDOWN_ITEMS,
  payload: menu,
});

export const getRPDropdownItems = () => ({
  type: GET_RP_DROPDOWN_ITEMS,
  payload: menu,
});

export const resetDropdownItems = () => ({
  type: RESET_DROPDOWN_ITEMS,
});

export const resetHOCDropdownItems = () => ({
  type: RESET_HOC_DROPDOWN_ITEMS,
});

export const resetRPDropdownItems = () => ({
  type: RESET_RP_DROPDOWN_ITEMS,
});
