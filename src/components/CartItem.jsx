function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
        <div>
            <strong>
            {item.name}
            </strong>
            <p>
            ₹ {item.price}
            </p>
        </div>
        <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
        >
            Remove
        </button>
        </div>
    );
}
export default CartItem;