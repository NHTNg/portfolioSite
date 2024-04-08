"use client";
import type { DetailType } from "./DevCard";
import DevCard from "./DevCard";
import styles from "./DevCard.module.css"

const myArr: DetailType[] = [
  {
    userName: 'Ngoc "HT" Nguyen',
    userAva: "/assets/userAvata.png",
    userDesc: "Let's us suffer together :))",
    userDOB: "Aug12, 95",
    gitLink: "https://github.com/NHTNg",
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
  return (
    <div className={styles.flexContainer}>
      {myArr.map((user) => (
        <DevCard {...user} key={user.userName} />
      ))}
    </div>
  );
}
