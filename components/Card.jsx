import React from "react";

const Card = ({ children }) => (
  <div className="p-4 md:p-8 rounded shadow bg-white">{children}</div>
);

export default Card;

export const CardContent = ({ children }) => (
  <div className="my-4">{children}</div>
);

export const CardHeading = ({ children }) => (
  <h3 className="text-xl">{children}</h3>
);
