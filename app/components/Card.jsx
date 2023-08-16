'use client'

import Link from "next/link";
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';
import { useUser } from '@clerk/nextjs';
import Image from "next/image";


export function Card({ username, email, id, image, onDelete }) {
  const { isLoaded, isSignedIn } = useUser();

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <div className="card__container">
      <Image src={image} width={60} height={60} />
      <p className="card__badge">{id}</p>
      <p>Name: {username}</p>
      <p>Email: {email}</p>

      {isLoaded && isSignedIn && (
        <div className="flex space-x-4 text-3xl">
          <Link className="card__button" href={`/friend-detail/${id}`}>
            <CgDetailsMore />
          </Link>
          <button className="card__button" onClick={() => modal_edit_friend.showModal()}>
            <AiOutlineEdit />
          </button>
          <button className="card__button" onClick={handleDeleteClick}>
            <AiOutlineDelete />
          </button>
        </div>
      )}
    </div>
  );
}
