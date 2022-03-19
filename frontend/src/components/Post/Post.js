import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Post = ({ post: { title, body, userId }, index }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="180"
        image="https://via.placeholder.com/200x200"
        alt="Post"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Post;
