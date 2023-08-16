'use client'

import Image from "next/image";
import AssociateFriendsButton from '../../../components/AssociateFriendsButton'

export default function DetailsPage({params: {id}}) {

  const storedFriends = localStorage.getItem('friends');
  const friendsList = storedFriends ? JSON.parse(storedFriends) : [];

  const friend = friendsList.find(f => f.id === parseInt(id));

  return (
    <div className="flex-center">
      <div className="w-2/3 flex justify-center h-[550px] border-2 border-gray-500 border-opacity-5 rounded shadow-2xl p-8">
        <div className="flex flex-col gap-y-20">
            <div className="flex justify-between">
              <h1 className="text-5xl text-gray-700">{friend.name}'s details</h1>
              <AssociateFriendsButton currentFriend={id}/>
              
            </div>
            <div className="flex gap-x-8">
              <Image 
                src={friend.image} 
                alt={friend.name} 
                width={200} 
                height={200} 
                />
            <div className="flex flex-col text-3xl space-y-2">

              <h1>Name: {friend.name}</h1>
              <h2>Email: {friend.email}</h2>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}