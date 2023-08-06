import "./App.css";
import { ApolloProvider } from "@apollo/client";
import Pincode from "./Pincode/Pincode";
import { pincodeClient } from "./ApolloClient/client";

function App() {
  return (
    <ApolloProvider client={pincodeClient}>
      <div className="App">
        <Pincode />
      </div>
    </ApolloProvider>
  );
}

export default App;
