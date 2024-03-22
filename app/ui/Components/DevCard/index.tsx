"use client";
import type { DetailType } from "./DevCard";
import DevCard from "./DevCard";

const myArr: DetailType[] = [
  {
    userName: 'Ngoc "HT" Nguyen',
    userAva: "/assets/userAvata.png",
    userDesc: [],
    userDOB: "Aug12, 95",
    gitLink:"https://github.com/NHTNg",
    tags: [
      "webdev",
      "reactjs",
      "nextjs",
      "javascript",
      "frontend",
      "css",
      "html",
      "design",
      "figma",
      "3d",
      "spline",
    ],
  },
];

export default function DeveloperCard() {
  return myArr.map((user) => <DevCard {...user} key={user.userName} />);
}
