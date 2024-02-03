import React from "react";

const Testimonials = () => {
  return (
    <div
      className="text-dark container-fluid"
      style={{ backgroundColor: "#eff2f1", height: "100vh" }}
    >
      <div className="row">
        <div className="col-12 py-5 p-0">
          <h1 className="h1 text-dark text-center ">Testimonials</h1>
        </div>
        <div className="col-12 h-100 bg-success p-5">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="d-block w-100">
                  <p>This is the content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100">
                  <p>This is the content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100">
                  <p>This is the content for the third slide.</p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
