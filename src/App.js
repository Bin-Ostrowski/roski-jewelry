import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
// import Detail from "./pages/Detail"; //product page

function App() {
  return (
    // <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> what is this? */}
            <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/login" element={<Login />} /> */}
              {/* <Route path="/signup" element={<Signup />} />
              <Route path="/orderHistory" element={<OrderHistory />} /> */}
              {/* <Route path="/products/:id" element={<Detail />} /> */}
              <Route path="*" element={<NoMatch />} />
            </Routes>
          {/* </StoreProvider> */}
        </div>
      </Router>
    // </ApolloProvider>
  );
}

export default App;
