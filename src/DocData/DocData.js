import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { AgeGroups, DocDataGQL, EnrolmentModes } from "../Constants/DocData";
import { DocDataNewGQL } from "../Constants/DocDataDirect";
import CustomMultiDropDown from "../Component/CustomMultiDropDown";
import { getDocDataQuery } from "./utils";
export const DocData = () => {
  //   const [getDocData, { loading, error }] = useLazyQuery(
  //     DocDataGQL.GET_DOC_DATA,
  //     {
  //       variables: {
  //         ageGroups: [AgeGroups.ALL, AgeGroups.ABOVE18],
  //         enrolmentModes: [EnrolmentModes.NEW],
  //       },
  //     }
  //   );
  const [selectedAgeGroup, setSelectedAgeGroup] = useState();
  const [selectedEnrolment, setSelectedEnrolment] = useState();
  const [getDocDataDirect] = useLazyQuery(DocDataNewGQL.ABOVE18);
  useEffect(() => {
    let docDataQuery = getDocDataQuery(
      selectedAgeGroup?.key,
      selectedEnrolment?.key
    );
    if (docDataQuery != null) {
      getDocDataDirect(docDataQuery);
    }
  }, [getDocDataDirect, selectedAgeGroup, selectedEnrolment]);
  return (
    <div>
      <CustomMultiDropDown
        className="doc-add-docs__next-assignee"
        label="State"
        required="required"
        isMulti={false}
        options={[
          {
            value: "Above 18",
            key: AgeGroups.ABOVE18,
          },
          {
            value: "Below 18",
            key: AgeGroups.BELOW18,
          },
          {
            value: "Below 5",
            key: AgeGroups.BELOW5,
          },
        ]}
        getOptionLabel={(e) => e?.value}
        getOptionValue={(e) => e?.value}
        onChange={(e) => {
          setSelectedAgeGroup(e);
        }}
      />
      <CustomMultiDropDown
        className="doc-add-docs__next-assignee"
        label="State"
        required="required"
        isMulti={false}
        options={[
          {
            value: "New",
            key: EnrolmentModes.NEW,
          },
          {
            value: "Update",
            key: EnrolmentModes.UPDATE,
          },
        ]}
        getOptionLabel={(e) => e?.value}
        getOptionValue={(e) => e?.value}
        onChange={(e) => {
          setSelectedEnrolment(e);
        }}
      />
    </div>
  );
};
