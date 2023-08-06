import { gql } from "@apollo/client";

export const DocDataGQL = {
  GET_DOC_DATA: gql`
    query getDocData($ageGroups: List!, $enrolmentModes: List!) {
      proofDetails(ageGroups: $ageGroups, enrolmentModes: $enrolmentModes) {
        docName
      }
    }
  `,
};

export const AgeGroups = {
  ALL: "ALL",
  ABOVE18: "ABOVE18",
  BELOW18: "BELOW18",
  BELOW5: "BELOW5",
};
export const EnrolmentModes = {
  NEW: "NEW",
  UPDATE: "UPDATE",
};
