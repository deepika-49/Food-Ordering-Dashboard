import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
    function Navbar() {
    const restaurant = useContext(RestaurantContext);
    return (
        <nav className="navbar">
        <h2>        🍽️ {restaurant.name}
        </h2>
        <span className="restaurant-status">
            {restaurant.status}
        </span>
        </nav>
    );
    }
export default Navbar;