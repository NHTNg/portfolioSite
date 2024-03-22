import Link from "next/link";
import type { Navigation } from ".";

export const NavLink: React.FC<Navigation> = ({ label, href }) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  );
};
