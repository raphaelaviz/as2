'use client'

import { Toaster } from "react-hot-toast";
import AddFriendForm from "../../components/AddFriendForm";

const handleButtonClick = () => {
  const storedData = localStorage.getItem('friends');
  console.log(storedData);
}
export default function page() {
  return (
    <div className="flex-center flex-col space-y-8">
      <AddFriendForm/>
      <button onClick={handleButtonClick}>Log LocalStorage</button>
      <button onClick={() => localStorage.clear()}>Clear LocalStorage</button>
      <Toaster/>
    </div>
  );
}