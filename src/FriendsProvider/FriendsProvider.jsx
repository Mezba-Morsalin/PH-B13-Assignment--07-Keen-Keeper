import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [calls, setCalls] = useState([]);
  const [texts, setTexts] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleCall = (currentFriend) => {
    const exist = calls.find(c => c.id === currentFriend.id);

    if (exist) {
      toast.error(`Already called ${currentFriend.name}`);
      return;
    }

    toast.success(`Call with ${currentFriend.name}`);
    setCalls([...calls, currentFriend]);
  };

  const handleMassage = (currentFriend) => {
    const exist = texts.find(t => t.id === currentFriend.id);

    if (exist) {
      toast.error(`Already texted ${currentFriend.name}`);
      return;
    }

    toast.success(`Text with ${currentFriend.name}`);
    setTexts([...texts, currentFriend]);
  };

  const handleVideo = (currentFriend) => {
    const exist = videos.find(v => v.id === currentFriend.id);

    if (exist) {
      toast.error(`Already video called ${currentFriend.name}`);
      return;
    }

    toast.success(`Video Call with ${currentFriend.name}`);
    setVideos([...videos, currentFriend]);
  };

  const data = {
    calls,
    texts,
    videos,
    handleCall,
    handleMassage,
    handleVideo
  };

  return (
    <FriendsContext.Provider value={data}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;