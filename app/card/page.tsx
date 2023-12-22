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
import posts from "../data/post_metadata";

type CardProps = React.ComponentProps<typeof Card>;

export default function CardPage({ className, ...props }: CardProps) {
  return (
    <div>
      {posts.map((posts, index) => (
        <Card key={index} className={cn("", className)} {...props}>
          <CardHeader>
            <CardTitle>{posts.author}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {posts.text}
                </p>
                <p className="text-sm text-muted-foreground">{posts.description}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
