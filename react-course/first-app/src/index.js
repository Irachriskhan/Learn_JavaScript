import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"; // import css file

// Setup vars
const books = [
  {
    id: 1,
    title: "Presentation of VoY Project",
    img: "../images/image2.png",
    authFirstName: "Christophe",
    authLastName: "Irakoze",
  },
  {
    id: 2,
    title: "Mahama Livelyhood",
    img: "../images/image1.png",
    authFirstName: "Khan",
    authLastName: "Aganze",
  },
  {
    id: 3,
    title: "Alight CS",
    img: "../images/image3.png",
    authFirstName: "John",
    authLastName: "Peter",
  },
];

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
  const {
    img,
    title,
    authFirstName,
    authLastName,
    coAuthor,
    number,
    children,
  } = props;
  return (
    <article className="book">
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

      <p>{coAuthor}</p>
      {/* <p>{let x = 5}</p> */}
      <p>{number}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
// createRoot.render(<Booklist />, document.getElementById("root"));
// 2:44:55
