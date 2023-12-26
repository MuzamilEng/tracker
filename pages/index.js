import React, { useEffect, useState } from 'react'
import { addRecord, tableTitle, tracker } from '../app/Data'
import { Icon } from '@iconify/react';
import {useGlobalContext} from '../app/Context/UserContext'
import { useForm, Controller } from 'react-hook-form';
import StatusRadio from '../app/Components/StatusRadio';
import ShowItems from '../app/Components/ShowItems';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {SortableContext, useSortable, verticalListSortingStrategy, arrayMove} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

const Tracker = () => {
  const [updatedRecords, setUpdatedRecords] = useState([]);
    const [inProgress, setInprogress]  = useState(true)
    const [upComing, setUpComing]  = useState(false)
    const [completed, setCompleted]  = useState(false)
    const [atRistk, setAtRistk]  = useState(false)
    const [showStatus, setShowStatus] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const {state, selectData, selectedData, setRecord, updateData, addData} = useGlobalContext();
    const record = selectedData || null
const { handleSubmit, setValue, control, reset } = useForm({
    defaultValues: {
   title: record?.title || "",
   label: record?.status_inProgress?.label || "",
   date: record?.status_inProgress?.date || "",
   docs: record?.status_inProgress?.docs || "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue(name, value);
  };
const handleEdit = (data, index) => {
  console.log('kmksmdkm');
  if (data) {
    // Store the selected data and its index
    selectData({ ...data, index });
    console.log(data, 'edit');
  }
  setShowForm(true);
};
const onSubmit = (data, e) => {
    console.log(data, 'data');
    e.preventDefault();
  
    const newData = {
      title: data?.title || "",
      owner: data?.owner || "",
      status_inProgress: {
        label: data?.label || "", 
        date: data?.date || "", 
        docs: data?.docs || "",
      },
    };
  
    if (record) {
      // Update the existing data with new values
      const updatedData = {
        ...record,
        title: data?.title || "",
        status_inProgress: {
          label: data?.label || "", 
          date: data?.date || "", 
          docs: data?.docs || "",
        },
      };
  
      updateData(record.index, updatedData);

      console.log(record.index, 'r-index', updateData);
      setShowForm(false);
    } else {
      // Add new data to the array
      addData(newData);
      setShowForm(false);
    }
  };

    const handleStatus = (status) =>{
        switch (status) {
            case 'inProgress':
                setInprogress(true)
                setUpComing(false)
                setCompleted(false)
                setAtRistk(false)
                break;
            case 'upcoming':
                setInprogress(false)
                setUpComing(true)
                setCompleted(false)
                setAtRistk(false)
                break;
            case 'complete':
                setInprogress(false)
                setUpComing(false)
                setCompleted(true)
                setAtRistk(false)
                break;
            case 'atRisk':
                setInprogress(false)
                setUpComing(false)
                setCompleted(false)
                setAtRistk(true)
                break;
            default:
                break;
        }
    }

    const Sortable = ({data, index, handleEdit})=> {
      // console.log(index, 'index');
      const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: data?.id}) 
      // console.log(data?.id);
        const style = {
            transition, transform: CSS.Transform.toString(transform),
        }
        return <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`flex w-full items-center`} key={index}>
        {inProgress ? 
        <ShowItems key={index} hanldeClick={handleEdit} ProjectTitle={data?.title} docs={data?.status_inProgress?.docs} title={data?.title} status_count={data?.status_inProgress?.status_count} date_count={data?.status_inProgress?.date_count} date={data?.status_inProgress?.date} color='yellow' label={data?.status_inProgress?.label}/>
        : upComing ?
        <ShowItems key={index} hanldeClick={handleEdit} ProjectTitle={data?.title} docs={data?.status_upComing?.docs} title={data?.title} status_count={data?.status_upComing?.status_count} date_count={data?.status_upComing?.date_count} date={data?.status_upComing?.date} color='blue' label={data?.status_upComing?.label}/>
        : completed ?
        <ShowItems key={index} hanldeClick={handleEdit} ProjectTitle={data?.title} docs={data?.status_complete?.docs} title={data?.title} status_count={data?.status_complete?.status_count} date_count={data?.status_complete?.date_count} date={data?.status_complete?.date} color='green' label={data?.status_complete?.label}/>
        :
        <ShowItems key={index} hanldeClick={handleEdit} ProjectTitle={data?.title} docs={data?.status_atRisk?.docs} title={data?.title} status_count={data?.status_atRisk?.status_count} date_count={data?.status_atRisk?.date_count} date={data?.status_atRisk?.date} color='red' label={data?.status_atRisk?.label}/>
        }
    </div>
    }

    const onDragEnd = (event) => {
      const { active, over } = event;
      
      if (!over) return; // If not dropped over a valid target, do nothing
    
      setRecord((records) => {
        const oldIndex = records.findIndex((item) => item.id === active.id);
        const newIndex = records.findIndex((item) => item.id === over.id);
    
        const updatedRecords = arrayMove(records, oldIndex, newIndex);
        console.log(updatedRecords, 'updatedRecords');
        setUpdatedRecords(updatedRecords);
        return updatedRecords;
      });
    };
    useEffect(() => {
        reset({
          title: record?.title || '',
          owner: record?.owner || '',
          label: record?.status_inProgress?.label || '',
          date: record?.status_inProgress?.date || '',
          docs: record?.status_inProgress?.docs || '',
        });
      }, [record, reset]);
  return (
    <main className='w-full bg-[#fff] p-2vw'>
        {!showForm ? <>
        <section className="flex items-center">
            <button className='text-[1.2vw] text-purple-500 p-[0.6vw] font-medium cursor-pointer  border-[1px] m-vw border-gray-500 rounded-md'>Project Tracker</button>
            <button className='text-[1.2vw] text-black p-[0.6vw] font-medium cursor-pointer  border-[1px] m-vw border-gray-500 rounded-md' onClick={()=> setShowForm(true)}>Add Row</button>
        </section>
        {showStatus && (
        <div className="absolute top-[12vw] z-50 w-full left-[32vw]">
          <div style={{ backgroundColor: 'white', zIndex: 9999 }} className="w-full relative max-w-[25vw] z-50 bg-[#ffff] rounded-md border-[1px] shadow:md p-2vw">
            <Icon icon="iconoir:cancel" className="text-gray-500 absolute right-vw border-[1px] rounded-md cursor-pointer top-vw ml-vw text-[1.8vw]" onClick={() => setShowStatus(!showStatus)} />
            <StatusRadio label='Upcoming' color='blue-500' checked={upComing} onClick={() => handleStatus('upcoming')} />
            <StatusRadio label='In Progress' color='yellow' checked={inProgress} onClick={() => handleStatus('inProgress')} />
            <StatusRadio label='Complete' color='green' checked={completed} onClick={() => handleStatus('complete')} />
            <StatusRadio label='At Risk' color='red' checked={atRistk} onClick={() => handleStatus('atRisk')} />
          </div>
        </div>
      )}
        <div className="flex items-center">
            {tableTitle?.map((title, index) => (
                <div className={` w-full ${title?.width ? 'max-w-[14vw] ml-[3vw]': 'max-w-[17vw]'}`} key={index}>
                    <div className="flex justify-between w-full">
                    <p className="text-[1.5vw] ml-vw text-black font-medium">{title?.title}</p>
                    <section className="flex items-center">
                        <span className='text-[1.2vw]'>{title?.icon}</span>
                        {title?.title === 'Status' ? <span className='text-[1.2vw] text-gray-500' onClick={()=> setShowStatus(!showStatus)}>{title?.icon2}</span> :  <span className='text-[1.2vw] text-gray-500'>{title?.icon2}</span>}
                    </section>
                    </div>
                </div>
            ))}
        </div>
        <section className="grid grid-cols-1 w-full z-10">
          {state?.map((data, index)=> {
            return <Sortable key={index} data={data} index={index} handleEdit={()=> handleEdit(data, index)} />
          })}
  <DndContext collisionsDetection={closestCenter} onDragEnd={onDragEnd}>
    <SortableContext items={state} strategy={verticalListSortingStrategy}>
      {updatedRecords?.length > 0 ? (
        updatedRecords.map((data, index) => (
          <Sortable key={index} data={data} index={index} handleEdit={()=> handleEdit(data, index)} />
        ))
      ) : (
        state.map((data, index) => (
          <Sortable key={index} data={data} index={index} handleEdit={()=> handleEdit(data, index)} />
        ))
      )}
    </SortableContext>
  </DndContext>
</section>

        </> : <>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-[33vw] flex flex-col items-center">
        <span className='text-2vw text-black font-medium text-center'>Add new record</span>
            <div className="bg-white border-[1px] rounded-md p-vw w-full max-w-[30vw]">
                {addRecord?.map((item, index)=> {
                    return <main className='w-full p-0.5vw' key={index}>
                        <label className='text-vw ml-vw font-medium' htmlFor={item?.label}>{item?.label}</label>
                        <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({ field }) => (
                        <input
                          {...field}
                          onChange={handleInputChange}
                          className='text-vw p-0.5vw border-[1px] w-full ml-vw rounded-md'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                      )}
                    />
                    </main>
                })}
                <div className="flex justify-center mt-vw items-center">
                <button type='submit' className='text-vw p-0.5vw bg-blue-500 text-white hover:bg-blue-600 border-[1px] w-full max-w-[6vw] text-center ml-vw rounded-md'>Save</button>
                <button className='text-vw p-0.5vw bg-red-500 text-white hover:bg-red-600 border-[1px] w-full max-w-[6vw] text-center ml-vw rounded-md' onClick={()=> setShowForm(!showForm)}>Cancle</button>
                </div>
                </div>
        </form>
        </>}
    </main>
  )
}

export default Tracker