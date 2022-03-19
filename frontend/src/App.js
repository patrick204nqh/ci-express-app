import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from "./graphql/client";

import Box from '@mui/material/Grid';
import Container from '@mui/material/Grid';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Blog from "./components/Pages/Blog";

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Container width="80%">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              // <Route path="/blogs/" element={<Blog />} />
          </Routes>
          </Container>
        </Box>
      </ApolloProvider>
    </Router>
  );
};

export default App;
