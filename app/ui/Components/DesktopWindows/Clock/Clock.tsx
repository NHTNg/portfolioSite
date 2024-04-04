"use client";
import { useEffect, useState } from "react";
import styles from "./Clock.module.css";
export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interValId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interValId);
  }, []);

  function timeFormat() {
    let hour = time.getHours();
    const minutes = time.getMinutes();
    const meridiem = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minutes < 10 ? `0${minutes}` : `${minutes}`} ${meridiem}`;
  }

  return (
    <div className={styles.clock}>
      <p>{timeFormat()}</p>
    </div>
  );
}
