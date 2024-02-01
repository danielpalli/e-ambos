'use client';

import Link from "next/link"
import { IoSearchOutline, IoCartOutline } from "react-icons/io5"
import { titleFont } from "@/config/fonts"
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      {/* { logo } */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>Ambos Sabina</span>
          <span> | Tienda</span>
        </Link>
      </div>
      {/* { center } */}
      <div className="gap-2 hidden sm:block sm:space-x-3">
        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/categoria/hombres">
          Hombres
        </Link>
        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/categoria/mujeres">
          Mujeres
        </Link>
        <Link className="p-2 rounded-md transition-all hover:bg-gray-100" href="/categoria/accesorios">
          Accesorios
        </Link>  
      </div>

      {/* { right } */}
      <div className="flex items-center  gap-x-2">
        <Link href="/buscador">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/carrito">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 text-white bg-red-700 -right-2">3</span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button onClick={openSideMenu} className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>
      </div>
    </nav>
  )
}
