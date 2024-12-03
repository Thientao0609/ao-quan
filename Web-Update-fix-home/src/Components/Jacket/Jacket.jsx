import React from "react";
import './jacket.css'
export default class Jacket extends React.Component {
  render() {
    const jackets = [
      {
        id: 1,
        name: "Áo khoác mùa đông",
        price: 500000,
        image: "https://via.placeholder.com/150",
        description: "Áo khoác ấm áp, chống thấm nước, thiết kế thời trang.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },
      {
        id: 2,
        name: "Áo khoác gió",
        price: 300000,
        image: "https://via.placeholder.com/150",
        description: "Nhẹ nhàng, tiện lợi, phù hợp cho mọi thời tiết.",
      },

    ];

    return (
      <div>
        <div className="danhsach" >
            <center>
        <h1>Danh sách áo khoác</h1></center>
        </div>
        <div className="wrap" style={{ display: "flex", gap: "20px"}}>
          {jackets.map((jacket) => (
            <div
              key={jacket.id}
              style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "5px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={jacket.image}
                alt={jacket.name}
                style={{ width: "100%", borderRadius: "5px" }}
              />
              <h2>{jacket.name}</h2>
              <p>{jacket.description}</p>
              <p style={{ fontWeight: "bold" }}>{jacket.price.toLocaleString()}đ</p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => alert(`Bạn đã chọn mua: ${jacket.name}`)}
              >
                Mua ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
