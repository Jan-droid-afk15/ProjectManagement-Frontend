import React from "react";
import {  useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <button onClick={handleClick}>Go back to homepage</button>
    </div>
  );
};

export default NotFoundPage;
