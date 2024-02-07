import React, { useEffect } from "react";
import gsap from "gsap";
import {Power3 } from "gsap/gsap-core";
const Home = () => {
  return (
    <div
      className="container-fluid"
      style={{ height: "94.6vh", background: "#3b5d50", overflowX: "hidden" }}
    >
      <div className="row h-100  px-2">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 h-100 p-4 gap-4 img-box d-flex flex-column justify-content-center">
          <h2 className="heading">
          Modern Interior <br/> Design Studio
          </h2>
          <p className="px-2 para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea
            sapiente aliquid vitae. Eos sunt rerum vero officia laborum
            perspiciatis alias voluptatibus qui enim, possimus illum dolore
            doloribus id totam.
          </p>
          <main className="w-40 d-flex gap-2 gap-sm-4 align-items-center px-1">
            <button className="btn my-btn btn-warning p-1 p-sm-2 rounded-pill">
              Shop Now
            </button>
            <button
              className="btn my-btn p-1 p-sm-2 text-light border rounded-pill "
              style={{ background: "#3b5d50" }}
            >
              Explore
            </button>
          </main>
          <img
            src="https://themewagon.github.io/furni/images/couch.png"
            alt="sofa"
            className="sofa"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
