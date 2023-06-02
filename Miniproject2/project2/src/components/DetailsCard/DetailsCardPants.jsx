import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function DetailsCardPants({cart, setCart}) {
  const useLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [buy, setBuy] = useState([]);
  const [status, setStatus] = useState(false);
  const [pants, setPants] = useState({});

  const [product, setProduct] = useState([]);
  const loadProducts = async () => {
    const result = await axios.get("http://localhost:8008/product");
    setProduct(result.data);
  };
  const handleBuy = async () => {
    let newBuy = [...buy];
    let check = -1;
    for (let i = 0; i < newBuy.length; i++) {
      if (pants.id === newBuy[i].id) {
        check = i;
      }
    }
    if (check > -1) {
      newBuy[check].count += 1;
    } else {
      newBuy.push({ ...pants, count: 1 });
    }
    axios.patch(`http://localhost:8008/cart/${useLogin.id}`, {
      name: newBuy,
    });
    setCart(pants);
  };
  const { id } = useParams("id");
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://localhost:8008/cart/${useLogin.id}`)
      .then((reponse) => setBuy(reponse.data.name));

    fetch(`http://localhost:8008/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPants(data);
      })
      .catch((err) => {
        console.error("fhyf", err);
      });
  }, [id, status]);


  return (
    <div>
      <div className="details-shorts">
        <div className="modal-text-img">
          <div className="modal-img">
            <img src={pants.src}/>
          </div>
          <div className="modal-text">
            <h2>{pants.name}</h2>
            <bdi>{pants.price}₫</bdi>
            <p>Sản phẩm được đóng gói gồm :</p>
            <ul>
              <li>Tem mác giấy logo đầu chuột Vietgangz</li>
              <li>Bộ sticker Vietgangz</li>
              <li>Giấy thơm Bounce nhập khẩu từ Mỹ</li>
              <li>Tem niêm phong sản phẩm</li>
              <li>Tem niêm phong hộp Vietgangz</li>
            </ul>
            <p>Official Store – VIETGANGZ®️</p>
            <p>IG : vietgangz_original</p>
            <strong>HANOI CITY :</strong>
            <div>70 Quan Thanh Str, Quan Thanh Ward – Ba Dinh Dist</div>
            <div>
              Vietgangz Villa 35 Alley 268/21 Ngoc Thuy Str – Long Bien Dist
            </div>
            <strong>HO CHI MINH CITY :</strong>
            <div>149/21 Le Thi Rieng Str, Ben Thanh Ward – Dist.1</div>
            <strong>DA NANG:</strong>
            <div>Vietgangz Beach Club 01 Yet Kieu Str, Son Tra Dist</div>
            <div>Hotline : 0838966996 – 0702001202</div>
            <p>Contact us : ceo@vietgangz.com</p>

            <p>Size:</p>
            <Form.Select>
              <option>Default select</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </Form.Select>
            <div className="bt-ip-pay" style={{ marginTop: "20px" }}>
             
              <Link to="/cart">
                <Button onClick={handleBuy}>THÊM VÀO GIỎ HÀNG</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCardPants;
