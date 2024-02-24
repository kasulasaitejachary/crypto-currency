import React from "react";
import ReactDom from "react-dom/client";
import Table from "./components.js/Table";
const Applayout = () => {
  return (
    <div className="app">
      <Table />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout />);