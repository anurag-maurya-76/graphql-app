import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const mdmClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `https://myaadhaarstage.uidai.gov.in/masterDataManagement/graphql`,
  }),
});
export const pincodeClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `https://myaadhaarstage.uidai.gov.in/pincode/graphql`,
  }),
});
