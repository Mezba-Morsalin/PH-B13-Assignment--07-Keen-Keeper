import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../FriendsProvider/FriendsProvider';
import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Sector
} from 'recharts';

const Stats = () => {
  const { calls, texts, videos } = useContext(FriendsContext);
  const total = calls.length + texts.length + videos.length;

  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    { name: 'Calls', value: calls.length, fill: '#8884d8' },
    { name: 'Texts', value: texts.length, fill: '#82ca9d' },
    { name: 'Videos', value: videos.length, fill: '#ffc658' },
  ];

  const renderActiveShape = (props) => {
    const {
      cx, cy, innerRadius, outerRadius,
      startAngle, endAngle, fill
    } = props;

    return (
      <g>
        <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 10} startAngle={startAngle} endAngle={endAngle} fill={fill}/>
      </g>
    );
  };
  return (
    <div className="">
        <h2 className='w-11/12 lg:w-9/12 mx-auto font-bold text-5xl my-6'>Interaction</h2>
     <div className='w-11/12 lg:w-9/12 mx-auto mt-20 h-[400px] bg-white shadow rounded-2xl'>
         {
        total === 0 ? (
          <div className="flex justify-center items-center h-full">
            <h2 className="text-2xl font-bold text-gray-500">
              No Interaction Found
            </h2>
          </div>
        ) : (
          <>
          <h2 className='text-2xl font-bold text-gray-500 p-4'>By The Interaction</h2>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={120} activeIndex={activeIndex} activeShape={renderActiveShape} onMouseEnter={(_, index) => setActiveIndex(index)} isAnimationActive={true} animationDuration={800} animationEasing="ease-out" label/>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className='flex gap-8 justify-center items-center '>
              <div className='flex gap-2.5 items-center'>
                <div className='w-3 h-3 bg-[#8884d8]'></div>
                <p className='text-[#8884d8] font-bold'>Calls</p>
              </div>
              <div className='flex gap-2.5 items-center'>
                <div className='w-3 h-3 bg-[#82ca9d]'></div>
                <p className='text-[#82ca9d] font-bold'>Text</p>
              </div>
              <div className='flex gap-2.5 items-center'>
                <div className='w-3 h-3 bg-[#ffc658]'></div>
                <p className='text-[#ffc658] font-bold'>Video</p>
              </div>
            </div>
          </>
        )
      }

     </div>
    </div>
  );
};

export default Stats;