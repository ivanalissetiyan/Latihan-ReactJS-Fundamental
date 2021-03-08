import React from 'react';
import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo category="Give Away" name="Jordan Off-White Air" isDiscount="no" />
      <ReviewItems />
    </div>
  ); 
}

function ReviewItems() {
  // Memoersiapkan data dummy JSON
  const users = [
    {
      id: 1,
      name: "Mas Tony",
      review: "harga nya sangat murah dan berkualitas tinggi",
    },
    {
      id: 2,
      name: "Mas Akbar",
      review: "Barang yang sangat berkualitas",
    },
    {
      id: 1,
      name: "Mbak Ayu",
      review: "Sepatu nya enak untuk berpergian jalan-jalan",
    }
  ];
  const listReview = users.map((itemReview) => 
    <div className="Item">
      <img src="woman.jpg"> </img>

      <div className="User">
        <h3>{itemReview.name}</h3>
        <p>{itemReview.review}</p>
      </div>
    </div>
  );
  return (
    <div className="Review-box">
      <h2>Review</h2>
      {listReview}
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="nike.jpg" alt="Sepatu Nike" />
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Diskon Tersedia 50%</p>;
  } else if (isDiscount == "coming") {
    return <p>Segera Ada Diskon di Hari yang akan datang !!!</p>;
  } else {
    return <p>Belum Ada Diskon</p>;
  }
}

function ProdukInfo(props) {
  const { category, name, isDiscount } = props;
  const price = "1.000.000";
  const benefits = ["Tahan Air", "bahan Lebih halus", "Nyaman di Pakai"];
  const listBenefits = benefits.map((itemBenefit) => <li>{itemBenefit}</li>);

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name} </h1>
        <p className="Price">Rp {price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">Sepatu ini nyaman untuk berpergian ke Mall</p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(name, e)} href="#">
          Add Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Anda memesan sepatu, " + e);
}

export default App;
