import React from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';



const ShowItems = ({title,label, status_count, ProjectTitle, date_count, date, color, hanldeClick, docs}) => {
  return (
    <>
         <div className="p-[1.15vw] flex items-center border-[1px] w-full max-w-[18vw]">
                    <Icon icon="pepicons-pencil:dots-y" className='text-vw' onClick={hanldeClick}/>
                    <p className="text-[1.2vw] pl-0.2vw text-black font-medium">{ProjectTitle}</p>
                    </div>
        <div className="w-full max-w-[15vw] p-[0.55vw] border-[1px] items-center flex justify-center"><Image src='/images/man.png' width={100} height={100} alt={title} className='w-full max-w-[3vw] rounded-full' /></div>
                    <div className="flex relative pl-vw w-full max-w-[18vw] p-[1.15vw] border-[1px] justify-between items-center">
                    <span style={{ color: color }} className={`text-[1.2vw] text-${color}-500 font-semibold`}>{label}</span>
                     <span className='text-[vw] absolute right-[1.5vw] text-white'>{status_count}</span>
                     <Icon style={{ color: color }} icon="teenyicons:chat-solid" className={`text-${color}-500 text-[1.4vw]`} />
                    </div>
                    <div className="flex relative pl-vw p-[1.15vw] border-[1px] w-full max-w-[18vw] justify-between items-center">
                    <span style={{ color: color }} className='text-[1.2vw] font-medium'>{date}</span>
                     <span className='text-[vw] absolute right-[1.6vw] text-white'>{date_count}</span>
                     <Icon style={{ color: color }} icon="teenyicons:chat-solid" className={`text-${color}-500 text-[1.4vw]`} />
                    </div>
                    <div className="flex items-center w-full border-[1px] max-w-[20vw] p-[1.15vw]">
                    <Icon icon="ion:document" className='text-[1.2vw] text-blue-500'/>
                    <p className='text-[1.2vw] text-blue-500 pl-vw font-medium'>{docs}</p>
                    </div>
    </>
      )
}

export default ShowItems