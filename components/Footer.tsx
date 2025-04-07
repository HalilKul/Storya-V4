"use client";

import { Instagram, Linkedin, Facebook, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#121826] py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2025 Storya. Tüm hakları saklıdır.
          </div>
          <div className="flex space-x-5">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 