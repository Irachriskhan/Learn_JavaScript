import React from "react";

const App = (props) => {
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
      <img src={img} alt="added pic " />
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

export default App;
