"use client";
import styles from "./Items.module.css";
import type { BrandsType } from ".";
import { useRef } from "react";
import Image from "next/image";

export default function CardItem(props: BrandsType) {
  const videoRef = useRef<HTMLVideoElement>(null);
  // let [isPlay, setIsplay] = useState(false);
  const playVideo = () => {
    if (videoRef.current !== null) {
      // setIsplay(true);
      videoRef.current.play();
    }
  };
  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <div
      className={styles.itemCard}
      onMouseOver={playVideo}
      onMouseLeave={pauseVideo}
    >
      <Image
        alt={props.branchLabel}
        className={styles.itemImg}
        src={props.imgSrc}
      />
      <p className={styles.itemDescription}>
        {props.desc.length > 30
          ? props.desc.substring(0, 100).concat("...")
          : props.desc}
      </p>
      <video ref={videoRef} className={styles.itemVideo} muted loop>
        <source src={props.vSrc} type="video/mp4" />
      </video>
    </div>
  );
}
