import Link from 'next/link';
import Image from 'next/image';
import wolf from '/public/wolf.png';
import Cart from './ui/cart';
import AuthButton from './auth-button';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full h-20 flex items-center py-2 px-24 justify-between z-50 bg-white text-gray-300 border-b border-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src={wolf} alt="logo" width={60} height={80} />
      </Link>

      <div className="flex items-center gap-8">
        <Cart />
      </div>
    </nav>
  );
}
