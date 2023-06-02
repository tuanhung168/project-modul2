import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
function Add() {
  const [user, setUser] = useState({
    tagname: "",
    src: "",
    name: "",
    price: "",
  });
  //sử dụng navigate để chuyển trang
  const navigate = useNavigate();
  //sử dụng cú pháp destructuring

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8008/product", user);
    navigate("/");
  };

  return (
    <div className="add-main">
      <div className="add-title">
        <h2>THÊM SẢN PHẨM</h2>
      </div>
      <div className="add-form">
        <Form onSubmit={handleSubmit}>
          <Form.Label>TAGNAME</Form.Label>
          <Form.Select name="tagname" onInput={(e) => handleInput(e)} >
            <option disabled selected>
              --Select--
            </option>
            <option value="pants">pants</option>
            <option value="shorts">shorts</option>
            <option value="hoodies">hoodies</option>
            <option value="jackets">jackets</option>
          </Form.Select>
            <br></br>
          <Form.Group className="mb-3">
            <Form.Label>IMAGE</Form.Label>
            <Form.Control
              type="text"
              name="src"
              onInput={(e) => handleInput(e)}
              required="required"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>NAME</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onInput={(e) => handleInput(e)}
              required="required"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>PRICE</Form.Label>
            <Form.Control
              type="text"
              name="price"
              onInput={(e) => handleInput(e)}
              required="required"
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ backgroundColor:"black", border:"none" }}>
            ADD
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Add;
