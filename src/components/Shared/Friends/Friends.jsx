import React, { Suspense, use } from 'react';
import Friend from './friend';

const dataPromise = fetch('friends.json').then(res => res.json())
const Friends = () => {
    const friends = use(dataPromise)
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto mt-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
                {
                    friends.map(friend => <Friend key = {friend.id} friend = {friend}></Friend>)
                }
                </Suspense>
            </div>
        </div>
    );
};

export default Friends;