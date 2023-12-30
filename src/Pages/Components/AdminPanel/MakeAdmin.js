import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loader from '../../SharedPage/Footer/Loader';

const MakeAdmin = () => {


    const [user, setUser] = useState([])
    // console.log(user)

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])


    const alreadyAdmin = () => {

        alert('already rolling as admin')
    }



    const makeAdmin = (user) => {



        console.log(user)
        fetch(`http://localhost:5000/user/admin/${user}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => {

                if (res.status === 403) {
                    alert('Failed to make an Admin. You must have to be an Admin');
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('successfully made an Admin');
                }
            })
    }






    return (
        <div className='ml-5 mt-10'>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {user.map((u, index) =>

                            <tr class="hover">
                                <th>{index + 1}</th>
                                <td style={{ width: '300px' }}>{u.user}</td>
                                <td> {u.role !== 'admin' ? <button onClick={() => makeAdmin(u.user)} className='btn btn-xs'> Make Admin </button> : <p onClick={alreadyAdmin} className='btn bg-red-500 border-0 btn-xs'> rolling as Admin </p>} </td>
                                <td><button className='btn btn-xs'>Delete</button></td>
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MakeAdmin;