import React from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { CiVideoOn } from 'react-icons/ci';
import { HiOutlineBellSnooze } from 'react-icons/hi2';
import { IoCallOutline } from 'react-icons/io5';
import { LuArchiveRestore } from 'react-icons/lu';
import { MdHistory, MdOutlineDeleteForever } from 'react-icons/md';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
    const {id} = useParams();
    const friendData = useLoaderData();
    const findFriend = friendData.find(friend => friend.id === Number(id))
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
                <div className='space-y-3.5 md:col-span-4'>
                    <div className='bg-white shadow p-6 rounded-2xl space-y-3'>
                        <img className='w-40 h-40 rounded-full' src={findFriend.picture} alt="" />
                        <h4 className='text-xl font-bold'>{findFriend.name}</h4>
                        <p
                className={
                    findFriend.status === "overdue"
                      ? "bg-red-500 text-white px-3 py-1 rounded-full w-26"
                      : findFriend.status === "almost due"
                      ? "bg-yellow-500 text-white px-3 py-1 rounded-full w-34"
                      : "bg-[#244D3F] text-white px-3 py-1 rounded-full w-26"}>{findFriend.status}
                </p>
                <p className='text-[#64748B]'>{findFriend.bio}</p>
                <p className='text-[#64748B]'>Preferred : {findFriend.email}</p>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl'>
                        <button className='flex items-center gap-2 text-lg font-semibold'><HiOutlineBellSnooze></HiOutlineBellSnooze>Snooze 2 weeks</button>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl'>
                        <button className='flex items-center gap-2 text-lg font-semibold'><LuArchiveRestore></LuArchiveRestore> Archive</button>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl'>
                        <button className='flex items-center gap-2 text-lg font-semibold text-red-500'><MdOutlineDeleteForever></MdOutlineDeleteForever> Delete</button>
                    </div>
                </div>
                <div className='md:col-span-8 space-y-4'>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        <div className='bg-white shadow p-6 rounded-2xl text-center space-y-2'>
                            <p className='text-2xl text-[#244D3F] font-bold'>{findFriend.days_since_contact}</p>
                            <p className='text-[#64748B]'>Days Since Contact</p>
                        </div>
                        <div className='bg-white shadow p-6 rounded-2xl text-center space-y-2'>
                            <p className='text-2xl text-[#244D3F] font-bold'>{findFriend.goal}</p>
                            <p className='text-[#64748B]'>Goal (Days)</p>
                        </div>
                        <div className='bg-white shadow p-6 rounded-2xl text-center space-y-2'>
                            <p className='text-2xl text-[#244D3F] font-bold'>{findFriend.next_due_date}</p>
                            <p className='text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[#244D3F] text-xl'>Relationship Goal</h3>
                            <button className='btn'>Edit</button>
                        </div>
                        <p className='text-[#64748B]'>Connect every <span className='text-[#244D3F] font-bold'>30Days</span></p>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl space-y-3'>
                        <h3 className='text-[#244D3F] text-xl'>Quick Check-In</h3>
                        <div className='grid grid-cols-3 gap-8'>
                            <div className='bg-[#F8FAFC] hover:bg-gray-300 transition duration-300 p-5 border border-gray-200 rounded-2xl cursor-pointer text-center'>
                                <button><IoCallOutline></IoCallOutline> Call</button>
                            </div>
                            <div className='bg-[#F8FAFC] hover:bg-gray-300 transition duration-300 p-5 border border-gray-200 rounded-2xl cursor-pointer text-center'>
                                <button><BiMessageDots></BiMessageDots> Text</button>
                            </div>
                           <div className='bg-[#F8FAFC] hover:bg-gray-300 transition duration-300 p-5 border border-gray-200 rounded-2xl cursor-pointer text-center'>
                             <button><CiVideoOn></CiVideoOn> Video</button>
                           </div>
                        </div>
                    </div>
                    <div className='bg-white shadow p-6 rounded-2xl space-y-2'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-[#244D3F] text-xl'>Recent Interactions</h3>
                            <button className='btn'><MdHistory></MdHistory>Full History</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;