import React from "react";

const Card = ({ children }) => (
  <div className="h-full p-4 md:py-1 md:px-8 md:py-2 rounded shadow bg-white">
    {children}
  </div>
);

export default Card;

export const CardContent = ({ children }) => (
  <div className="my-3 md:my-6">{children}</div>
);

export const CardHeading = ({ children }) => (
  <h3 className="text-xl md:text-2xl">{children}</h3>
);

export const CardSubHeading = ({ children }) => (
  <h4 className="text-xs md:text-sm uppercase tracking-wide font-bold text-gray-600">
    {children}
  </h4>
);
