import React from "react";
import loadable from '@loadable/component'

import { Grid } from "@material-ui/core";

import useStyle from "./style";

const Product = loadable(()=>  import("./Product/Product")) ;

const Products = ({ products, onAddToCart }) => {
  const classes = useStyle();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
