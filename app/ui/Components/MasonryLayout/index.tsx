"use client";
import { useState } from "react";
import CardItem from "./CardItem";
import styles from "./Items.module.css";

export type BrandsType = {
  branchLabel: string;
  imgSrc: string;
  desc: string;
  vSrc?: string;
};

const brands: BrandsType[] = [
  {
    branchLabel: "DC",
    imgSrc: "/assets/dc.png",
    desc: "DC Comics, American media and entertainment company whose iconic comic-based properties represented some of the most enduring and recognizable characters in 20th- and 21st-century popular culture.",
    vSrc: "/videos/dcVideo.mp4",
  },
  {
    branchLabel: "Pixar",
    imgSrc: "/assets/pixar.png",
    desc: "Pixar, motion-picture studio, from 2006 a wholly owned subsidiary of the Disney Company, that was instrumental in the development and production of computer-animated films in the late 20th and early 21st centuries.",
    vSrc: "/videos/pixarVideo.mp4",
  },
  {
    branchLabel: "Disney",
    imgSrc: "/assets/disney.png",
    desc: "The Walt Disney Co (Disney) is an entertainment and media company. It produces and acquires television programs, and live-action films, and animated motion pictures.",
    vSrc: "/videos/disneyVideo.mp4",
  },
  {
    branchLabel: "Hulu",
    imgSrc: "/assets/hulu.png",
    desc: "Hulu is the leading and most comprehensive all-in-one premium streaming service that offers an expansive slate of live and on-demand entertainment, both in and outside the home, through a wide array of subscription options that give consumers ultimate control over their viewing experience.",
    vSrc: "/videos/huluVideo.mp4",
  },
  {
    branchLabel: "Prime",
    imgSrc: "/assets/prime.png",
    desc: "Amazon Prime (stylized as simply Prime) is a paid subscription service of Amazon which is available in various countries and gives users access to additional services otherwise unavailable or available at a premium to other Amazon customers. Services include same, one- or two-day delivery of goods, and streaming music, video, e-books, gaming, and grocery shopping services",
    vSrc: "/videos/primeVideo.mp4",
  },
  {
    branchLabel: "Netflix",
    imgSrc: "/assets/netflix.png",
    desc: "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.",
    vSrc: "/videos/netflixVideo.mp4",
  },
  {
    branchLabel: "Marvel",
    imgSrc: "/assets/marvel.png",
    desc: "Marvel Comics is an American comic book publisher and the property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023.",
    vSrc: "/videos/marvelVideo.mp4",
  },
];

export default function Brands() {
  const [active, setActive] = useState(false);

  const handleOnClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={
        active ? styles.gridholder + " " + styles.active : styles.gridholder
      }
      onClick={handleOnClick}
    >
      {brands.map((item, index) => {
        return <CardItem key={index} {...item} />;
      })}
    </div>
  );
}
