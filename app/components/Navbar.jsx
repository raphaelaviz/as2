import Image from "next/image";
import logo from '../../public/logo.png';
import Link from "next/link";
import { currentUser, SignIn, SignInButton, UserButton } from "@clerk/nextjs";



export async function Navbar() {
    const user = await currentUser()


    return (
        <nav className="w-full h-16 flex items-center px-6 md:px-8 justify-between border-2 border-opacity-10 border-gray-500 mb-10">
            <div className="relative">
                <Link href={'/'}>
                    <h1 className="text-2xl font-extrabold">FRIENDS</h1>
                </Link>
            </div>
    
            {user ? (
                <div className="flex-center space-x-2 text-gray-700">
                    <p>Hello, {user.firstName}</p>
                    <UserButton afterSignOutUrl='/' />
                </div>
            ) : (
                <SignInButton mode='modal'>
                    <button className='border-2 border-gray-500 rounded p-2'>
                        Sign in
                    </button>
                </SignInButton>
            )}
        </nav>
    );
}
