import React from "react";

const Number = (props) => {
  console.log(props);
  return (
    <div className="card col-12  col-md-6 col-xl-4 ">
      <img
        src={props.avatar}
        className="card-img-top"
      ></img>
      <div className="card-body">
        <h5 className="card-title">
          {props.first_name} {props.last_name}
        </h5>
        <p className="card-text">{props.email}</p>
        <a
          href={`mailto:${props.email}`}
          className="btn btn-primary"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Number;
