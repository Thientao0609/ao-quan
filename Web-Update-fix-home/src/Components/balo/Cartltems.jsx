import React from 'react';
import remove_icon from '../Assets/cart_cross_icon.png';
import './CartItems.css';

class CartItems extends React.Component {
  render() {
    const { cart, removeFromCart } = this.props;

    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Giỏ hàng</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.price.toLocaleString()}đ
                <img
                  src={remove_icon}
                  alt="remove"
                  onClick={() => removeFromCart(item.id)} // Logic xóa sản phẩm khỏi giỏ hàng
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>Giỏ hàng của bạn đang trống.</p>
        )}
      </div>
    );
  }
}

export default CartItems;
