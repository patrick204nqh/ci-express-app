import React from "react";
import { client } from "./graphql/client";
import { ApolloProvider } from '@apollo/client';

import Box from '@mui/material/Grid';
import Container from '@mui/material/Grid';
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="xl">
          <Navbar />
          <Posts />
        </Container>
      </Box>
    </ApolloProvider>
  );
};

export default App;
