import CardGrid from './components/CardGrid'
import AddFriendButton from './components/AddFriendButton'

export default function Home() {
  return (
    <main className='flex justify-center'>
      <CardGrid/>
      <AddFriendButton/>
    </main>
  )
}
