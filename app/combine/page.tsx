import React from "react";
import CardPage from "../card/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import channel_metadata from "../data/data";

function page() {
  return (
    <div className="flex px-24">
      <Table>
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
            <TableRow key={channel_metadata.rank}>
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
      <ScrollArea className="flex-1 !sticky top-0 mx-4 min-h-screen max-h-screen rounded-md">
        <CardPage></CardPage>
      </ScrollArea>
    </div>
  );
}

export default page;
