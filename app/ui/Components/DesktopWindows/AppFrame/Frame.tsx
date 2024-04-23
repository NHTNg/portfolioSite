"use client";
import Link from "next/link";
import styles from "./WindowsFrame.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Frame = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  const pathname = usePathname();
  const titleContent = pathname.slice(1);

  return (
    <div className={styles.frame} id={id}>
      <div className={styles.windowsTitle}>
        <div className={styles.windowsLeft}>
          <Image
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "20px" }}
            className={styles.icon}
            src="/imagesDesktop/notepad.png"
          />
          <p className={styles.title}>
            {titleContent.charAt(0).toLocaleUpperCase() + titleContent.slice(1)}{" "}
          </p>
        </div>
        <div className={styles.windowsRight}>
          <Link href="" className={styles.btnLink}>
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={styles.btnExit}
              src="/imagesDesktop/Minimize.png"
            />
          </Link>
          <Link href="" className={styles.btnLink}>
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={styles.btnExit}
              src="/imagesDesktop/Maximize.png"
            />
          </Link>
          <Link href="/" className={styles.btnLink}>
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={styles.btnExit}
              src="/imagesDesktop/Cross.png"
            />
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
