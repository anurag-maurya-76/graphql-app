import "./App.css";
import { ApolloProvider } from "@apollo/client";
import ExchangeRatePage from "./ExchangeRatePage";
import { client } from "./ApolloClient/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <ExchangeRatePage />
      </div>
    </ApolloProvider>
  );
}

export default App;
