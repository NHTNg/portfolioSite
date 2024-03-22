import { NavLink } from "./Navlink";
import styles from "./Navlink.module.css";

export type Navigation = {
  href: string;
  label: string;
};

export default function Navbar() {
  const navItems: Navigation[] = [
    { href: "/", label: "home" },
    { href: "/work", label: "works" },
    { href: "/#aboutme", label: "me" },
  ];

  return (
    <ul className={styles.navbar}>
      {navItems.map((item) => (
        <NavLink {...item} key={item.label} />
      ))}
    </ul>
  );
}
