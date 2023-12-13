import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"; // import css file

// Setup vars
const books = [
  {
    title: "Presentation of VoY Project",
    img: "../images/image2.png",
    authFirstName: "Christophe",
    authLastName: "Irakoze",
  },
  {
    title: "Mahama Livelyhood",
    img: "../images/image1.png",
    authFirstName: "Khan",
    authLastName: "Aganze",
  },
];

const names = ["John", "Paul", "Khan", "Markus", "Hansen"];
const newNames = names.map((name) => {
  return <h3>{name}</h3>;
});
// Nested Components
// we place the arguments where we render the function, not where is declared
function Booklist() {
  return <section className="booklist">{newNames}</section>;
}

{
  /* props parameter is an object */
}
const Book = ({
  img,
  title,
  authFirstName,
  authLastName,
  coAuthor,
  number,
  children,
}) => {
  // console.log(props);
  // const { img, title, authFirstName, authLastName, coAuthor,number } = props;
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
      {children}

      <p>{coAuthor}</p>
      {/* <p>{let x = 5}</p> */}
      <p>{number}</p>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
// createRoot.render(<Booklist />, document.getElementById("root"));
