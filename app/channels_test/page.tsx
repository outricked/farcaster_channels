import { ModeToggle } from "@/components/mode_toggle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const channel_metadata = [
  {
    rank: "1",
    name: "Degen",
    activity: "420",
    posts: "260",
    replies: "120",
    likes: "1000",
    recasts: "40",
  },
  {
    rank: "2",
    name: "$SPAM",
    activity: "380",
    posts: "240",
    replies: "110",
    likes: "900",
    recasts: "50",
  },
  {
    rank: "3",
    name: "Farcaster",
    activity: "350",
    posts: "220",
    replies: "100",
    likes: "850",
    recasts: "60",
  },
  {
    rank: "4",
    name: "Memes",
    activity: "320",
    posts: "200",
    replies: "90",
    likes: "800",
    recasts: "70",
  },
  {
    rank: "5",
    name: "Warpcast",
    activity: "300",
    posts: "180",
    replies: "80",
    likes: "750",
    recasts: "80",
  },
  {
    rank: "6",
    name: "Nouns",
    activity: "280",
    posts: "160",
    replies: "70",
    likes: "700",
    recasts: "90",
  },
  {
    rank: "7",
    name: "Founders",
    activity: "260",
    posts: "140",
    replies: "60",
    likes: "650",
    recasts: "100",
  },
  {
    rank: "8",
    name: "Wowow",
    activity: "240",
    posts: "120",
    replies: "50",
    likes: "600",
    recasts: "110",
  },
  {
    rank: "9",
    name: "AI",
    activity: "220",
    posts: "100",
    replies: "40",
    likes: "550",
    recasts: "120",
  },
  {
    rank: "10",
    name: "Ethereum",
    activity: "200",
    posts: "80",
    replies: "30",
    likes: "500",
    recasts: "130",
  },
];

export default function TableDemo() {
  return (
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
  );
}
