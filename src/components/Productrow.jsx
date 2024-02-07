import React from "react";

const Productrow = () => {
  return (
    <div
      className="row justify-content-around m-0"
      style={{ backgroundColor: "#eff2f1" }}
    >
      <div className="col-md-0 col-sm-0 col-lg-4  row product-wrapper1">
        <div className="col-lg-6 col-md-0 h-100">
          <img
            src="https://themewagon.github.io/furni/images/product-1.png"
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-lg-6 col-md-0 d-flex justify-content-center flex-column p-0 gap-1">
          <h4 className="h6 p-0 m-0 text-dark"> Nordic Chair</h4>
          <p className="text-dark m-0 p-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <main className="text-dark">Read More</main>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-sm-6 col-12 row">
        <div className="col-6 h-100">
          <img
            src="https://themewagon.github.io/furni/images/product-1.png"
            alt=""
            className="w-100 h-100"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-6 d-flex justify-content-center flex-column p-0 gap-1">
          <h4 className="h6 text-dark m-0"> Nordic Chair</h4>
          <p className="text-dark p-0 m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
          <main className="text-dark m-0">Read More</main>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 col-sm-6 row product-wrapper2 m-0">
        <div className="col-6 h-100">
          <img
            src="https://themewagon.github.io/furni/images/product-1.png"
            alt=""
            className="h-100 w-100"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="col-6 d-flex justify-content-center flex-column p-0 gap-1">
          <h4 className="h6 text-dark m-0"> Nordic Chair</h4>
          <p className="text-dark p-0 m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </p>
          <main className="text-dark m-0">Read More</main>
        </div>
      </div>
    </div>
  );
};

export default Productrow;
