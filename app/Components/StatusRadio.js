import React from 'react'
import { Icon } from '@iconify/react';

const StatusRadio = ({ label, checked, onClick, color }) => {
  return (
        <div className="flex items-center m-0.5vw w-full cursor-pointer" onClick={onClick}>
          <input type="radio" className="w-[1.5vw] h-[1.5vw]" checked={checked} />
          <section className="flex ml-vw w-full justify-between border-[1px] p-0.4vw rounded-md items-center">
            <p style={{ color: color }} className={`text-[1.2vw] font-semibold text-${color}`}>{label}</p>
            <Icon style={{ color: color }} icon="carbon:dot-mark" className={`text-${color} text-[1.8vw]`} />
          </section>
          <Icon icon="iconoir:cancel" className="text-gray-500 ml-vw text-[1.8vw]" />
        </div>
  )
}

export default StatusRadio