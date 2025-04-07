"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll olayını izle ve header stilini değiştir
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tüm cihazlarda tutarlı olması için buton stillerini tanımlayalım
  const loginButtonClass = "font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50";
  const signupButtonClass = "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-md" 
        : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2 flex items-center justify-between">
        <Link 
          href="/" 
          className="transition-transform hover:scale-105 duration-300 flex items-center"
        >
          <Image
            src="/images/SAYDAM LOGO.png"
            alt="Storya Logo"
            width={160}
            height={48}
            className="h-auto w-auto max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
            priority
          />
        </Link>

        {/* Mobil Menü Butonu */}
        <div className="flex md:hidden mr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            {isMenuOpen ? 
              <X size={24} className="text-gray-700" /> : 
              <Menu size={24} className="text-gray-700" />
            }
          </button>
        </div>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Button 
            variant="ghost" 
            className={`h-8 lg:h-9 px-3 lg:px-4 text-sm lg:text-base ${loginButtonClass}`}
            asChild
          >
            <Link href="/auth/login">Giriş Yap</Link>
          </Button>
          <Button 
            className={`h-8 lg:h-9 px-3 lg:px-4 text-sm lg:text-base ${signupButtonClass}`}
            asChild
          >
            <Link href="/auth/register">Üye Ol</Link>
          </Button>
        </div>
      </div>

      {/* Mobil Menü İçeriği - Animasyonlu */}
      <div 
        className={`md:hidden bg-white border-t overflow-hidden transition-all duration-300 ease-in-out shadow-md ${
          isMenuOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto py-3 px-4 flex flex-col space-y-3">
          <Button 
            variant="ghost" 
            className={`h-10 px-4 text-sm font-medium justify-center ${loginButtonClass}`}
            asChild
          >
            <Link href="/auth/login">Giriş Yap</Link>
          </Button>
          <Button 
            className={`h-10 px-4 text-sm font-medium justify-center ${signupButtonClass}`}
            asChild
          >
            <Link href="/auth/register">Üye Ol</Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 