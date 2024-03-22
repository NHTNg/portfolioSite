"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useMousePosition from "@/app/hooks/useMousePosition";
import styles from "./DevCard.module.css";
import Tag from "./Tag";

export type DetailType = {
  userName: string;
  userAva?: string;
  userDesc: string[];
  userDOB: string;
  gitLink?: string;
  tags: string[];
};

export default function DevCard(user: DetailType) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const mousePos = useMousePosition();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  const middleX = width / 2;
  const middleY = height / 2;

  let xPos = ((mousePos.x! - middleX) / middleX) * 20;
  let yPos = ((mousePos.y! - middleY) / middleY) * 20;

  return (
    <div
      className={styles.card}
      style={{
        transform: `rotateX(${-1 * yPos}deg) rotateY(${xPos}deg)`,
      }}
    >
      <div className={styles.cardContainer}>
        <div className={styles.cardTop}>
          <Image
            alt={user.userName}
            className={styles.userAvt}
            src={user.userAva ? user.userAva : "/assets/defaultAvt.jpg"}
          />
          <div className={styles.textDescription}></div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.userInfo}>
            <h4>{user.userName}</h4>
            <p>@{user.userDOB}</p>
          </div>
          <hr></hr>
          <div className={styles.tagList}>
            {user.tags.map((tag, index) => (
              <Tag tag={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
