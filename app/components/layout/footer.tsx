import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6 dark:border-gray-800 dark:bg-gray-950 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:h-24 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-gray-500 dark:text-gray-400 md:text-left">
            Built by <Link href="/" className="font-medium text-gray-900 underline underline-offset-4 dark:text-gray-50">Amekr</Link>. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
           <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Privacy Policy</Link>
           <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
