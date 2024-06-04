import { Grid } from "@mui/material";
import HomePageProductCard from "../../../components/ecommerce/HomePageProductCard";
import products from "../../../products";

const Products = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
           <HomePageProductCard
            id={index+1}
            title={product.title}
            image={`https://source.unsplash.com/random/200x200?sig=${index+1}`}
            salesPrice={product.salesPrice}
            price={product.price}
            rating={product.rating}
           />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
