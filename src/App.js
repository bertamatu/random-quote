import React from "react";
import Button from "./components/Button";
import FetchData from "./components/FetchData";
import Quote from "./components/Quote";

function App(props) {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  // const [data, setData] = useState([]);

  // const getQuote = () => {
  //   setLoading(true);
  //   fetch("https://simpsons-quotes-api.herokuapp.com/quotes")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLoading(false);
  //       setData(data);
  //       console.log(data);
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setError("fetch failed");
  //     });
  // };

  // useEffect(() => {
  //   getQuote();
  // }, []);

  // if (loading) {
  //   return <p>loading..</p>;
  // }

  // if (error !== "") {
  //   return <p>ERROR: {error}</p>;
  // }

  return (
    <main>
      <FetchData />
      <Button />
      <Quote {...props} />
    </main>
  );
}

export default App;
