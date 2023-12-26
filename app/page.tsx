'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import CardPage from "../components/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import channel_metadata from "./data/channel_metadata";
import posts from "./data/post_metadata";

function Page() {
  const [Channel, setChannel] = useState<string>();

  const scrollRef = React.useRef<HTMLDivElement>(null); // Add a ref

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [Channel]);

  return (
    <div className="flex px-24 justify-center">
      <Table className="flex-auto ml-24">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Channel</TableHead>
            <TableHead>Activity</TableHead>
            <TableHead>Posts</TableHead>
            <TableHead>Replies</TableHead>
            <TableHead>Likes</TableHead>
            <TableHead>Recasts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {channel_metadata.map((channel_metadata) => (
            <TableRow key={channel_metadata.rank} onClick={()=>setChannel(channel_metadata.name)}>
              <TableCell>{channel_metadata.rank}</TableCell>
              <TableCell>{channel_metadata.name}</TableCell>
              <TableCell>{channel_metadata.activity}</TableCell>
              <TableCell>{channel_metadata.posts}</TableCell>
              <TableCell>{channel_metadata.replies}</TableCell>
              <TableCell>{channel_metadata.likes}</TableCell>
              <TableCell>{channel_metadata.recasts}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ScrollArea ref={scrollRef} className="flex-auto !sticky top-0 min-h-screen max-h-screen rounded-md">
        <CardPage channelName={Channel}></CardPage>
      </ScrollArea>
    </div>
  );
}

export default Page;
