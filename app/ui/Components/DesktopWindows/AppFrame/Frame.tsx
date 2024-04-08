"use client";
import Link from "next/link";
import styles from "./WindowsFrame.module.css";
import { usePathname } from "next/navigation";

const Frame = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const titleContent = pathname.slice(1);

  return (
    <div className={styles.frame}>
      <div className={styles.windowsTitle}>
        <div className={styles.windowsLeft}>
          <img className={styles.icon} src="/imagesDesktop/notepad.png" />
          <p className={styles.title}>
            {titleContent.charAt(0).toLocaleUpperCase() + titleContent.slice(1)}{" "}
          </p>
        </div>
        <div className={styles.windowsRight}>
          <Link href="" className={styles.btnLink}>
            <img className={styles.btnExit} src="/imagesDesktop/Minimize.png" />
          </Link>
          <Link href="" className={styles.btnLink}>
            <img className={styles.btnExit} src="/imagesDesktop/Maximize.png" />
          </Link>
          <Link href="/" className={styles.btnLink}>
            <img className={styles.btnExit} src="/imagesDesktop/Cross.png" />
          </Link>
        </div>
      </div>
      <div className={styles.windowsMenu}>
        <button>File</button>
        <button>Edit</button>
        <button>Search</button>
        <button>Help</button>
      </div>
      <div className={styles.contentFrame}>{children}</div>
    </div>
  );
};

export default Frame;
