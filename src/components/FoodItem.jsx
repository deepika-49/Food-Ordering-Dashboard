function FoodItem({ item, addToCart }) {
    return (
        <div className="food-card">
        <img
            src={item.image}
            alt={item.name}
        />
        <h3>
            {item.name}
        </h3>
        <p className="price">
            ₹ {item.price}
        </p>
        <button
            className="add-btn"
            onClick={() => addToCart(item)}
        >
            Add to Cart
        </button>
        </div>
    );
}
export default FoodItem;