import Link from "next/link";
import React from "react";
import { FaBug } from "react-icons/fa";

export const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 h-14 items-center border-b mb-5 px-5">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href="/"
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
