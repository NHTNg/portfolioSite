"use client";
import { useState } from "react";
import { NavLink } from "./Navlink";
import styles from "./Navlink.module.css";

export type Navigation = {
  href: string;
  label: string;
};

const navItems: Navigation[] = [
  { href: "/", label: "home" },
  { href: "/work", label: "works" },
  { href: "/about", label: "me" },
];

export default function Navbar() {
  const [collapse, setCollapse] = useState<boolean>(false);

  const toggleNav = () => {
    setCollapse((prev) => !prev);
  };

  return (
    <nav>
      <ul className={collapse ? styles.navigationClose : styles.navbar}>
        {navItems.map((item) => (
          <NavLink {...item} key={item.label} />
        ))}
      </ul>
      <button className={styles.toggleBtn} onClick={toggleNav}>
        Toggle
      </button>
    </nav>
  );
}
