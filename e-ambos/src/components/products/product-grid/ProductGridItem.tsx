'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Product } from '@/interfaces';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  const handleMouseOver = () => {
    setDisplayImage(product.images[1]);
  };

  const handleMouseLeave = () => {
    setDisplayImage(product.images[0]);
  }


  return (
    <div className="rounded-md overflow-hidden fade-in shadow-sm">
      <Link href={`/producto/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded-sm hover:scale-105 transition-transform duration-300 ease-in-out"
          width={400}
          height={350}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link
          href={`/producto/${product.slug}`}
          className="hover:text-blue-600"
        >
          {product.title}
        </Link>
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};
