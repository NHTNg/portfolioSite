"use client";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import Clock from "../Clock/Clock";
import styles from "./Taskbar.module.css";
import ModalPopup from "../Modal/Modal";

export default function Taskbar() {
  const refModal = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const handleToggleModal = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handle = (e: SyntheticEvent<HTMLDivElement, MouseEvent>) => {
      if (!refModal.current?.contains(e.target as any)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handle as any);
    return () => {
      document.removeEventListener("mousedown", handle as any);
    };
  });

  return (
    <div className={styles.taskbar} ref={refModal}>
      <div>
        <button
          className={styles.startbutton}
          onClick={handleToggleModal}
        ></button>
      </div>
      <ModalPopup open={open} setOpen={setOpen} />
      <Clock />
    </div>
  );
}
