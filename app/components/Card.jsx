'use client'

import Link from "next/link";
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {CgDetailsMore} from 'react-icons/cg'
import { useUser } from '@clerk/nextjs'
import Image from "next/image";


export function Card({username, email, id, image}) {
  const {isLoaded, isSignedIn} = useUser()

  return (
    <div className="relative flex items-center justify-between px-8 border-2 border-gray-700 rounded-lg h-20 text-gray-800">
      <Image src={image} width={60} height={60}/>
        <p className="p-3 rounded-full bg-yellow-300 w-12 h-12 flex-center font-extrabold">{id}</p>
        <p>Name: {username}</p>
        <p className="">Email: {email}</p>

        {isLoaded && isSignedIn && (<div className="flex space-x-4 text-3xl">
        <Link className="card__button" href={`/friend-detail/${id}` } >
            <CgDetailsMore/>
          </Link>

          <button className="card__button">
            <AiOutlineEdit/>
          </button>
          <button className="card__button">

            <AiOutlineDelete/>
          </button>

        </div>)}
  
    </div>
  );
}