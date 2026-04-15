import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../FriendsProvider/FriendsProvider';
import callImg from '../../assets/call.png'
import textImg from '../../assets/text.png'
import videoImg from '../../assets/video.png'

const Timeline = () => {
    const {calls, texts, videos} = useContext(FriendsContext)
    const [filter, setFilter] = useState("all")
    let showCalls = filter === "all" || filter === "calls"
    let showTexts = filter === "all" || filter === "texts"
    let showVideos = filter === "all" || filter === "videos"
    return (
        <div className='w-11/12 lg:w-9/12 mx-auto mt-16'>
            <h2 className='font-bold text-5xl mb-6'>Timeline</h2>
            <div className='flex justify-center items-center'>
                <div className="dropdown dropdown-center mb-12">
                <div tabIndex={0} role="button" className="btn m-1">{filter.toUpperCase()} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a className='text-black hover:bg-[#244D3F] hover:text-white' onClick={()=>setFilter("all")}>All</a></li>
                        <li><a className='text-black hover:bg-[#244D3F] hover:text-white'onClick={()=>setFilter("calls")}>Calls</a></li>
                        <li><a className='text-black hover:bg-[#244D3F] hover:text-white'onClick={()=>setFilter("texts")}>Texts</a></li>
                        <li><a className='text-black hover:bg-[#244D3F] hover:text-white'onClick={()=>setFilter("videos")}>Videos</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='bg-white rounded-2xl shadow p-5 space-y-3.5'>
            <div>
                {
                    showCalls && (
                        calls.length === 0 ? <div className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300'>
                            No Call History Found
                        </div> : 
                        <div className='space-y-3'>
                            {
                                calls.map(call => (
                                    <div key={call.id} className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300 flex items-center gap-5'>
                                        <img src={callImg} alt={callImg} />
                                        <div>
                                            <h3 className='text-[#64748B]'><span className='text-black font-bold text-xl'>Call </span>With <span>{call.name}</span></h3>
                                            <p className='text-[#64748B]'>{call.next_due_date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div>
                {
                    showTexts && (
                        texts.length === 0 ? <div className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300'>
                            No Text History Found
                        </div> : 
                        <div className='space-y-3'>
                            {
                                texts.map(text => (
                                    <div key={text.id} className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300 flex items-center gap-5'>
                                        <img src={textImg} alt={textImg} />
                                        <div>
                                            <h3 className='text-[#64748B]'><span className='text-black font-bold text-xl'>Text </span>With <span>{text.name}</span></h3>
                                            <p className='text-[#64748B]'>{text.next_due_date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
            <div>
                {
                    showVideos && (
                        videos.length === 0 ? <div className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300'>
                            No Video Calls History Found
                        </div> : 
                        <div className='space-y-3'>
                            {
                                videos.map(video => (
                                    <div key={video.id} className='bg-[#F8FAFC] rounded-2xl p-5 border border-gray-300 flex items-center gap-5'>
                                        <img src={videoImg} alt={videoImg} />
                                        <div>
                                            <h3 className='text-[#64748B]'><span className='text-black font-bold text-xl'>Video </span>With <span>{video.name}</span></h3>
                                            <p className='text-[#64748B]'>{video.next_due_date}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
            </div>
        </div>
    );
};

export default Timeline;