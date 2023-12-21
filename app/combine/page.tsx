import React from "react";
import TableDemo from "../channels_test/page";
import CardDemo from "../card_test/page";
import { ScrollArea } from "@/components/ui/scroll-area";

function page() {
  return (
    <div className="flex px-24">
      <div className="flex-1">
        <TableDemo></TableDemo>
      </div>
        <ScrollArea className="flex-1 !sticky top-0 mx-4 min-h-screen max-h-screen rounded-md">
          <CardDemo></CardDemo>
        </ScrollArea>
    </div>
  );
}

export default page;
