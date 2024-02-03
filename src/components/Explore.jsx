import React from "react";

const Explore = () => {
  return (
    <div
      className="text-dark container-fluid pt-5 pt-sm-2"
      style={{ backgroundColor: "#eff2f1", height: "100vh" }}
    >
      <div className="row h-100 py-5 ">
        <div
          className="col-md-6 col-lg-7 col-0  h-100 img-wrapper-explore"
          style={{ position: "relative" }}
        >
          <img
            src="https://themewagon.github.io/furni/images/img-grid-1.jpg"
            alt=""
            id="img-1"
            className="rounded"
          />

          <img
            src="https://themewagon.github.io/furni/images/img-grid-2.jpg"
            alt=""
            id="img-2"
            className="rounded"
          />

          <img
            src="https://themewagon.github.io/furni/images/img-grid-3.jpg"
            alt=""
            id="img-3"
            className="rounded"
          />
        </div>
        <div className="col-md-6 col-lg-5 col-12 text-dark h-100">
          <h1 className="h2 my-md-0 my-lg-1 my-sm-1 py-lg-1">
            We Help You Make Modern Interior Design
          </h1>
          <p className="text-dark py-lg-2 py-md-1 py-sm-3 py-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            expedita aspernatur! Veniam exercitationem,
          </p>
          <ul
            className="row py-md-0 py-sm-4 py-0 p-0 px-lg-2 d-flex justify-content-center align-items-center"
            style={{ listStyle: "circle" }}
          >
            <li className="col-5 p-md-0 p-sm-2 text-dark p-2">
              Veniam exercitationem, dolores recusandae unde illo
            </li>
            <li className="offset-1 col-5 p-0 p-md-0 p-sm-2 p-1 text-dark">
              Veniam exercitationem, dolores recusandae unde illo
            </li>
            <li className="col-5 p-lg-0 p-md-0 p-sm-2 p-1 text-dark">
              Veniam exercitationem, dolores recusandae unde illo
            </li>
            <li className="offset-1 col-5 p-lg-0 p-md-0 p-1 p-sm-2 text-dark">
              Veniam exercitationem, dolores recusandae unde illo
            </li>
          </ul>
          <div className="btn-wrapper w-75 p-0 m-0">
            <button className="btn btn-dark rounded-pill py-2 px-2 w-50 h-100">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
// hr01.mxpertz@ReportGmailerrorred.com
