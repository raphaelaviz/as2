import Link from "next/link"

const AddFriendButton = () => {

  return (
    
        <Link href={'/add-friends'} className='flex-center fixed bottom-4 right-0 rounded-l-full bg-gray-800 p-7 text-zinc-200 text-2xl hover:text-orange-400'>
            Add new friends
        </Link>

  )
}

export default AddFriendButton