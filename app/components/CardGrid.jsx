import { Card } from "./Card";
import { users } from "../lib/data";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
       {users.map((user, index) => (
        <Card 
            key={index} 
            username={user.username} 
            email={user.email} 
            phone={user.phone} 
            link={user.link} 
        />
      ))}
      aaa
    </div>
  );
}
