import Link from "next/link";
import styles from "../AppFrame/WindowsFrame.module.css";
import Image from "next/image";

export default function Notification({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.notificationFrame}>
      <div className={styles.windowsTitle}>
        <div className={styles.windowsLeft}>
          <p className={styles.title}>404 - Not found!</p>
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
      <div className={styles.noti}>{children}</div>
    </div>
  );
}
