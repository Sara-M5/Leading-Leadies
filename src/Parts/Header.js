import React from "react";

const Header = (props) => {
  return (
    <div className="breadcrumb-banner">
      <div className="container">
        <h1 className="text-white py-4">{props.title}</h1>
        <ol className="breadcrumb text-white">
          <li className="breadcrumb-item">
            <a className="link text-white" href="/Home">
              Home
            </a>
          </li>
          <li>
            <span className="px-2"> &#10095;&#10095;</span>
          </li>
          <li class="active ">{props.subTitle}</li>
        </ol>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
