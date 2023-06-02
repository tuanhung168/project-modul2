import React, { useEffect, useState } from "react";


import Card from "react-bootstrap/Card";

import axios from "axios";
import { Link } from "react-router-dom";

function CardHoodies() {
  const [product, setProduct] = useState([]);

  const fetchMenu = async () => {
    let url = "http://localhost:8008/product";
    const result = await axios.get(url);
    setProduct(result.data);
  };

  const jackets = product.filter((item) => item.tagname === "jackets");
  useEffect(() => {
    fetchMenu();
  }, []);



  return (
    <div className="product">
      {jackets.map((e, i) => (
        <div className="product-details" key={i}>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img variant="top" src={e.src} />

            <Card.Body>
              <Card.Text style={{ color: "grey", fontSize: "small" }}>
                {e.title}
              </Card.Text>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text style={{ fontWeight: "bold" }}>{e.price} ₫</Card.Text>
              <div className="cardshorts-link"><Link to={`/detailscardjackets/${e.id}`}>Lựa chọn các tuỳ chọn</Link></div>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardHoodies;
