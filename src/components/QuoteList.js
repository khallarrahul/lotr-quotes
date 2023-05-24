import React from "react";
import Quote from "./Quote";
import { v4 as uuidv4 } from "uuid";

function QuoteList({ quotes }) {
  const quoteComponents = quotes.map((quote) => <Quote key={uuidv4()} quote={quote} />);

  return <ul className="quotes">{quoteComponents}</ul>;
}

export default QuoteList;
