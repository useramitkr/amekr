import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image 
            src="/logo/amekr-logo.webp" 
            alt="Amekr Logo" 
            width={120} 
            height={40}
            className="h-auto w-auto max-h-12"
            priority
          />
        </Link>
        <nav className="flex flex-1 items-center justify-end space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-gray-600 dark:hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            About
          </Link>
          <Link href="/services" className="transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Services
          </Link>
          <Link href="/contact" className="transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
            Contact
          </Link>
          <div className="ml-4 flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
