import { gql } from "@apollo/client";

export const DocDataNewGQL = {
  ABOVE18: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, ABOVE18], enrolmentModes: [NEW]) {
        docName
      }
    }
  `,
  BELOW18: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, BELOW18], enrolmentModes: [NEW]) {
        docName
      }
    }
  `,
  BELOW5: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, BELOW5], enrolmentModes: [NEW]) {
        docName
      }
    }
  `,
};
export const DocDataUpdateGQL = {
  ABOVE18: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, ABOVE18], enrolmentModes: [UPDATE]) {
        docName
      }
    }
  `,
  BELOW18: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, BELOW18], enrolmentModes: [UPDATE]) {
        docName
      }
    }
  `,
  BELOW5: gql`
    query getDocData {
      proofDetails(ageGroups: [ALL, BELOW5], enrolmentModes: [UPDATE]) {
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
