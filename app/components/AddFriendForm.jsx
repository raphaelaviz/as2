'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserFormSchema } from "../lib/validations";
import { useState } from 'react';
import { womenImages, menImages } from '../lib/data'
import toast from 'react-hot-toast';

export default function AddFriendForm() {
    
    const [emailError, setEmailError] = useState('');

    const createFriend = (data) => {        
        const storedFriends = localStorage.getItem('friends');
        const currentFriends = storedFriends ? JSON.parse(storedFriends) : [];
    

        //checkss for unique email
        const emailExists = currentFriends.some(friend => friend.email === data.email);
        if(emailExists) {
            setEmailError('This email is already in use.');
            return;
        }
    
        // Autoincrement friend's ID field
        const maxId = currentFriends.length > 0 ? Math.max(...currentFriends.map(friend => friend.id)) : 0;
        const newId = maxId + 1;
    
        const imageArray = data.image === 'woman' ? womenImages : menImages;
        const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

        const newFriend = {
            id: newId,
            name: data.name,
            email: data.email,
            image: randomImage
            //to do: add associate friends object
        };
    
        currentFriends.push(newFriend);
        localStorage.setItem('friends', JSON.stringify(currentFriends));
    
        setEmailError('');
        toast.success('Friend added to the list.', { position: 'top-center', duration: 4000 });
        reset();
    }
    
    
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(createUserFormSchema)
      });

  return (
    <form className="form__container" onSubmit={handleSubmit(createFriend)}>
        <label htmlFor="name">Friend's name:</label>
        <input
            type="text"
            className="form__field"
            {...register('name')}
        />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}

        <label htmlFor="email">Friend's email:</label>
        <input
            type="email"
            className="form__field"
            {...register('email')}
        />
        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        {emailError && <span className="text-red-500">{emailError}</span>}

        <label htmlFor="genderForImage">Choose Image:</label>
        <select 
            className="form__field"
            {...register('image')}
        >
            <option value="">Select an option</option>
            <option value="man">Man's Image</option>
            <option value="woman">Woman's Image</option>
        </select>

        {errors.image && <span className="text-red-500">{errors.image.message}</span>}


        <button className="form__button">Submit</button>

       
    </form>
  );
}
