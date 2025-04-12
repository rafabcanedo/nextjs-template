'use client';
import { useState } from 'react';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../button';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="w-full fixed top-0 left-0 z-10 md:px-36">
      <div className="md:flex items-center justify-between bg-backgroundmain py-4 md:px-10 px-7 shadow rounded-md">
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold">Logo</h1>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <X className="text-[#A1A1A1]" /> : <AlignRight className="text-[#A1A1A1]" />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-backgroundmain md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100 shadow-md' : 'top-[-490px] md:opacity-100 opacity-0'
          }`}
        >
          <li
            className="text-lg text-suub font-mont hover:underline decoration-azzurro mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            Projects
          </li>
          <li
            className="text-lg text-suub font-mont hover:underline decoration-azzurro mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            <Link href="/about" className="hover:underline decoration-azzurro">
              Sobre Nós
            </Link>
          </li>
          <li
            className="text-lg text-suub font-mont hover:underline decoration-azzurro mr-6 md:ml-8 md:my-0 my-7 cursor-pointer"
            onClick={closeMenu}
          >
            <Link href="/socials" className="hover:underline decoration-azzurro">
              Socials
            </Link>
          </li>
          <a
            href="https://www.instagram.com/azzurroapp/"
            target="_blank"
            rel="nooperner noreferrer"
          >
            <Button className="mr-6 md:ml-8 md:my-0 my-7">Contato</Button>
          </a>
        </ul>
      </div>
    </div>
  );
}
