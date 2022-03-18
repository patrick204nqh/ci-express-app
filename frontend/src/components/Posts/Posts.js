import React from "react";
import { styled } from '@mui/material/styles';
import Post from "../Post/Post";
import Grid from '@mui/material/Grid';

import { useQuery, gql } from "@apollo/client";

const POSTS_QUERY = gql`
  query GetPosts {
    posts {
      id
      title
      body
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(POSTS_QUERY);

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {data.posts.map((post, index) => (
        <Grid item xs={2} sm={4} md={4} key={index} >
            <Post index={index} post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
