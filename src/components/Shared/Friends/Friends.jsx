import { useEffect, useState } from 'react';
import Friend from './friend';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('friends.json')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);

  return (
    <div className='w-11/12 lg:w-10/12 mx-auto mt-20'>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {
          friends.map(friend => (
            <Friend key={friend.id} friend={friend} />
          ))
        }
      </div>
    </div>
  );
};

export default Friends;