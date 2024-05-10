import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {v4 as uuidv4} from "uuid"
import { addEntryRedux, updateEntryRedux } from "../actions/entries.action";
import { closeEditModal } from "../actions/modals.action";
 
const useEntryDetails = (desc='',val='',isExp=true) => {
        const [description, setDescription] = useState(desc);
        const [value, setValue] = useState(val);
        const [isExpense, setIsExpense] = useState(isExp);

        const dispatch = useDispatch();
        const addEntry = () => {
          dispatch(
            addEntryRedux({
              id: uuidv4(),
              description,
              value,
              isExpense,
            })
          );
         resetValue()
        };
  useEffect(() => {
    setDescription(desc)
    setValue(val)
    setIsExpense(isExp)
  }, [desc, val, isExp])
  
  const updateEntry = (id) => {
    dispatch(
      updateEntryRedux(
        id,
        {
          id,
          description,
          value,
          isExpense,
        },
      )
    );
    dispatch(closeEditModal())
  }
  const resetValue = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }
    return {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
      addEntry,
        updateEntry
    }
        
}

export default useEntryDetails