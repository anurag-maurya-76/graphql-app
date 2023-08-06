import {
  UPDATE_SELECTED_STATE,
  UPDATE_SELECTED_DISTRICT,
  UPDATE_SELECTED_SUBDISTRICT,
  UPDATE_SELECTED_POSTOFFICE,
  UPDATE_SELECTED_VILLAGE,
  RESET_PINCODE_DETAILS,
} from "./PincodeActions";

export const defaultState = {
  selectedState: null,
  selectedDistrict: null,
  selectedSubdistrict: null,
  selectedVillage: null,
  selectedPostOffice: null,
};

export const PincodeReducer = (currentState = defaultState, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_STATE:
      return {
        ...currentState,
        selectedState: action.payload,
      };

    case UPDATE_SELECTED_DISTRICT:
      return {
        ...currentState,
        selectedDistrict: action.payload,
      };

    case UPDATE_SELECTED_SUBDISTRICT:
      return {
        ...currentState,
        selectedSubdistrict: action.payload,
      };

    case UPDATE_SELECTED_VILLAGE:
      return {
        ...currentState,
        selectedVillage: action.payload,
      };

    case UPDATE_SELECTED_POSTOFFICE:
      return {
        ...currentState,
        selectedPostOffice: action.payload,
      };
    case RESET_PINCODE_DETAILS:
      return {
        selectedState: null,
        selectedDistrict: null,
        selectedSubdistrict: null,
        selectedVillage: null,
        selectedPostOffice: null,
      };

    default:
      return currentState;
  }
};
