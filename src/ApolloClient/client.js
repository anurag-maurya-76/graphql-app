import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const restLink = new RestLink({
  endpoints: "https://myaadhaarstage.uidai.gov.in/masterDataManagement/graphql",
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([restLink]),
});
