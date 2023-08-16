import Link from "next/link";




export function Card({username, email, phone, link}) {
  return (
    <div className="relative border-2 border-gray-700 rounded-lg w-[450px] h-[250px] p-8 space-y-4 text-gray-800 shadow-md">
        <h1 className="text-2xl">Name: {username}</h1>
        <h2 className="">Email: {email}</h2>
        <h3>Contact number: {phone}</h3>
        <Link href={'/'} className="w-max relative top-14 left-72 border-2 p-3 border-gray-700 rounded-lg font-bold hover:bg-gray-700 hover:bg-opacity-25 ">
            See Profile
        </Link>
    </div>
  );
}