import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"; // import css file
import { books } from "./books";

// const names = ["John", "Paul", "Khan", "Markus", "Hansen"];
// const newNames = names.map((name) => {
//   return <h3>{name}</h3>;
// });
// Nested Components
// we place the arguments where we render the function, not where is declared
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

{
  /* props parameter is an object */
}

const Book = (props) => {
  // console.log(props);
  // attribute, eventHandler
  // onClick, mouseOver
  const {
    img,
    title,
    authFirstName,
    authLastName,
    coAuthor,
    number,
    children,
  } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello Developers!");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="Image" />
      <h1>{title}</h1>
      <h4>
        Author :{" "}
        <span
          style={{
            color: "#617d98",
            fontSize: "0.95rem",
            marginTop: "0.25rem",
          }}
        >
          {authFirstName} {authLastName}{" "}
        </span>
      </h4>
      <button type="button" onClick={() => console.log(authLastName)}>
        {" "}
        Inline Button Example
      </button>

      <p>{coAuthor}</p>
      {/* <p>{let x = 5}</p> */}
      <p>{number}</p>
      <button type="submit" onClick={clickHandler}>
        {" "}
        Reference Example
      </button>

      <button type="button" onClick={() => complexExample(authFirstName)}>
        {" "}
        More complex example
      </button>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
// createRoot.render(<Booklist />, document.getElementById("root"));
// 3:17:23
