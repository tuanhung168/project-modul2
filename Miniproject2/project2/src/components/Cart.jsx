// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Table from "react-bootstrap/Table";

// import Button from "react-bootstrap/Button";

// import axios from "axios";
// function Cart() {
//   const [cart, setCart] = useState([]);

//   const user = JSON.parse(localStorage.getItem("userLogin"));

//   function totalProduct() {
//     let sum = 0;
//     cart.forEach((e) => {
//       sum += e.price * e.count;
//     });
//     return sum;
//   }

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8008/cart/${user.id}`)
//       .then((res) => setCart(res.data.name));
//   }, []);
//   console.log(cart);

//   return (
//     <div className="cartt">
//       <div className="table">
//         <Table>
//           <thead>
//             <tr>
//               <th colSpan={3}>SẢN PHẨM</th>
//               <th>GIÁ</th>
//               <th>SỐ LƯỢNG</th>
//               <th>TẠM TÍNH</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.length
//               ? cart.map((e) => {
//                   return (
//                     <tr>
//                       <td style={{ paddingTop: "40px" }}>
//                         <i class="fa-solid fa-trash fa-xl"></i>
//                       </td>
//                       <td>
//                         <img src={e.src} />
//                       </td>
//                       <td style={{ padding: "25px" }}>{e.name}</td>
//                       <td style={{ fontWeight: "bold", padding: "25px" }}>
//                         {e.price}đ
//                       </td>
//                       <td style={{ padding: "25px" }}>
//                         <button
//                           style={{ backgroundColor: "white", border: "none" }}
//                         >
//                           -
//                         </button>
//                         {e.count}
//                         <button
//                           style={{ backgroundColor: "white", border: "none" }}
//                         >
//                           +
//                         </button>
//                       </td>
//                       <td style={{ fontWeight: "bold", padding: "25px" }}>
//                         {e.price}đ
//                       </td>
//                     </tr>
//                   );
//                 })
//               : ""}
//           </tbody>
//         </Table>
//       </div>

//       <div className="table2">
//         <div className="table3">
//           <Table style={{ marginTop: "20px", width: "100%" }}>
//             <thead>
//               <tr style={{ borderBottom: "1px solid gray" }}>
//                 <th style={{ color: "gray" }}>Giỏ hàng</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr style={{ borderBottom: "1px solid gray" }}>
//                 <td style={{ color: "gray" }}>Tạm tính</td>
//                 <td style={{ fontWeight: "bold" }}>
//                   {cart.length ? totalProduct() : ""}₫
//                 </td>
//               </tr>
//               <tr>
//                 <td style={{ color: "gray" }}>Giao hàng</td>
//                 <td>
//                   <p>Đồng giá: 30.000₫</p>

//                   <p>
//                     Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh
//                     toán.
//                   </p>

//                   <p>Tính phí giao hàng</p>
//                 </td>
//               </tr>
//               <tr style={{ borderTop: "1px solid gray" }}>
//                 <th style={{ color: "gray" }}>Tổng</th>
//                 <td style={{ fontWeight: "bold" }}>
//                   {cart.length ? totalProduct() + 30000 : ""}
//                 </td>
//               </tr>
//             </tbody>
//           </Table>
//         </div>

//         <div className="information-button">
//           <Button variant="primary" type="submit">
//             ĐẶT HÀNG
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cart;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import axios from "axios";

function Cart() {
  const [cart, setCart] = useState([]);
  const [purchased, setPurchased] = useState(false);
  const user = JSON.parse(localStorage.getItem("userLogin"));

  function totalProduct() {
    let sum = 0;
    cart.forEach((e) => {
      sum += e.price * e.count;
    });
    return sum;
  }
  const [check, setCheck] = useState(false);
  useEffect(() => {
    axios
      .get(`http://localhost:8008/cart/${user.id}`)
      .then((res) => setCart(res.data.name));
  }, [check]);
  console.log(cart);

  function decreaseQuantity(index) {
    const updatedCart = [...cart];
    if (updatedCart[index].count > 1) {
      updatedCart[index].count -= 1;
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function increaseQuantity(index) {
    const updatedCart = [...cart];
    updatedCart[index].count += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);
  function handleOrder() {
    // Thực hiện các hành động để hoàn thành việc mua hàng (ví dụ: gọi API, v.v.)
    // Sau khi mua hàng thành công, đặt trạng thái purchased thành true
    // Bạn có thể sửa chữa hàm này theo cách thực hiện của mình
    // Để minh họa, ở đây chúng tôi chỉ đơn giản đặt purchased thành true
    setPurchased(true);
  }
  //xoa gio hang
  const handleDeleteCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    axios.patch(`http://localhost:8008/cart/${user.id}`, { name: newCart });
    setCheck(!check);
    // axios
    //   .get(`http://localhost:8008/cart/${e.id}`)
    //   .then(function (response) {
    //     console.log("Deleted successfully");
    //   })
    //   .catch(function (error) {
    //     console.error("Error deleting resource:", error);
    //   });
  };
  return (
    <div className="cartt">
      <div className="table">
        <Table>
          <thead>
            <tr>
              <th colSpan={3}>SẢN PHẨM</th>
              <th>GIÁ</th>
              <th>SỐ LƯỢNG</th>
              <th>TẠM TÍNH</th>
            </tr>
          </thead>
          <tbody>
            {cart.length
              ? cart.map((e, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ paddingTop: "40px" }}>
                        <i
                          className="fa-solid fa-trash fa-xl"
                          onClick={() => {
                            handleDeleteCart(index);
                          }}
                        ></i>
                      </td>
                      <td>
                        <img src={e.src} alt={e.name} />
                      </td>
                      <td style={{ padding: "25px" }}>{e.name}</td>
                      <td style={{ fontWeight: "bold", padding: "25px" }}>
                        {e.price}₫
                      </td>
                      <td style={{ padding: "25px" }}>
                        <button
                          style={{ backgroundColor: "white", border: "none" }}
                          onClick={() => decreaseQuantity(index)}
                        >
                          -
                        </button>
                        {e.count}
                        <button
                          style={{ backgroundColor: "white", border: "none" }}
                          onClick={() => increaseQuantity(index)}
                        >
                          +
                        </button>
                      </td>
                      <td style={{ fontWeight: "bold", padding: "25px" }}>
                        {e.price * e.count}₫
                      </td>
                    </tr>
                  );
                })
              : ""}
          </tbody>
        </Table>
      </div>

      <div className="table2">
        <div className="table3">
          <Table style={{ marginTop: "20px", width: "100%" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid gray" }}>
                <th style={{ color: "gray" }}>Giỏ hàng</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid gray" }}>
                <td style={{ color: "gray" }}>Tạm tính</td>
                <td style={{ fontWeight: "bold" }}>
                  {cart.length ? totalProduct() : ""}₫
                </td>
              </tr>
              <tr>
                <td style={{ color: "gray" }}>Giao hàng</td>
                <td>
                  <p>Đồng giá: 30.000₫</p>

                  <p>
                    Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh
                    toán.
                  </p>

                  <p>Tính phí giao hàng</p>
                </td>
              </tr>
              <tr style={{ borderTop: "1px solid gray" }}>
                <th style={{ color: "gray" }}>Tổng</th>
                <td style={{ fontWeight: "bold" }}>
                  {cart.length ? totalProduct() + 30000 : ""}₫
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        {purchased ? ( // Hiển thị thông báo cảm ơn nếu purchased là true
          <Alert variant="success" className="thank-you-alert">
            <Alert.Heading>Cảm ơn quý khách đã mua hàng!</Alert.Heading>
            <p>Chúng tôi rất vui được phục vụ quý khách.</p>
          </Alert>
        ) : (
          <div className="information-button">
            <Button variant="primary" type="submit" onClick={handleOrder}>
              ĐẶT HÀNG
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
