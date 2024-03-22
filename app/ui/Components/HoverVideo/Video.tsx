"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./Video.module.css";

export default function Video() {
  const video = useRef<HTMLVideoElement>(null);

  let [isPlay, setIsplay] = useState(false);

  const playVideo = () => {
    if (video.current !== null) {
      setIsplay(true);
      video.current.play();
    }
  };

  const pauseVideo = () => {
    if (video.current && isPlay) {
      video.current.load();
    }
  };

  return (
    <div
      onMouseOver={playVideo}
      onMouseLeave={pauseVideo}
      className={styles.item}
    >
      <Image
        alt="testComponent"
        src="/assets/dc.png"
        className={styles.itemImage}
      />
      <video ref={video} muted loop className={styles.itemVideo}>
        <source src="/videos/dcVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
