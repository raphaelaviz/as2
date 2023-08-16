'use client'

import Image from "next/image";


export default function DetailsPage({params: {id}}) {

  const storedFriends = localStorage.getItem('friends');
  const friendsList = storedFriends ? JSON.parse(storedFriends) : [];

  // Find the friend with the matching ID
  const friend = friendsList.find(f => f.id === parseInt(id));

  return (
    <div className="flex-center">
      <div className="w-2/3 flex justify-center h-[550px] border-2 border-gray-500 border-opacity-5 rounded shadow-2xl p-8">
        <div className="flex">
            <div>
              <h1 className="text-5xl text-gray-700">{friend.name}'s details</h1>

              
              <Image src={friend.image} alt={friend.name} width={200} height={200} />
              
              
              <p>{friend.name}</p>
              <p>{friend.email}</p>
             
            </div>
        </div>
      </div>
    </div>
  );
}