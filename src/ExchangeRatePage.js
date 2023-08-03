import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query proofDetails @rest(ageGroups: [BELOW18, ALL], enrolmentModes: [NEW]) {
    docName
  }
`;
function ExchangeRatePage() {
  const { data, loading, error } = useQuery(EXCHANGE_RATES);
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  console.log(data);
  //   [...Object.keys(data.openExchangeRates.rates)].map((key) => {
  //     let value = data.openExchangeRates.rates[key];
  //     result.push({
  //       key: key,
  //       value: value,
  //     });
  //   });
  //   return (
  //     <div>
  //       {result.map((v, k) => {
  //         return (
  //           <div key={k}>
  //             {v.key} = {v.value}
  //           </div>
  //         );
  //       })}
  //     </div>
  //   );
}

export default ExchangeRatePage;
