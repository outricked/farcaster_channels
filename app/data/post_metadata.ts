export interface PostStruct {
  author: string,
  profile_url?: string,
  text: string,
  description: string,
}

const posts: PostStruct[] = [
    {
      author: "John Doe",
      profile_url: "https://www.supercast.xyz/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fmerkle-manufactory%2Fimage%2Ffetch%2Fhttps%253A%252F%252Fi.imgur.com%252FMpN3LoZ.jpg&w=96&q=75",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      description: "3 days ago",
    },
    {
      author: "Alice Smith",
      profile_url:"https://i.seadn.io/gae/sYAr036bd0bRpj7OX6B-F-MqLGznVkK3--DSneL_BT5GX4NZJ3Zu91PgjpD9-xuVJtHq0qirJfPZeMKrahz8Us2Tj_X8qdNPYC-imqs?w=500&auto=format",
      text: "Vestibulum in libero ac justo tincidunt fermentum.",
      description: "5 hours ago",
    },
    {
      author: "Bob Johnson",
      profile_url:"https://i.imgur.com/W7OsuB6.jpeg",
      text: "Suspendisse potenti. Etiam vel feugiat diam.",
      description: "1 week ago",
    },
    {
      author: "Emily Brown",
      text: "Aenean a quam eget sapien varius vehicula.",
      description: "2 days ago",
    },
    {
      author: "Michael Wilson",
      text: "Quisque ullamcorper eget urna eu venenatis.",
      description: "4 hours ago",
    },
    {
      author: "Sophia Garcia",
      text: "Nam rhoncus convallis eros, at venenatis urna laoreet.",
      description: "6 days ago",
    },
    {
      author: "Olivia Martinez",
      text: "Fusce in velit sed tortor finibus suscipit in eu elit.",
      description: "12 hours ago",
    },
    {
      author: "David Lee",
      text: "Pellentesque nec erat vitae odio lacinia euismod.",
      description: "1 week ago",
    },
    {
      author: "Emma Davis",
      text: "Duis sit amet purus in ipsum convallis venenatis.",
      description: "2 days ago",
    },
    {
      author: "William Anderson",
      text: "Integer vel nisi in lectus dictum volutpat.",
      description: "9 hours ago",
    },
    {
      author: "Lily Rodriguez",
      text: "Vivamus at augue nec libero elementum luctus.",
      description: "5 days ago",
    },
    {
      author: "James Harris",
      text: "Nullam nec feugiat quam, a malesuada nisi.",
      description: "14 hours ago",
    },
    {
      author: "Mia Wilson",
      text: "Curabitur non tincidunt odio, at sagittis purus.",
      description: "1 week ago",
    },
    {
      author: "Ethan Taylor",
      text: "Aliquam erat volutpat. Sed nec nisi id lectus tristique.",
      description: "3 days ago",
    },
    {
      author: "Ava White",
      text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
      description: "8 hours ago",
    },
  ];

  export const posts_2: PostStruct[] = [
    {
        author: "Alice Johnson",
        profile_url: "https://lh3.googleusercontent.com/v58dn3Qon30ikaovcRc_91qg8UdIAuDEcbBPkMxP6DP2eOvdGs96azCsUomVJIbeElIMx9hQdlNFrZf7ujWVE6fZkM8QaEPG8Km6sQ=s120",
        text: "Hello, this is Alice Johnson's post.",
        description: "Just now",
    },
    {
        author: "Bob Smith",
        profile_url: "https://i.seadn.io/gae/j9fZd-_CTm_AOL-AsAvwHIW57SyKQdB_amN-kgbD_TH2O1pehgvtLMOvWc9bKq-WgEzhYQ_WDOHnyib1KV9slyIXUGmRrQSInN7fZbw?w=500&auto=format",
        text: "Greetings from Bob Smith!",
        description: "2 minutes ago",
    },
    {
        author: "Charlie Brown",
        profile_url: "https://i.imgur.com/2VldpN3.jpeg",
        text: "Charlie Brown here with a new update.",
        description: "1 hour ago",
    },
    {
        author: "David Wilson",
        profile_url: "NEW_PROFILE_URL_19",
        text: "David Wilson sharing some thoughts.",
        description: "3 hours ago",
    },
    {
        author: "Emma Garcia",
        profile_url: "NEW_PROFILE_URL_20",
        text: "Emma Garcia's post for today.",
        description: "5 hours ago",
    },
    {
        author: "Frank Davis",
        profile_url: "NEW_PROFILE_URL_21",
        text: "Frank Davis with an interesting post.",
        description: "1 day ago",
    },
    {
        author: "Grace Martinez",
        profile_url: "NEW_PROFILE_URL_22",
        text: "Grace Martinez checking in!",
        description: "2 days ago",
    },
    {
        author: "Hannah Lee",
        profile_url: "NEW_PROFILE_URL_23",
        text: "Hannah Lee's latest update.",
        description: "1 week ago",
    },
    {
        author: "Isaac Rodriguez",
        profile_url: "NEW_PROFILE_URL_24",
        text: "Isaac Rodriguez with some news.",
        description: "2 weeks ago",
    },
    {
        author: "Jack Anderson",
        profile_url: "NEW_PROFILE_URL_25",
        text: "Jack Anderson sharing his thoughts.",
        description: "3 weeks ago",
    },
    {
        author: "Katie Harris",
        profile_url: "NEW_PROFILE_URL_26",
        text: "Katie Harris's post of the day.",
        description: "4 weeks ago",
    },
    {
        author: "Lucas Wilson",
        profile_url: "NEW_PROFILE_URL_27",
        text: "Lucas Wilson here with an update.",
        description: "1 month ago",
    },
    {
        author: "Megan Taylor",
        profile_url: "NEW_PROFILE_URL_28",
        text: "Megan Taylor sharing some insights.",
        description: "2 months ago",
    },
    {
        author: "Noah White",
        profile_url: "NEW_PROFILE_URL_29",
        text: "Noah White's latest post.",
        description: "3 months ago",
    },
    {
        author: "Olivia Davis",
        profile_url: "NEW_PROFILE_URL_30",
        text: "Olivia Davis with a special message.",
        description: "4 months ago",
    },
];

export default posts;
