'use client'

import React from 'react'


export default function DeleteFriendModal({ friendId, onConfirmDelete }) {
  
    const handleDeleteFriend = () => {
      if (friendId) {
        const storedFriends = JSON.parse(localStorage.getItem('friends') || '[]');
        const updatedFriends = storedFriends.filter(friend => friend.id !== friendId);
        
        localStorage.setItem('friends', JSON.stringify(updatedFriends));
        onConfirmDelete(updatedFriends); 
        
        const modal = document.getElementById('modal_delete_friend');
        modal.close();
      }
    };
  
    return (
        <dialog id="modal_delete_friend" className="modal modal-bottom sm:modal-middle">
          <form method="dialog" className="modal-box">
            <h1 className="text-lg font-bold">
              Are you absolutely sure?
            </h1>
            <p className="py-4">
              This action can not be undone. This will permanently delete the
              entry from your friend's list.
            </p>
            <div className="modal-action">
              <button aria-label="cancel" className="btn">
                Cancel
              </button>
              <button
                aria-label='confirm_delete'
                onClick={handleDeleteFriend}
                className="btn bg-red-200 text-red-500"
              >
                Delete friend
              </button>
            </div>
          </form>

        </dialog>
      )
}

