'use client'

import { useState, useEffect } from 'react';
import { Card } from "./Card";
import DeleteFriendModal from './DeleteFriendModal';

export default function CardGrid() {
  const [friends, setFriends] = useState([]);
  const [idToDelete, setIdToDelete] = useState(null); 

  useEffect(() => {
    const fetchFriendsFromLocalStorage = () => {
      const storedData = localStorage.getItem('friends');
      if (storedData) {
        setFriends(JSON.parse(storedData));
      }
    };

    fetchFriendsFromLocalStorage();
  }, []);

  const markFriendForDeletion = (friendId) => {
    setIdToDelete(friendId);
    modal_delete_friend.showModal();
  };

  return (
    <div className="flex flex-col w-2/4 space-y-2">
      {friends.length === 0 ? (
        <div className="text-6xl mt-20">
          <p className='text-center text-gray-400 text-opacity-50'>You haven't added any friends yet.</p>
        </div>
      ) : (
        friends.map((friend) => (  
          <Card
            key={friend.id}
            id={friend.id}
            username={friend.name}
            email={friend.email}
            image={friend.image}
            link={friend.link}
            onDelete={markFriendForDeletion}
          />
        ))
      )}
      <DeleteFriendModal
        friendId={idToDelete}
        onConfirmDelete={setFriends}
      />
    </div>
  );
}
