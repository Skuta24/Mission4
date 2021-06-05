import React from "react";

//Components
import GetQuoteHeader from "./GetQuoteHeader";
import GetQuoteBody from "./GetQuoteBody";
import GetQuoteFooter from "./GetQuoteFooter";

function GetQuote() {
  return (
    <div>
      <GetQuoteHeader />
      <GetQuoteBody />
      <GetQuoteFooter />
    </div>
  );
}

export default GetQuote;
