import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/Table";
const App = () => {
  return (
    <div className="app">
      <Table />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
