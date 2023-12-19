import React from "react";
import ReactDom from "react-dom";

import "./index.css"; // import css file
import { books } from "./books";
import App from "./App";
// import { greeting } from "../testing/testing";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <App key={book.id} {...book}></App>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById("root"));
// createRoot.render(<Booklist />, document.getElementById("root"));
// 3:17:23
