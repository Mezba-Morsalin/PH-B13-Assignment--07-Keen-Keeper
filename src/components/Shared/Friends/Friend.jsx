import React from 'react';
import { Link } from 'react-router';

const Friend = ({friend}) => {
    return (
        <Link to={`/friends/${friend.id}`} className='bg-white p-6 rounded-xl shadow space-y-3 text-center'>
            <img className='w-30 h-30 rounded-full mx-auto' src={friend.picture} alt="" />
            <h2 className='text-xl font-bold'>{friend.name}</h2>
            <p className='text-[#64748B]'>{friend.days_since_contact}d ago</p>
            <div className='flex gap-4 justify-center items-center'>
                {
                friend.tags.map((tag, index) => {
                    return (
                        <div className='bg-green-300 text-[#244D3F] py-2 px-4 rounded-full text-center' key={index}>
                            {tag}
                        </div>
                    )
                })
            }
            </div>
            <div className='flex justify-center items-center'>
                <p
                className={
                    friend.status === "overdue"
                      ? "bg-red-500 text-white px-3 py-1 rounded-full w-26"
                      : friend.status === "almost due"
                      ? "bg-yellow-500 text-white px-3 py-1 rounded-full w-34"
                      : "bg-[#244D3F] text-white px-3 py-1 rounded-full w-26"}>{friend.status}
                </p>
            </div>
        </Link>
    );
};

export default Friend;