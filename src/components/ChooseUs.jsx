import React from "react";

const ChooseUs = () => {
  return (
    <div className="choose-us container-fluid text-dark w-100 m-0 p-0">
      <div className="row text-dark  w-100 h-75 d-flex justify-content-center m-0 p-0">
        <div className="col-12 d-flex justify-content-around align-items-center">
          <Card1></Card1>
          <Card2 title={"Nordic Chair"} price={"$40.00"} img_url={"https://themewagon.github.io/furni/images/product-1.png"}></Card2>
          <Card2 title={"Aero Chair"} price={"$78.00"}img_url={"https://themewagon.github.io/furni/images/product-2.png"}></Card2>
          <Card2  title={"Ergonomic Chair"} price={"$43.00"}img_url={"https://themewagon.github.io/furni/images/product-3.png"} ></Card2>
        </div>
      </div>
    </div>
  );
};


const Card1 = () => {
  return (
    <div
      className="d-flex flex-column text-dark  card1"
    >
      <h1 className="h2">
        Crafted with <br />
        excellent <br /> material.
      </h1>
      <p className="text-dark w-100">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
        voluptates necessitatibus expedita eius ullam? Maxime, similique saepe.
      </p>
      <button className="btn w-50 rounded-pill bg-dark text-light">
        {" "}
        Explore
      </button>
    </div>
  );
};
const Card2 = ({title,price,img_url}) => {
  return (
    <div
      className="d-flex flex-column justify-content-end align-items-left text-dark  card2"
    >
        <h5>{title}</h5>
        <h5>{price}</h5>
      <img src={img_url} alt={price}></img>
    </div>
  );
};
export default ChooseUs;
