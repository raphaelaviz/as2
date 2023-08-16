'use client'

import React from 'react'
import AddFriendForm from '../components/AddFriendForm'

const handleDeleteFriend = () => {
    console.log("DELETED")
}
export default function EditFriendModal () {


  //TO DO: adjust the form to be reused here. The fields should be prefilled with the existing friend's data.

    return (
        <dialog id="modal_edit_friend" className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
              <AddFriendForm/>
            
            <div className="modal-action">
              <button aria-label="cancel" className="btn">
                Cancel
              </button>
              
            </div>
          </form>
        </dialog>
      )
}

