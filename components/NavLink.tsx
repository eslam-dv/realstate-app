"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className,
  activeClassName,
  onClick,
}: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`${isActive && activeClassName} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
