import { useState,useEffect,useMemo,useCallback,useContext } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { menuData } from "./data";
import { RestaurantContext } from "./context/RestaurantContext";
import "./App.css";
function App() {
  // useContext
  const restaurant = useContext(RestaurantContext);
  // useState
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  // useEffect
  // Loading default menu items
  useEffect(() => {
    setMenu(menuData);
  }, []);
  // useCallback
  const addToCart = useCallback((item) => {
    setCart((previousCart) => [
      ...previousCart,
      item
    ]);
  }, []);
  const removeFromCart = useCallback((id) => {
    setCart((previousCart) =>
      previousCart.filter(
        (item) => item.id !== id
      )
    );
  }, []);
  // useMemo
  const totalPrice = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price,
      0
    );
  }, [cart]);
  return (
    <>
      <Navbar />
      <Header />
      <div className="container">
        <Menu
          items={menu}
          addToCart={addToCart}
        />
        <Cart
          cartItems={cart}
          removeFromCart={removeFromCart}
          totalPrice={totalPrice}
        />
      </div>
    </>
  );
}
export default App;