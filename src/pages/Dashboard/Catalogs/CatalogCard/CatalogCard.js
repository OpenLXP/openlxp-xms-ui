'use strict';

import React from "react";
import Link from 'next/link';
import Image from 'next/image';

const CatalogCard = (props) => {
  const title = props.title;
  const img = props.img;

  return (
    <Link
      href={`/dashboard/${title}`}
      className="my-4"
      data-testid="nav-link">
      <div className="flex flex-row w-64 h-28 bg-gray-200 p-3 rounded-lg space-x-12 hover:shadow-lg transition-shadow">
        
        { img.src ?
            <Image src={img.src} alt={'catalog image'} width={'100'} height={'80'} priority={true}/> :
            <img src={img} alt="catalog image" className="object-contain rounded-md" width={100} />
        }
        
        <div className="font-sans font-thin self-center text-2xl">{title}</div>
      </div>
    </Link>
  );
};
export default CatalogCard;
