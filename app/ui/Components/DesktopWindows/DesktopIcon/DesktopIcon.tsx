import Image from "next/image";
import styles from "./Icons.module.css";
import Link from "next/link";

export default function Icon({
  iconImg,
  iconTitle,
  href
}: {
  href: string;
  iconImg: string;
  iconTitle: string;
}) {
  return (
    <Link href={href} className={styles.icon}>
      <Image src={iconImg} width={60} height={60} alt={iconTitle} />
      <p>{iconTitle}</p>
    </Link>
  );
}
