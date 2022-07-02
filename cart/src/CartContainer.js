import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, total, clearCart } = useGlobalContext();
  const isCartEmpty = cart.length === 0;

  return (
    <section className="cart">
      <header>
        <h2>YOUR BAG</h2>
        {isCartEmpty && <h4 className="empty-cart">is currently empty</h4>}
      </header>
      <div>
        {!isCartEmpty &&
          cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total<span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={clearCart}>
          CLEAR CART
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
