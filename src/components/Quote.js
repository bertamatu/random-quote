// import React from "react";

// function Quote(props) {
//   return (
//     <div>
//       {props.data.map((quote, index) => (
//         <section key={index}>
//           {quote.quote}
//           <p>{quote.character}</p>
//           <img src={quote.image} alt="" />
//         </section>
//       ))}
//     </div>
//   );
// }

// export default Quote;

import React from "react";

const Quote = (props) => {
  return (
    <div>
      {props.data.map((quote, index) => (
        <section key={index}>
          {quote.image}
          {quote.quote}
          {quote.author}
        </section>
      ))}
    </div>
  );
};

export default Quote;
