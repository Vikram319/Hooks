import {
  GET_DROPDOWN_ITEMS,
  GET_HOC_DROPDOWN_ITEMS,
  GET_RP_DROPDOWN_ITEMS,
  RESET_DROPDOWN_ITEMS,
  RESET_RP_DROPDOWN_ITEMS,
  RESET_HOC_DROPDOWN_ITEMS,
} from "../actions/dropDownMenuActions";
const initialState = {
  rpItems: [],
  hocItems: [],
  items: [],
};

export const dropdownMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DROPDOWN_ITEMS:
      return { ...state, items: action.payload };

    case GET_HOC_DROPDOWN_ITEMS:
      return { ...state, hocItems: action.payload };

    case GET_RP_DROPDOWN_ITEMS:
      return { ...state, rpItems: action.payload };

    case RESET_DROPDOWN_ITEMS:
      return { ...state, items: initialState.items };

    case RESET_RP_DROPDOWN_ITEMS:
      return { ...state, items: initialState.rpItems };

    case RESET_HOC_DROPDOWN_ITEMS:
      return { ...state, items: initialState.hocItems };

    default:
      return state;
  }
};
