import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"; // import css file

// Setup vars
const title = "Presentation of VoY Project";
const authFirstName = "Christophe";
const authLastName = "Irakoze";
const img = "../images/image2.png";

// Nested Components
function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="Image" />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.95rem", marginTop: "0.25rem" }}
      >
        {authFirstName} {authLastName.toUpperCase()}
      </h4>
      {/* <p>{let x = 5}</p> */}
      <p>Downloads: {6 + 6}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
