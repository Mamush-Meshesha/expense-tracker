import entryTypes from "../actions/entries.action"
export const entriesReducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  switch (action.type) {
    case entryTypes.ADD_ENTRY:
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case entryTypes.REMOVE_ENTRY:
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entryTypes.UPDATE_ENTRY: 
      newEntries = [...state]
      const index = newEntries.findIndex(entry => entry.id === action.payload.id)
      newEntries[index] = { ...action.payload.entry }
      return newEntries
    default:
      return state;
  }
};

export default entriesReducer


var initialEntries = [
 
];
