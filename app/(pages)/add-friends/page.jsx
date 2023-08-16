'use client'

import AddFriendForm from "../../components/AddFriendForm";

const handleButtonClick = () => {
  const storedData = localStorage.getItem('friends');
  console.log(storedData);
}
export default function page() {
  return (
    <div>
      <AddFriendForm/>
      <button onClick={handleButtonClick}>Log LocalStorage</button>
      <button onClick={() => localStorage.clear()}>Clear LocalStorage</button>
    </div>
  );
}