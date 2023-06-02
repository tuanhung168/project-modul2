import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
// import { useState } from "react";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Admin() {
  const [menu, setMenu] = useState([]);
  const [check, setCheck] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5); // Số mục trên mỗi trang
  const [totalPages, setTotalPages] = useState(0);
  //   modal
  const [show, setShow] = useState(false);
  const idEdit = useRef();
  const [dataEdit, setDataEdit] = useState({});
  const [edit, setEdit] = useState({});

  const handleClose = () => {
    setShow(false);
    menu.forEach((e) => {
      if (e.id === idEdit.current) {
        axios.patch(`http://localhost:8008/product/${e.id}`, { ...edit });
      }
    });
    setCheck(!check);
  };
  const handleShow = (id) => {
    setShow(true);
    menu.forEach((e) => {
      if (e.id === id) {
        setEdit(e);
        idEdit.current = id;
      }
    });
  };

  function handleChange(e) {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  }

  const fetchMenu = async () => {
    const url = "http://localhost:8008/product";
    const response = await axios.get(url);
    const menuData = response.data;

    setTotalPages(Math.ceil(menuData.length / perPage)); // Tính tổng số trang dựa trên số lượng mục và số mục trên mỗi trang
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const menuPage = menuData.slice(startIndex, endIndex); // Lấy các mục cho trang hiện tại

    setMenu(menuPage);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8008/product/${id}`);
    setCheck(!check);
  };

  useEffect(() => {
    fetchMenu();
  }, [currentPage, check]);

  return (
    <div>
      <main>
        <div className="table-button">
          <Link to="/add">
            <Button variant=""><i class="fa-solid fa-plus"></i></Button>
          </Link>
        </div>
        <div className="table-title">
          <h2>QUẢN LÍ SẢN PHẨM</h2>
        </div>
        <div className="table">
          <Table bordered style={{ textAlign: "center" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>TAGNAME</th>
                <th>IMAGE</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.tagname}</td>
                  <td>
                    <img src={e.src} className="image-table" alt="" />
                  </td>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>
                    <Button onClick={() => handleShow(e.id)} variant="success" style={{ backgroundColor:"white", border:"none" }}>
                      <i class="fa-solid fa-pen" style={{ color:"black" }}></i>
                    </Button>
                    <Button
                      className="btn-delete"
                      variant="danger"
                      onClick={() => handleDelete(e.id)}
                      style={{ backgroundColor:"white", border:"none" }}
                    >
                      <i class="fa-solid fa-trash" style={{ color:"black" }}></i>
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </Pagination>
      </main>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SỬA THÔNG TIN SẢN PHẨM</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <select onChange={handleChange} name="tagname" value={edit.tagname}>
            <option value={"pants"}>pants</option>
            <option value={"shorts"}>shorts</option>
            <option value={"hoodies"}>hoodies</option>
            <option value={"jackers"}>jackets</option>
          </select> */}
          <Form.Label>TAGNAME</Form.Label>

          <Form.Select onChange={handleChange} name="tagname" value={edit.tagname} >
            <option disabled selected>
              --Select--
            </option>
            <option value={"pants"}>pants</option>
            <option value={"shorts"}>shorts</option>
            <option value={"hoodies"}>hoodies</option>
            <option value={"jackets"}>jackets</option>
          </Form.Select>
          <br></br>
          {/* <input onChange={handleChange} name="src" value={edit.src} />
          <input onChange={handleChange} name="name" value={edit.name} />
          <input onChange={handleChange} name="price" value={edit.price} /> */}
          <Form.Group className="mb-3">
            <Form.Label>IMAGE</Form.Label>
            <Form.Control
              type="text"
              name="src"
              onChange={handleChange}  value={edit.src}
           
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>NAME</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange} value={edit.name}
           
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>PRICE</Form.Label>
            <Form.Control
              type="text"
              name="price"
              onChange={handleChange} value={edit.price}
           
            />
          </Form.Group>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <i class="fa-solid fa-pen-to-square"></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
