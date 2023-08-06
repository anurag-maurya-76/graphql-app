import { EnrolmentModes } from "../Constants/DocData";
import {
  AgeGroups,
  DocDataNewGQL,
  DocDataUpdateGQL,
} from "../Constants/DocDataDirect";

export const getDocDataQuery = (ageGroup, enrolmentMode) => {
  let queryType = null;
  switch (enrolmentMode) {
    case EnrolmentModes.NEW:
      switch (ageGroup) {
        case AgeGroups.ABOVE18:
          queryType = DocDataNewGQL.ABOVE18;
          break;
        case AgeGroups.BELOW18:
          queryType = DocDataNewGQL.BELOW18;
          break;
        case AgeGroups.BELOW5:
          queryType = DocDataNewGQL.BELOW5;
          break;
        default:
      }
      break;
    case EnrolmentModes.UPDATE:
      switch (ageGroup) {
        case AgeGroups.ABOVE18:
          queryType = DocDataUpdateGQL.ABOVE18;
          break;
        case AgeGroups.BELOW18:
          queryType = DocDataUpdateGQL.BELOW18;
          break;
        case AgeGroups.BELOW5:
          queryType = DocDataUpdateGQL.BELOW5;
          break;
        default:
      }
      break;
    default:
  }
  return queryType;
};
