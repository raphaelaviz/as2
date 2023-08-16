'use client';
import { useState, useEffect } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import Image from "next/image";

function AssociateFriendsButton({ currentFriend }) {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [friendsList, setFriendsList] = useState([]);


    //grabs the entire friends list and excludes the current friend being displayed on the page
    useEffect(() => {
        const storedFriends = localStorage.getItem('friends');
        if (storedFriends) {
            const allFriends = JSON.parse(storedFriends);
            const friendsExcludingCurrent = allFriends.filter(friend => friend.id !== parseInt(currentFriend));
            setFriendsList(friendsExcludingCurrent);
        }
    }, [currentFriend]);

    return (
        <div className="relative">
            <button 
                className="text-4xl"
                onBlur={() => setDropdownVisible(false)}
                onClick={() => setDropdownVisible(!dropdownVisible)}
            >
                <AiOutlineUsergroupAdd/>
            </button>

            {dropdownVisible && (
                <div className="absolute p-4 left-0 mt-2 w-max rounded-md shadow-lg border-2 border-gray-500">
                    {friendsList.length === 0 ? (
                        <p>No other friends added yet.</p>
                    ) : (
                        friendsList.map((friend) => (
                            <div key={friend.id} className="py-1 flex space-x-2">
                                <div>
                                    <Image src={friend.image} width={40} height={40}/>
                                </div>
                                <div className="flex flex-col">
                                <p><strong>Name:</strong> {friend.name}</p>
                                <p><strong>Email:</strong> {friend.email}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}

export default AssociateFriendsButton;
