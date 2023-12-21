import React from "react";
import TableDemo from "../channels_test/page";
import CardDemo from "../card_test/page";

function page() {
  return (
    <div className="flex px-24 border-8 justify-around">
      <div className="flex-1 border-8 border-red-300">
        <TableDemo></TableDemo>
      </div>
      <CardDemo className="flex-1 border-8 border-yellow-300"></CardDemo>
    </div>
  );
}

export default page;
