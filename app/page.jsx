import CardGrid from './components/CardGrid'
import AddFriendButton from './components/AddFriendButton'
import DeleteFriendModal from './components/DeleteFriendModal'
import EditFriendModal from './components/EditFriendModal'

export default function Home() {
  return (
    <main className='flex justify-center'>
      <CardGrid/>
      <AddFriendButton/>
      <EditFriendModal/>
      
    </main>
  )
}
