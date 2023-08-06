import { gql } from "@apollo/client";

export const PincodeManagementGQL = {
  GET_ALL_STATE: gql`
    query getAllState($pincode: String) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          stateName
        }
      }
    }
  `,
  GET_PINCODE_DETAILS: gql`
    query getPincodeDetails($pincode: String!) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          stateName
          districtInfo {
            districtName
            subDistrictInfo {
              subDistrictName
              villageInfo {
                villageName
                postofficeInfo {
                  postOfficeName
                }
              }
            }
          }
        }
      }
    }
  `,
  GET_ALL_DISTRICT: gql`
    query getAllState($pincode: String) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          districtInfo {
            districtName
          }
        }
      }
    }
  `,
  GET_ALL_SUB_DISTRICT: gql`
    query getAllState($pincode: String) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          districtInfo {
            subDistrictInfo {
              subDistrictName
            }
          }
        }
      }
    }
  `,
  GET_ALL_VILLAGE: gql`
    query getAllState($pincode: String) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          districtInfo {
            subDistrictInfo {
              villageInfo {
                villageName
              }
            }
          }
        }
      }
    }
  `,
  GET_ALL_POSTOFFICE: gql`
    query getAllState($pincode: String) {
      pincodeDetails(pincode: $pincode) {
        stateInfo {
          districtInfo {
            subDistrictInfo {
              villageInfo {
                postofficeInfo {
                  postOfficeName
                }
              }
            }
          }
        }
      }
    }
  `,
};
