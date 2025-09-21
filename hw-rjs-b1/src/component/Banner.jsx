import React from "react";

export default function Banner() {
  return (
    <div className="bg-light d-flex vh-100 align-items-center">
      <div className="container">
        <h1 className="display-4">A WARM WELCOME!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          quam molestiae illo.
        </p>
        <a href="#" className="btn btn-primary btn-lg">
          Call to action
        </a>
      </div>
    </div>
  );
}
