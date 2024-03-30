import Link from "next/link";
import type { Navigation } from ".";
import styles from "./Navlink.module.css";
import { usePathname } from "next/navigation";

export const NavLink: React.FC<Navigation> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <li className={pathname === `${href}` ? styles.active : ""}>
      <Link href={href}>{label}</Link>
    </li>
  );
};
