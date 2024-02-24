import React from "react";
import ReactDom from "react-dom/client";
import Table from "./components.js/Table";
const Applayout = () => {
  return (
    <>
      <Table />
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<Applayout />);