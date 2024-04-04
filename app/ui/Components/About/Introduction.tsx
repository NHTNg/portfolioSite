"use client";
import React, { useState } from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function Introduction() {
  const [disable, setDisable] = useState<boolean>(false);
  let timeoutID;

  const download = (url: string) => {
    setDisable(true);
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", fileName as string);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
    timeoutID = setTimeout(() => {
      setDisable(false);
    }, 2000);
  };

  clearTimeout(timeoutID);

  return (
    <div id="intro" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.outerContent}>
          <div className={styles.introLeft}>
            <div className={styles.content}>
              <h1>Who Am I?</h1>
              <h3>
                “My name is Nguyen Ngoc Huu Thong. I am a front-end developer
                with expertise in technologies such as HTML, CSS, JavaScript,
                and various popular frameworks. My goal is to bring designs to
                life with clean, efficient code.”
              </h3>
            </div>
            <button
              disabled={disable ? true : false}
              className={disable ? styles.disableBtn : styles.downloadBtn}
              onClick={() => download("/files/resume.pdf")}
            >
              Download my Résumé
            </button>
          </div>
          <div className={styles.introRight}>
            <Image
              src="/assets/userAvata.png"
              alt="user"
              width={470}
              height={470}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
