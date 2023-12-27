import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import {tracker, tableTitle} from '../Data'

const initialState = tracker
const initialColumnState = tableTitle;
const UserContext = createContext(initialState);


export const useGlobalContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const dataReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        const updatedState = state.map(item => 
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        );
        console.log("Updated State:", updatedState); // Add this line
        return updatedState;
  
      case 'ADD':
        return [...state, action.payload];
  
      case 'DELETE':
        const remainingDate = state?.filter((data) => data.id !== action.payload);
        console.log(remainingDate, "remaining data");
        return remainingDate || [];
  
      default:
        return state;
    }
  };
  const titleReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        const updatedState = state.map(item => 
          item.id === action.payload.id ? { ...item, ...action.payload.data } : item
        );
        console.log("Updated State:", updatedState); // Add this line
        return updatedState;
  
      default:
        return state;
    }
  };
  const [selectedData, setSelectedData] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [state1, dispatch1] = useReducer(titleReducer, initialColumnState);
  const [record, setRecord] = useState([]);
  // console.log(state, "UserProvider ki statae");


  const selectData = (data) => {
    setSelectedData(data);
  }
  const updateData = (id, data) => {
    dispatch({ type: 'UPDATE', payload: { id, data } });
  };

  const deleteData = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const addData = (data) => {
    const newId = state.length;  
    dispatch({ type: 'ADD', payload: { ...data, id: newId } });
    console.log(state, "add record");
  };
  
  useEffect(() => {
    setRecord(state)
  }, [state]);
  return (
    <UserContext.Provider value={{ record, addData, updateData, deleteData, setRecord, selectedData, setSelectedData, state, selectData, state1 }}>
      {children}
    </UserContext.Provider>
  );
};
