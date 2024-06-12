import Link from "next/link";
import { ReactNode } from "react";

export default function HeaderButton({ children }: { children: ReactNode }) {
  return (
    <Link
      href=""
      className="px-3 py-2 -mx-3 -my-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-300"
    >
      {children}
    </Link>
  );
}
