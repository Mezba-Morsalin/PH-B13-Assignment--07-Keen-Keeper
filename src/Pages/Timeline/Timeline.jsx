import React, { useContext } from 'react';
import { FriendsContext } from '../../FriendsProvider/FriendsProvider';

const Timeline = () => {
    const {calls, texts, videos} = useContext(FriendsContext)
    return (
        <div>
            <h2>{calls.length}</h2>
            <h2>{texts.length}</h2>
            <h2>{videos.length}</h2>
        </div>
    );
};

export default Timeline;