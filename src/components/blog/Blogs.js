import React from "react";

import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import {GET_BLOGS_INFO} from "../../graphql/queries"
import CardEL from "../shared/CardEL";
import Loader from "../shared/Loader";

const Blogs = () => {
  const { loading, data, errors } = useQuery(GET_BLOGS_INFO);

  if (loading) return <Loader/>;

  if (errors) return <h4>Error...</h4>;
  

  return (
    <Grid container spacing={2}>
      {data.posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6} md={4} >
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Blogs;
