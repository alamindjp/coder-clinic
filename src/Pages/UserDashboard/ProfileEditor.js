import { current } from 'daisyui/src/colors';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';
import Loader from '../SharedPage/Footer/Loader';

const ProfileEditor = () => {
    const [user, loading] = useAuthState(auth);
    const { displayName, photoURL, email }=user
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState(displayName);

    const onSubmit = data => {
        console.log(data)
        const updateProfile = {
            Name: data.name,
            Email: data.email,
            Phone: data.phone,
            Education: data.education,
            Password: data.new_pass
        }
        console.log(updateProfile)
    }

    if (loading) {
        return <Loader />
    }
    return (
        <div className='md:w-[95%] mx-auto bg-slate-200 rounded-xl divide-y-4 divide-slate-400 pb-10 pt-3 mt-5'>
            <div className='flex justify-between px-10 h-16 items-center'>
                <h3 className="text-3xl font-semibold">Edite Yours Profile Details</h3>
            </div>
            <div className=' backdrop-blur-md bg-blend-darken'>
                <div className='card bg-slate-300  mx-auto py-16 my-5 shadow-xl shadow-slate-700 w-[80%]'>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] mx-auto'>
                        <div class="flex items-end space-x-[-110px] mb-5 justify-center">
                            <div class="relative">
                                <img class="h-32 w-32 object-cover rounded-3xl" src="https://i.ibb.co/3Bb4sSV/nury-6cedf1776f60d6c11f34.png" alt="" />
                                <input type="file" class="block hover:cursor-pointer absolute top-24 mt-1 left-5 text-bold file:bg-[#fefeff57] w-[90px] font-semibold file:rounded-full file:border-0 file:text-sm" />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Full Name</span>
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChangeCapture={() => setName()}
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Email Address </span>
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("email")} />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Phone Number</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type Your Phone Numbers'
                                    onChangeCapture={() => setName()}
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("phone")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-semibold">Educational States</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type Your last Education Certificate'
                                    onChangeCapture={() => setName()}
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("education")} />
                            </div>
                            
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Password</span>
                            </label>
                            <div className='grid sm:grid-cols-3 gap-x-5 gap-y-3 sm:gap-y-0'>
                                <input
                                    required
                                    type="text"
                                    placeholder="Current"
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("current_pass")} />
                                <input
                                    required
                                    type="text"
                                    placeholder="New"
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("new_pass")} />
                                <input
                                    required
                                    type="text"
                                    placeholder="Retype"
                                    className="input input-bordered w-full bg-slate-100"
                                    {...register("retype")} />
                            </div>
                        </div>
                        <div className="form-control mt-6 w-[200px] mx-auto">
                            <input className="btn btn-primary" type="submit" value='Submit' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileEditor;