
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Kiểm tra các trường input có đầy đủ thông tin
    if (password.includes(" ")) {
      setError("Không được để khoảng trắng trong mật khẩu");
      return;
    }

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      address === "" ||
      date === "" ||
      phone === ""
    ) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      const response = await axios.get("http://localhost:8008/user");
      const users = response.data;

      if (users && users.some((user) => user.email === email)) {
        setError("Email đã được đăng ký trước đó");
      } else {
        const userData = {
          name: name,
          email: email,
          password: password,
          address: address,
          date: date,
          phone: phone,
        };

        await axios.post("http://localhost:8008/user", userData);
        alert("Đăng ký thành công");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
      setError("Đã xảy ra lỗi. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="background-register">
      <div className="main-register">
        <div className="form-register">
          <h2>ĐĂNG KÝ THÀNH VIÊN VIETGANGZ</h2>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => handleChangeName(e)}
                placeholder="Họ và tên"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="phone"
                value={phone}
                onChange={(e) => handleChangePhone(e)}
                placeholder="Số điện thoại"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => handleChangeEmail(e)}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => handleChangePass(e)}
                placeholder="Mật khẩu"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="address"
                value={address}
                onChange={(e) => handleChangeAddress(e)}
                placeholder="Địa chỉ"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => handleChangeDate(e)}
                placeholder="Sinh nhật của bạn NGÀY/THÁNG/NĂM"
              />
            </Form.Group>

            {error && <p className="error">{error}</p>}

            <Button variant="primary" type="submit">
              ĐĂNG KÝ
            </Button>
          </Form>
        </div>
        <div className="img-register">
          <img src="https://cf.shopee.vn/file/15f083d3f6547dcb35f82ae2fad1390a" />
        </div>
      </div>
    </div>
  );
}

export default Register;
