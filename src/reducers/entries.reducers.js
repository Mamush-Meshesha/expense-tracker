import entryTypes from "../actions/entries.action"
export const entriesReducer = (state = initialEntries, action) => {
  console.log(action);
  let newEntries;
  switch (action.type) {
    case entryTypes.POPULATE_ENTRIES:
      return action.payload;
    case entryTypes.ADD_ENTRY_RESULT:
      newEntries = state.concat({ ...action.payload });
      return newEntries;

    case entryTypes.REMOVE_ENTRY_RESULT :
      newEntries = state.filter((entry) => entry.id !== action.payload.id);
      return newEntries;
    case entryTypes.POPULATE_ENTRY_DETAILS:
    case entryTypes.UPDATE_ENTRY:
      newEntries = [...state];
      const index = newEntries.findIndex(
        (entry) => entry.id === action.payload.id
      );
      newEntries[index] = {...newEntries[index] , ...action.payload.entry };
      return newEntries;
    default:
      return state;
  }
};

export default entriesReducer


var initialEntries = [
 
];
