import Link from "next/link";
import styles from "./Modal.module.css";

type ModalProp = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalPopup({ open, setOpen }: ModalProp) {
  return (
    <div className={open ? styles.modalOpen : styles.modalClose}>
      <div className={styles.side}>
        <p>Windows98</p>
      </div>
      <div className={styles.contentList}>
        <Link href="/devcard">
          <button className={styles.btnProgram} onClick={() => setOpen(false)}>
            DevCard
          </button>
        </Link>
        <Link href="/about">
          <button className={styles.btnProgram} onClick={() => setOpen(false)}>
            About
          </button>
        </Link>
        <Link href="/">
          <button
            className={styles.btnProgram}
            onClick={() => setOpen(false)}
          ></button>
        </Link>
      </div>
    </div>
  );
}
