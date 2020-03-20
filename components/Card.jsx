import React from "react";

const Card = ({ children }) => (
  <div className="p-4 md:py-2 md:px-8 md:py-4 rounded shadow bg-white">
    {children}
  </div>
);

export default Card;

export const CardContent = ({ children }) => (
  <div className="my-2 md:my-4">{children}</div>
);

export const CardHeading = ({ children }) => (
  <h3 className="text-xl">{children}</h3>
);
