"use client";
import React, { FC } from "react";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SocialMedia from "./SocialMedia";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-300 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        transition={{ duration: 0.3 }}
        ref={sidebarRef}
        className="w-80 bg-red-950 text-white p-6 h-full flex flex-col gap-6"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">DEVILLIX ART</Logo>
          </button>
          <button className="hover:text-red-500" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 text-lg font-semibold">
          {headerData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className={`hover:text-white ${
                pathname === item.href ? "text-white" : "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Social Media Links */}
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default Sidebar;
