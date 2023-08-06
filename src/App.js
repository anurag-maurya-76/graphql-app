import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Pincode from "./Pincode/Pincode";
import { mdmClient, pincodeClient } from "./ApolloClient/client";
import { DocData } from "./DocData/DocData";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={pincodeClient}>
        <Pincode />
      </ApolloProvider>
      <ApolloProvider client={mdmClient}>
        <DocData />
      </ApolloProvider>
    </div>
  );
}

export default App;
