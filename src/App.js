import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const items = await commerce.cart.add(productId, quantity);
    setCart(items.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const items = await commerce.cart.update(productId, { quantity });
    setCart(items.cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const items= await commerce.cart.remove(productId);
    setCart(items.cart);
  };

  const handleEmptyCart = async () => {
    const items = await commerce.cart.empty();
    setCart(items.cart);
  };

  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout" >
              <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
