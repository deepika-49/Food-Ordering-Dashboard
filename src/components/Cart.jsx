import CartItem from "./CartItem";
function Cart({ cartItems, removeFromCart, totalPrice }) {
    return (
        <div className="cart-section">
        <h2 className="cart-title">
            🛒 Cart
        </h2>
        {
            cartItems.length === 0 ? (
            <p>
                Your cart is empty
            </p>
            ) : (
            cartItems.map((item) => (
                <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                />
            ))
            )
        }
        <hr />
        <h3 className="total">
            Total: ₹ {totalPrice}
        </h3>
        </div>
    );
}
export default Cart;