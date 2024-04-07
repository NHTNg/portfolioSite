"use client";
import { usePathname } from "next/navigation";
import Clock from "../Clock/Clock";
import styles from "./Taskbar.module.css";

export default function Taskbar() {
  const pathname = usePathname();
  return (
    <div className={styles.taskbar}>
      <div>
        <button className={styles.startbutton}></button>
      </div>
      {pathname}
      <Clock />
    </div>
  );
}
