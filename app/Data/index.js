import React from 'react'
import { Icon } from '@iconify/react';


export const tableTitle = [
    {
      title: 'Project',
      icon: <Icon icon="pepicons-pencil:dots-y" />,
    },
    {
      title: 'Owner',
      icon: <Icon icon="pepicons-pencil:dots-y" />,
      icon2: <Icon icon="ep:arrow-down-bold" />,
      width: 'w-[12vw]',
    },{
      title: 'Status',
      icon: <Icon icon="pepicons-pencil:dots-y" />,
      icon2: <Icon icon="ep:arrow-down-bold" />,
    },{
      title: 'Deadline',
      icon: <Icon icon="pepicons-pencil:dots-y" />,
      icon2: <Icon icon="ep:arrow-down-bold" />,
    },{
      title: 'Related Doc',
      icon: <Icon icon="ep:arrow-down-bold" />,
    },
  ]

  export const tracker = [
    {
      id: 0,
      title: "Complete Messaging...",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress', status_count: 3, date: "Jan 12 2018", date_count: 1, docs: 'Messaging Exercise'},
      status_upComing: {label: 'Upcoming', value: 'upcoming', status_count: 3, date: "Jan 23 2022", date_count: 1, docs: 'Messaging Exercise'},
      status_complete: {label: 'Complete', value: 'complete', status_count: 3, date: "Mar 2 2012", date_count: 1, docs: 'Messaging Exercise'},
      status_atRisk: {label: 'At Risk', value: 'atRisk', status_count: 3, date: "Dec 11 2018", date_count: 1, docs: 'Messaging Exercise'},     
    },
    {
      id:1,
      title: "Project Budget",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress', status_count: 3, date: "Jan 12 2018", date_count: 1, docs: 'Marketing Budget Review'},
      status_upComing: {label: 'Upcoming', value: 'upcoming', status_count: 3, date: "Mar 2 2012", date_count: 1, docs: 'Marketing Budget Review'},
      status_complete: {label: 'Complete', value: 'complete', status_count: 3, date: "Jan 23 2022", date_count: 1, docs: 'Marketing Budget Review'},
      status_atRisk: {label: 'At Risk', value: 'atRisk', status_count: 3, date: "Jan 12 2018", date_count: 1, docs: 'Marketing Budget Review'},     
    },
    {
      id:2,
      title: "Draft Press Release",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress', status_count: 3, date: "Mar 2 2012", date_count: 1, docs: 'Press Release'},
      status_upComing: {label: 'Upcoming', value: 'upcoming', status_count: 2, date: "Jan 12 2018", date_count: 1, docs: 'Press Release'},
      status_complete: {label: 'Complete', value: 'complete', status_count: 4, date: "Jan 12 2018", date_count: 1, docs: 'Press Release'},
      status_atRisk: {label: 'At Risk', value: 'atRisk', status_count: 6, date: "Jan 23 2022", date_count: 1, docs: 'Press Release'},
    },
    {
      id:3,
      title: "Social Media Plan",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress', status_count: 3, date: "Jan 12 2018", date_count: 1, docs: 'Social Media Plan'},
      status_upComing: {label: 'Upcoming', value: 'upcoming', status_count: 2, date: "Mar 2 2012", date_count: 1, docs: 'Social Media Plan'},
        status_complete: {label: 'Complete', value: 'complete', status_count: 4, date: "Jan 12 2018", date_count: 1, docs: 'Social Media Plan'},
        status_atRisk: {label: 'At Risk', value: 'atRisk', status_count: 6, date: "Jan 12 2018", date_count: 1, docs: 'Social Media Plan'},
    },
    {
      id:4,
      title: "Email Customers",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress',name: 'inprogress', status_count: 3, date: "Jan 23 2022", date_count: 1, docs: 'Email Copy'},
        status_upComing: {label: 'Upcoming', value: 'upcoming',name: 'upcoming', status_count: 2, date: "Jan 12 2018", date_count: 1, docs: 'Email Copy'},
        status_complete:  {label: 'Complete', value: 'complete',name: 'complete', status_count: 4, date: "Mar 2 2012", date_count: 1, docs: 'Email Copy'},
        status_atRisk: {label: 'At Risk', value: 'atRisk', name: 'atRisk', status_count: 6, date: "Jan 12 2018", date_count: 1, docs: 'Email Copy'},
    },
    {
      id:5,
      title: "Draft Blog Post",
      owner: 'img/man.png',
      status_inProgress: {label: 'In Progress', value: 'inProgress', status_count: 3, date: "Jan 12 2018", date_count: 1, docs: 'Announcement Blog Post'},
        status_upComing:  {label: 'Upcoming', value: 'upcoming', status_count: 2, date: "Jan 23 2022", date_count: 1, docs: 'Announcement Blog Post'},
        status_complete:  {label: 'Complete', value: 'complete', status_count: 4, date: "Mar 2 2012", date_count: 1, docs: 'Announcement Blog Post'},
        status_atRisk: {label: 'At Risk', value: 'atRisk', status_count: 6, date: "Jan 12 2018", date_count: 1, docs: 'Announcement Blog Post'},
    },
  ]

  export const addRecord = [
   {
      label: "Project Title",
      name: 'title',
      type: 'text',
      placeholder: 'enter a title'
    },
    {
      label: "Status",
      name: 'label', 
      type: 'text',
      placeholder: 'enter status'
    },
    {
      label: "Date",
      name: 'date',
      type: 'text',
      placeholder: 'enter date'
    },
    {
      label: "Related Docs",
      name:"docs",
      type: 'text',
      placeholder: 'enter a title'
    },
  ]
