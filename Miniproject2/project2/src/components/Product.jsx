import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Cardd from "./Card/Cardd";
import { Link, useParams } from "react-router-dom";
function Product() {
  const { id } = useParams("id");
  useEffect(() => {
    console.log(id);
  });
  return (
    <div className="background-product">
      {/* START HEADER */}
      <div className="head-product">
        <div className="head-product1">
          <a>Bottom</a>
          <p>/</p>
          <strong>Pants</strong>
        </div>

        <div className="head-product2">
          <p>Showing all 15 results</p>

          <div className="select-product">
            <Form.Select aria-label="Default select example">
              <option>Mới nhất</option>
              <option value="1">Thứ tự theo mức độ phổ biến</option>
              <option value="2">Thứ tự theo điểm đánh giá</option>
              <option value="3">Thứ tự theo giá: thấp đến cao</option>
              <option value="4">Thứ tự theo giá: cao xuống thấp</option>
            </Form.Select>
          </div>
        </div>
      </div>
      {/* END HEADER */}

      <div className="text-product">
        <div className="text">
          You need to assign Widgets to "Shop Sidebar" in Appearance - Widgets
          to show anything here
        </div>
        
          <Cardd />
        
      </div>
    </div>
  );
}

export default Product;
