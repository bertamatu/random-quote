import React, { useState, useEffect } from "react";
import Button from "./Button";

function GetQuote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const getQuote = () => {
    setLoading(true);
    fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        setLoading(false);
        setError("fetch failed", error);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  if (loading) {
    return <p>loading..</p>;
  }
  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }

  return (
    <main>
      {data.map((quote, index) => (
        <section key={index}>
          {quote.quote}
          <p>{quote.character}</p>
          <img src={quote.image} alt="" />
        </section>
      ))}
      <Button getQuote={getQuote} />
    </main>
  );
}

export default GetQuote;
