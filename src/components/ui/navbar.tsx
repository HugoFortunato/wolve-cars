import Link from 'next/link';
import Cart from './cart';
import Image from 'next/image';
import model from '/public/model3.svg';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-24 justify-between z-50 bg-white text-gray-300 border-b border-gray-300">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        <Image src={model} alt="logo" width={150} height={150} />
      </Link>

      <div className="flex items-center gap-8">
        <Cart />
      </div>
    </nav>
  );
}
