import { Box, CardContent, CardMedia, Link, Typography } from "@mui/material";
import React from "react";

const Card = ({ cardImage,cardTitle,cardSubtitle,cardText}) => {
  return (
    <Box>
      <Link
        href="http://localhost:3000/details"
        sx={{ textDecoration: "none" }}
      >
        {" "}
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          image={cardImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" component="div" color="common.white">
            {cardTitle}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            align="center"
            component="div"
            color="common.black"
          >
            {cardSubtitle}
          </Typography>
          <Typography variant="h6" align="justify" color="common.black">
            {cardText}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default Card;
