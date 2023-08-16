import Link from "next/link";
import {AiOutlineEdit, AiOutlineDelete} from 'react-icons/ai'
import {CgDetailsMore} from 'react-icons/cg'
import { currentUser } from "@clerk/nextjs";


export async function Card({username, email, link}) {
  const user = await currentUser()

  return (
    <div className="relative flex items-center justify-between px-8 border-2 border-gray-700 rounded-lg h-20 text-gray-800">
        <p>Name: {username}</p>
        <p className="">Email: {email}</p>

        {user && (<div className="flex space-x-4 text-3xl">
          <Link href={'/friend-detail'}>
            <CgDetailsMore/>
          </Link>
          <AiOutlineEdit/>
          <AiOutlineDelete/>

        </div>)}
  
    </div>
  );
}