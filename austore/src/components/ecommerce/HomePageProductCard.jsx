import {
  Avatar,
  CardContent,
  Fab,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ShoppingBasket } from "@mui/icons-material";
import CardComponent from "../Card";
import { Link } from "react-router-dom";

const HomePageProductCard = ({
  title,
  image,
  tooltip,
  salesPrice,
  price,
  rating,
  id,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Link to={`/detail/${id}`}>
      <CardComponent
        className="border border-solid hover:cursor-pointer"
        style={{
          boxShadow: !hover ? "0 20px 40px rgba(0, 0, 0, 0.3)" : "none",
          transition: "box-shadow 0.3s ease-in-out",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Avatar
          src={image}
          variant="square"
          sx={{
            height: 250,
            width: "100%",
          }}
        />

        <Tooltip title={tooltip ?? "Sepete Ekle"}>
          <Fab
            size="small"
            color="primary"
            className="absolute z-10"
            sx={{
              bottom: "75px",
              right: "15px",
              position: "absolute",
              zIndex: "0",
            }}
          >
            {<ShoppingBasket />}
          </Fab>
        </Tooltip>
        <CardContent sx={{ p: 3, pt: 2 }}>
          <Typography variant="h6">{title}s</Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={1}
          >
            <Stack direction="row" alignItems="center">
              <Typography variant="h6">${price}</Typography>
              {salesPrice && (
                <Typography
                  color="textSecondary"
                  ml={1}
                  sx={{ textDecoration: "line-through" }}
                >
                  $s{salesPrice}
                </Typography>
              )}
            </Stack>
            <Rating name="read-only" size="small" value={rating} readOnly />
          </Stack>
        </CardContent>
      </CardComponent>
    </Link>
  );
};

export default HomePageProductCard;
