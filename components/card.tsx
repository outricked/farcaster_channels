import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import posts, {PostStruct, posts_2} from "../app/data/post_metadata";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChannelStruct } from "@/app/data/channel_metadata";

type CardProps = React.ComponentProps<typeof Card> & {
  channelName?: string;
}

export default function CardPage({channelName, className, ...props }: CardProps) {
  let postToIterate: PostStruct[]
  switch (channelName) {
    case "Degen":
        postToIterate = posts 
        break;
    case "$SPAM":
        postToIterate = posts_2
        break;
    default:
      postToIterate = []

}

  return (
    <div>
      {postToIterate.map((post, index) => (
        <Card key={index} className={cn("", className)} {...props}>
          <CardHeader>
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src={post.profile_url} />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
              <CardTitle className="ml-4">{post.author}</CardTitle>
              <p className="text-sm text-muted-foreground pl-4 pt-1">
                {post.description}
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{post.text}</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
          <Separator></Separator>
        </Card>
      ))}
    </div>
  );
}
