import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../Context/UserContext';

const TableTitles = ({showStatus, editMode}) => {
  const { state1 } = useGlobalContext();
  const [showEditBtn, setShowEditBtn] = useState(false)
  const [editedTitles, setEditedTitles] = useState(Array.from(state1));
  const [editingIndices, setEditingIndices] = useState(Array.from({ length: editedTitles.length }, () => false));

  const handleToggleEdit = (index) => {
    if(editMode){
    setEditingIndices((prevIndices) => prevIndices.map((_, i) => (i === index ? !prevIndices[i] : false)));
    }
  };

  const handleSave = (index, newTitle) => {
    const updatedTitles = [...editedTitles];
    updatedTitles[index] = { ...editedTitles[index], title: newTitle };
    setEditedTitles(updatedTitles);
    setEditingIndices((prevIndices) => prevIndices.map((_, i) => i === index ? false : prevIndices[i]));
  };

  return (
    <main className='w-full bg-[#fff] p-2vw'>
      <div className="flex items-center">
        {editedTitles.map((title, index) => (
          <div
            className={` w-full ${title?.width ? 'max-w-[14vw] ml-[3vw]' : 'max-w-[17vw]'}`}
            key={title?.id}
          >
            <div className="flex justify-between w-full">
              {editingIndices[index] ? (
                <input
                  className='text-[1.5vw] w-full border-none focus:outline-none max-w-[20vw] ml-vw text-black font-medium'
                  type={title?.type}
                  placeholder={title?.placeholder}
                  onBlur={(e) => handleSave(index, e.target.value)}
                  defaultValue={title.title}
                  autoFocus
                />
              ) : (
                <span className='text-[1.5vw] text-black font-medium'>
                  {title.title}
                </span>
              )}
              <section className="flex relative items-center">
                <span className='text-[1.2vw]' onClick={() => setShowEditBtn(!showEditBtn)} >{title?.icon}</span>
             {showEditBtn && <div className='flex absolute top-[1.2vw] right-[0.7vw] items-center'>
              <Icon icon="bx:edit" className='text-[vw] m-0.4vw text-blue-500' onClick={() => handleToggleEdit(index)} />
                <Icon icon="teenyicons:tick-circle-solid" className='text-[vw] m-0.4vw text-green-500' onClick={() => setShowEditBtn(!showEditBtn)} />
              </div>}
                {title?.title === 'Status' ? (
                  <span className='text-[1.2vw] text-gray-500' onClick={showStatus}>
                    {title?.icon2}
                  </span>
                ) : (
                  <span className='text-[1.2vw] text-gray-500'>{title?.icon2}</span>
                )}
              </section>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TableTitles;
