import modelTypes from "../actions/modals.action"
const reducer = (state = {}, action) => {
    switch (action.type) {
        case modelTypes.OPEN_EDIT_MODAL:
            return { ...state,  isOpen: true,  id: action.payload.id };
        case modelTypes.CLOSE_EDIT_MODAL:
            return { ...state, isOpen: false, id: null };
        default:
            return state;
    }
}

export default reducer