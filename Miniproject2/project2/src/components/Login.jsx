import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogIn = async (e) => {
    e.preventDefault();

    // Kiểm tra trường trống
    if (!email || !password) {
      alert("Vui lòng điền đầy đủ thông tin đăng nhập");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8008/user?email=${email}&password=${password}`
      );

      if (response.data.length > 0) {
        localStorage.setItem("userLogin", JSON.stringify(response.data[0]));
        alert("Đăng nhập thành công!");
        navigate("/");
      } else {
        // Sai email hoặc password
        alert("Email hoặc mật khẩu không đúng");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="background-login">
      <div className="main-login">
        <div className="form-login">
          <h2>ĐĂNG NHẬP THÀNH VIÊN</h2>
          <Form onSubmit={handleLogIn}>
            <Form.Label>Email *</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Label>Mật khẩu *</Form.Label>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ghi nhớ mật khẩu" />
            </Form.Group>

            <Button variant="primary" type="submit">
              ĐĂNG NHẬP
            </Button>
          </Form>
        </div>
        <div className="img-login">
          <img src="https://cf.shopee.vn/file/15f083d3f6547dcb35f82ae2fad1390a" />
        </div>
      </div>
    </div>
  );
}

export default Login;
