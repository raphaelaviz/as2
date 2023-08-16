
'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { createUserFormSchema } from "../lib/validations";

export default function AddFriendForm() {

    const [output, setOutput] = useState('');

    const createUser = (data) => {
        setOutput(JSON.stringify(data, null, 2));
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(createUserFormSchema)
      });

  return (
    <form className="w-1/3 border-2 border-gray-300 rounded p-6 flex flex-col space-y-2" onSubmit={handleSubmit(createUser)}>
        <label htmlFor="name">Friend's name:</label>
        <input
            type="text"
            className="border border-zinc-200 shadow-sm rounded p-2"
            {...register('name')}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

        <label htmlFor="email">Friend's email:</label>
        <input
            type="email"
            className="border border-zinc-200 shadow-sm rounded p-2"
            {...register('email')}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

        <label htmlFor="password">Password:</label>
        <input
            type="password"
            className="border border-zinc-200 shadow-sm rounded p-2"
            {...register('password')}
        />
        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

        <button className="border-2 p-2 bg-gray-800 rounded text-zinc-200 hover:text-orange-400">Submit</button>

        {output}
    </form>
  );
}
