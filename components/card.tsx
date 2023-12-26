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
import posts from "../app/data/post_metadata";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CardProps = React.ComponentProps<typeof Card>;

export default function CardPage({ className, ...props }: CardProps) {
  return (
    <div>
      {posts.map((post, index) => (
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
