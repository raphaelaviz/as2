'use client'

import { useState, useEffect } from 'react';
import { Card } from "./Card";

export default function CardGrid() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriendsFromLocalStorage = () => {
      const storedData = localStorage.getItem('friends');
      if (storedData) {
        setFriends(JSON.parse(storedData));
      }
    };

    fetchFriendsFromLocalStorage();
  }, []);

  return (
    <div className="flex flex-col w-2/4 space-y-2">
      
      {friends.map((user, id) => (
        <Card
          key={user.id} 
          id={user.id} 
          username={user.name} 
          email={user.email} 
          phone={user.phone} 
          link={user.link} 
        />
      ))}

    </div>
  );
}

