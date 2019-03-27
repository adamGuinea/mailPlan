import React from "react";

export default ({ input, label }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input {...input} />
    </div>
  );
};
