import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group p-3 mb-2 bg-dark text-white">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item p-3 mb-2 bg-dark text-white">{children}</li>;
}
