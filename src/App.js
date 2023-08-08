import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Pincode from "./Pincode/Pincode";
import { mdmClient, pincodeClient } from "./ApolloClient/client";
import { DocData } from "./DocData/DocData";
import { Appointment } from "./Appointment/Appointment";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Appointment />
      </QueryClientProvider>
      {/* <ApolloProvider client={pincodeClient}>
        <Pincode />
      </ApolloProvider>
      <ApolloProvider client={mdmClient}>
        <DocData />
      </ApolloProvider> */}
    </div>
  );
}

export default App;
