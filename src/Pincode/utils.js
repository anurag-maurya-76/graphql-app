export const fetchState = (stateInfo) => {
  let stateData = {};
  let stateList = [];
  stateInfo.forEach((stateInfo) => {
    stateList.push({
      key: stateInfo.stateName,
      value: stateInfo.stateName,
    });
  });
  stateData = { stateList, stateInfo };
  return stateData;
};

export const fetchDistrict = (stateInfo, stateName) => {
  let districtData = {};

  stateInfo.forEach((stateInfo) => {
    if (stateInfo.stateName === stateName) {
      let districtInfo = stateInfo.districtInfo;

      let districtList = [];

      districtInfo.forEach((districtInfo) => {
        districtList.push({
          key: districtInfo.districtName,
          value: districtInfo.districtName,
        });
      });

      districtData = { districtList, districtInfo };
    }
  });
  return districtData;
};
export const fetchSubDistrict = (districtInfo, districtName) => {
  let subDistrictData = {};

  districtInfo.forEach((districtInfo) => {
    if (districtInfo.districtName === districtName) {
      let subDistrictInfo = districtInfo.subDistrictInfo;

      let subDistrictList = [];

      subDistrictInfo.forEach((subDistrictInfo) => {
        subDistrictList.push({
          key: subDistrictInfo.subDistrictName,
          value: subDistrictInfo.subDistrictName,
        });
      });

      subDistrictData = { subDistrictList, subDistrictInfo };
    }
  });
  return subDistrictData;
};
export const fetchVillage = (subDistrictInfo, subDistrictName) => {
  let villageData = {};

  subDistrictInfo.forEach((subDistrictInfo) => {
    if (subDistrictInfo.subDistrictName === subDistrictName) {
      let villageInfo = subDistrictInfo.villageInfo;

      let villageList = [];

      villageInfo.forEach((villageInfo) => {
        villageList.push({
          key: villageInfo.villageName,
          value: villageInfo.villageName,
        });
      });

      villageData = { villageList, villageInfo };
    }
  });
  return villageData;
};
export const fetchPostOffice = (villageInfo, villageName) => {
  let postOfficeData = {};

  villageInfo.forEach((villageInfo) => {
    if (villageInfo.villageName === villageName) {
      let postofficeInfo = villageInfo.postofficeInfo;

      let postOfficeList = [];
      postofficeInfo.forEach((postofficeInfo) => {
        postOfficeList.push({
          key: postofficeInfo.postOfficeName,
          value: postofficeInfo.postOfficeName,
        });
      });

      postOfficeData = { postOfficeList, postofficeInfo };
    }
  });
  return postOfficeData;
};
