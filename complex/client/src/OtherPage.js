import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      I'm another page!
      <Link to="/">Go home</Link>
    </div>
  );
};

export default OtherPage;
