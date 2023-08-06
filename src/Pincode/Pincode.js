import React, { useReducer, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { PincodeManagementGQL } from "../Constants/PincodeManagementGQL";
import CustomMultiDropDown from "../Component/CustomMultiDropDown";
import {
  fetchDistrict,
  fetchPostOffice,
  fetchState,
  fetchSubDistrict,
  fetchVillage,
} from "./utils";
import { PincodeReducer, defaultState } from "./PincodeReducer/PincodeReducer";
import {
  RESET_PINCODE_DETAILS,
  UPDATE_SELECTED_DISTRICT,
  UPDATE_SELECTED_POSTOFFICE,
  UPDATE_SELECTED_STATE,
  UPDATE_SELECTED_SUBDISTRICT,
  UPDATE_SELECTED_VILLAGE,
} from "./PincodeReducer/PincodeActions";
import CustomTextField from "../Component/CustomTextField";

function Pincode() {
  const [stateData, setStateData] = useState();
  const [districtData, setDistrictData] = useState();
  const [subDistrictData, setSubDistrictData] = useState();
  const [villageData, setVillageData] = useState();
  const [postOfficeData, setpostOfficeData] = useState();
  const [getPincodeDetails, { loading, error }] = useLazyQuery(
    PincodeManagementGQL.GET_PINCODE_DETAILS
  );
  const [pincodeDetailsLoaded, setPincodeDetailsLoaded] = useState(false);
  const [pincodeState, pincodeDispatch] = useReducer(
    PincodeReducer,
    defaultState
  );

  const fetchPincodeData = async (pincode) => {
    setPincodeDetailsLoaded(false);
    if (pincode.length === 6) {
      let response = await getPincodeDetails({
        variables: { pincode },
      });
      if (!loading && !error) {
        pincodeDispatch(defaultState, {
          action: RESET_PINCODE_DETAILS,
          payload: null,
        });
        setStateData(fetchState(response.data?.pincodeDetails.stateInfo));
        setPincodeDetailsLoaded(true);
      }
    }
  };

  return (
    <div>
      <CustomTextField
        className="doc-add-docs__doc-name"
        type="text"
        required="required"
        label="Pincode"
        placeholder="Enter Pincode"
        onChange={(e) => fetchPincodeData(e)}
      />
      {pincodeDetailsLoaded && (
        <div style={{ display: "flex" }}>
          <CustomMultiDropDown
            className="doc-add-docs__next-assignee"
            label="State"
            required="required"
            isMulti={false}
            options={stateData?.stateList}
            getOptionLabel={(e) => e?.value}
            getOptionValue={(e) => e?.value}
            onChange={(e) => {
              pincodeDispatch(defaultState, {
                action: UPDATE_SELECTED_STATE,
                payload: e.value,
              });
              setDistrictData(fetchDistrict(stateData?.stateInfo, e.value));
            }}
          />
          <CustomMultiDropDown
            className="doc-add-docs__next-assignee"
            label="District"
            required="required"
            isMulti={false}
            options={districtData?.districtList}
            getOptionValue={(e) => e?.value}
            getOptionLabel={(e) => e?.value}
            onChange={(e) => {
              pincodeDispatch(defaultState, {
                action: UPDATE_SELECTED_DISTRICT,
                payload: e.value,
              });
              setSubDistrictData(
                fetchSubDistrict(districtData?.districtInfo, e.value)
              );
            }}
          />
          <CustomMultiDropDown
            className="doc-add-docs__next-assignee"
            label="Sub District"
            required="required"
            isMulti={false}
            options={subDistrictData?.subDistrictList}
            getOptionLabel={(e) => e?.value}
            getOptionValue={(e) => e?.value}
            onChange={(e) => {
              pincodeDispatch(defaultState, {
                action: UPDATE_SELECTED_SUBDISTRICT,
                payload: e.value,
              });
              setVillageData(
                fetchVillage(subDistrictData?.subDistrictInfo, e.value)
              );
            }}
          />
          <CustomMultiDropDown
            className="doc-add-docs__next-assignee"
            label="Village"
            required="required"
            isMulti={false}
            getOptionLabel={(e) => e?.value}
            options={villageData?.villageList}
            getOptionValue={(e) => e?.value}
            onChange={(e) => {
              pincodeDispatch(defaultState, {
                action: UPDATE_SELECTED_VILLAGE,
                payload: e.value,
              });
              setpostOfficeData(
                fetchPostOffice(villageData?.villageInfo, e.value)
              );
            }}
          />
          <CustomMultiDropDown
            className="doc-add-docs__next-assignee"
            label="Post Office"
            required="required"
            isMulti={false}
            options={postOfficeData?.postOfficeList}
            getOptionLabel={(e) => e?.value}
            getOptionValue={(e) => e?.value}
            onChange={(e) => {
              pincodeDispatch(defaultState, {
                action: UPDATE_SELECTED_POSTOFFICE,
                payload: e.value,
              });
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Pincode;
