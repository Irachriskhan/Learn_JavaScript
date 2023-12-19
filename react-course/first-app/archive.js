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
      <Book coAuthor="Kristofer" />
      <Book title="Call Me May Be" number={22} />
    </section>
  );
}

// props parameter is an object
const Book = (props) => {
  // console.log(props);
  // const { img, title} = props;
  return (
    <article className="book">
      <img src={props.img} alt="Image" />
      <h1>{props.title}</h1>
      <h4>
        Author :{" "}
        <span
          style={{
            color: "#617d98",
            fontSize: "0.95rem",
            marginTop: "0.25rem",
          }}
        >
          {props.authFirstName} {props.authLastName}{" "}
        </span>
      </h4>
      <p>{props.coAuthor}</p>
      {/* <p>{let x = 5}</p> */}
      <p>{props.number}</p>
    </article>
  );
};

// ------------------------------------------------------------------------
// -----------------------------------------------------------------------
// Destructuring and adding a children text
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
}

ReactDom.render(<Booklist />, document.getElementById("root"));

// --------------------------------------------------------------
// --------------------------------------------------------------
// SOME CODES ARE DUPLICATED HERE
// Adding more features in components for best experience

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
// 2:44:55
