'use client'

import React from 'react'
import AddFriendForm from '../components/AddFriendForm'

const handleDeleteFriend = () => {
    console.log("DELETED")
}
export default function EditFriendModal () {
    return (
        <dialog id="modal_edit_friend" className="modal modal-bottom sm:modal-middle">
          <AddFriendForm/>
        </dialog>
      )
}

