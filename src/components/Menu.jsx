import FoodItem from "./FoodItem";
function Menu({ items, addToCart }) {
    return (
        <div className="menu-section">
        <h2 className="menu-title">
            🍽️ Menu
        </h2>
        <div className="food-container">
            {items.map((item) => (
            <FoodItem
                key={item.id}
                item={item}
                addToCart={addToCart}
            />
            ))}
        </div>
        </div>
    );
}
export default Menu;