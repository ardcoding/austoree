import {
  Avatar,
  CardContent,
  Fab,
  Rating,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import CardComponent from "../Card";
import { ShoppingBasket } from "@mui/icons-material";

const ProductCard = ({ title, image, tooltip, salesPrice, price, rating }) => {
  return (
    <CardComponent className="border border-solid hover:cursor-pointer">
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
                ${salesPrice}
              </Typography>
            )}
          </Stack>
          <Rating name="read-only" size="small" value={rating} readOnly />
        </Stack>
      </CardContent>
    </CardComponent>
  );
};

export default ProductCard;
