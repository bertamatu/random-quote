import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const QuoteContainer = styled.main`
  padding: 2rem;
`;
const Quote = styled.p`
  color: red;
`;
const Image = styled.img`
  height: 300px;
`;
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
    <QuoteContainer>
      {data.map((quote, index) => (
        <section key={index}>
          <Quote> {quote.quote}</Quote>
          <p>{quote.character}</p>
          <Image src={quote.image} alt="" />
        </section>
      ))}
      <Button getQuote={getQuote} />
    </QuoteContainer>
  );
}

export default GetQuote;
