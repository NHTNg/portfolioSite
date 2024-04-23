"use client";

import useDragger from "@/app/hooks/useDragger";
import styles from "./draggable.module.css";

export default function DraggableComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  useDragger("red");
  return (
    <div className={styles.dragContainer}>
      <div id="red" className={styles.box}>
        {children}
      </div>
    </div>
  );
}
