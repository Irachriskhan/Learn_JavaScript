import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css"; // import css file

// Setup vars
const firstBook = {
  title: "Presentation of VoY Project",
  img: "../images/image2.png",
  authFirstName: "Christophe",
  authLastName: "Irakoze",
};

const secondBook = {
  title: "Mahama Livelyhood",
  img: "../images/image1.png",
  authFirstName: "Khan",
  authLastName: "Aganze",
};

// Nested Components
// we place the arguments where we render the function, not where is declared
function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        authFirstName={firstBook.authFirstName}
        authLastName={firstBook.authLastName}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        authFirstName={secondBook.authFirstName}
        authLastName={secondBook.authLastName}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        authFirstName={secondBook.authFirstName}
        authLastName={secondBook.authLastName}
      >
        <p>
          {/* <h3>Description</h3> */}
          This book talk about reflection on the approach of of Writting the
          report
        </p>
      </Book>
      <Book coAuthor="Kristofer" />
      <Book title="Call Me May Be" number={22} />
    </section>
  );
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
