import Image from "next/image";
import Link from "next/link";
import styles from "./Modal.module.css";

type PropsProgram = {
  href: string;
  srcImg: string;
  label: string;
  active: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Program({
  href,
  srcImg,
  label,
  active,
  setOpen,
}: PropsProgram) {
  return active ? (
    <Link href={href}>
      <Image src={srcImg} alt={srcImg} width={40} height={40} />
      <button onClick={() => setOpen(false)}>{label}</button>
    </Link>
  ) : (
    <div className={styles.inactiveLink}>
      <Image src={srcImg} alt={srcImg} width={40} height={40} />
      <button onClick={() => setOpen(false)}>{label}</button>
    </div>
  );
}
