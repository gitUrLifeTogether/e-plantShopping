import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-container">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>

            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <h2>Total Plants: {totalQuantity}</h2>

              <h2>
                Total Cost: ${totalAmount.toFixed(2)}
              </h2>
            </div>

            <div className="cart-items">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <div className="cart-card" key={item.id}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />

                    <div className="cart-details">
                      <h2>{item.name}</h2>

                      <p>
                        Unit Price: ${item.price.toFixed(2)}
                      </p>

                      <p>
                        Total: ${itemTotal.toFixed(2)}
                      </p>

                      <div className="quantity-controls">
                        <button
                          onClick={() => handleDecrease(item.id)}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="delete-button"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="cart-actions">
              <Link to="/plants" className="continue-button">
                Continue Shopping
              </Link>

              <button
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default CartItem;