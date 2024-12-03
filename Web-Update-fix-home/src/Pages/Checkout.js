// Checkout.js
import React from 'react';
import './Checkout.css'; // Thêm file CSS cho trang thanh toán nếu cần

const Checkout = () => {
    return (
        <div className="checkout-page">
            <h1>Thanh toán</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Họ và tên</label>
                    <input type="text" id="name" placeholder="Nhập họ và tên của bạn" />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Địa chỉ giao hàng</label>
                    <input type="text" id="address" placeholder="Nhập địa chỉ giao hàng" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Số điện thoại</label>
                    <input type="tel" id="phone" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group">
                    <label htmlFor="payment">Phương thức thanh toán</label>
                    <select id="payment">
                        <option value="card">Thẻ tín dụng</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <button type="submit">Thanh toán</button>
            </form>
        </div>
    );
};

export default Checkout;
