import { Card } from "./Card";
import { users } from "../lib/data";

export default function CardGrid() {
  return (
    <div className="flex flex-col w-2/4 space-y-2">

       {users.map((user, index) => (
        <Card 
            key={index} 
            username={user.username} 
            email={user.email} 
            phone={user.phone} 
            link={user.link} 
        />
      ))}
    </div>
  );
}
