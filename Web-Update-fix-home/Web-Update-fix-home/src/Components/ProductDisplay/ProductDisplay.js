import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Contexts/ShopContext';
import { useNavigate } from 'react-router-dom'; // Dùng để điều hướng

const ProductDisplay = (props) => {
    const { product } = props; // Sản phẩm được truyền từ props
    const { addToCart } = useContext(ShopContext); // Hàm thêm vào giỏ hàng từ context
    const [selectedSize, setSelectedSize] = useState(null); // Trạng thái lưu kích thước được chọn
    const navigate = useNavigate(); // Dùng để điều hướng khi mua ngay

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Vui lòng chọn kích thước trước khi thêm vào giỏ hàng.');
            return;
        }
        addToCart(product.id, selectedSize); // Truyền size vào hàm addToCart
        alert(`Đã thêm ${product.name} (Kích thước: ${selectedSize}) vào giỏ hàng!`);
    };

    const handleBuyNow = () => {
        if (!selectedSize) {
            alert('Vui lòng chọn kích thước trước khi mua.');
            return;
        }
        addToCart(product.id, selectedSize); // Thêm vào giỏ hàng (có thể cần cho bước thanh toán)
        navigate('/checkout'); // Chuyển hướng tới trang thanh toán
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122 đánh giá)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Một chiếc áo nhẹ, thường được dệt kim, ôm sát cơ thể, có cổ tròn và tay ngắn, được mặc như một chiếc áo bên trong hoặc áo ngoài.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Chọn kích thước</h1>
                    <div className="productdisplay-right-sizes">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <div 
                                key={size} 
                                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={handleAddToCart}>THÊM VÀO GIỎ HÀNG</button>
                <button className='buy-now-button' onClick={handleBuyNow}>MUA NGAY</button>
                <p className='productdisplay-right-category'><span>Danh mục: </span>Phụ nữ, Áo phông, CropTop</p>
                <p className='productdisplay-right-category'><span>Tags: </span>Hiện đại, Mới nhất</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
