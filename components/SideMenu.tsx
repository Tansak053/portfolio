"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", icon: HomeIcon },
  { href: "/aboutme", icon: UserIcon },
  { href: "/eduexp", icon: EducationIcon },
  { href: "/spec", icon: LayersIcon },
  { href: "/projects", icon: BriefcaseIcon },
  { href: "/skills", icon: CodeIcon },
  { href: "/contact", icon: MessageIcon },
];

export default function RightMenu() {
  const pathname = usePathname();

  return (
    <div className="right-menu-wrapper">
      <div className="right-menu">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link key={index} href={item.href}>
              <div className={`menu-item ${isActive ? "active" : ""}`}>
                <Icon />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ================= ICONS ================= */

function HomeIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10L12 3l9 7" />
      <path d="M5 10v9h14v-9" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c2-4 6-6 8-6s6 2 8 6" />
    </svg>
  );
}

function EducationIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 7l10-4 10 4-10 4-10-4z" />
      <path d="M6 10v5c0 2 3 4 6 4s6-2 6-4v-5" />
    </svg>
  );
}

function LayersIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="14" height="14" rx="2" />
      <path d="M4 10h14" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5h8v2" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="8 17 3 12 8 7" />
      <polyline points="16 7 21 12 16 17" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    </svg>
  );
}