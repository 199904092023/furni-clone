import React from "react";

const About = () => {
  return (
    <div
      className="text-dark container-fluid px-5"
      style={{ backgroundColor: "#eff2f1"}}
    >
      <div className="row w-100">
        <div className="col-lg-6 col-md-8 p-0 h-100">
          <h1 className="text-dark w-100">Why Choose Us</h1>
          <p className="text-dark para">
            Lorem ipsum dolor sit amet consectetur laborum ab blanditiis impedit
            nostrum possimus repellendus cupiditate aspernatur, ipsa fugiat
            delectus vero.
          </p>
          <div className="row text-dark w-100 p-0 m-0 service-card-box my-5 border">
            <ServiceCard
              icons={"icons"}
              title={"Fast & Free Shipping"}
              description={
                "trum possimus repellendus cupiditate aspernatur, ipsa fugiadelectus veroLorem ipsum dolor sit amet consectetur laborum ab blanditiis impedi "
              }
            ></ServiceCard>
            <ServiceCard
              icons={"icons"}
              title={"Fast & Free Shipping"}
              description={
                "trum possimus repellendus cupiditate aspernatur, ipsa fugiadelectus veroLorem ipsum dolor sit amet consectetur laborum ab blanditiis impedi "
              }
            ></ServiceCard>
            <ServiceCard
              icons={"icons"}
              title={"Fast & Free Shipping"}
              description={
                "trum possimus repellendus cupiditate aspernatur, ipsa fugiadelectus veroLorem ipsum dolor sit amet consectetur laborum ab blanditiis impedi "
              }
            ></ServiceCard>
            <ServiceCard
              icons={"icons"}
              title={"Fast & Free Shipping"}
              description={
                "trum possimus repellendus cupiditate aspernatur, ipsa fugiadelectus veroLorem ipsum dolor sit amet consectetur laborum ab blanditiis impedi "
              }
            ></ServiceCard>
          </div>
        </div>
        <div className="col-lg-5 col-0 offset-lg-1 h-100  p-0">
          <div className="img-wrapper">
            <img
              src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg"
              alt="chair"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icons, title, description }) => {
  return (
    <div className="col-lg-6 col-md-6 col-sm-5 col-12 m-0 p-0 service-box h-50">
      {" "}
      <div className="icons text-dark p-0 m-0">{icons}</div>
      <p>
        <h5 className="text-dark p-0 m-0">{title}</h5>
        <p className="text-dark p-0 m-0">{description}</p>
      </p>{" "}
    </div>
  );
};
export default About;
