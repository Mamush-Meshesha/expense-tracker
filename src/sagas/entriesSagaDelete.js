import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action"
import axios from "axios";

export function* deleteSaga() {
    while (true) { 
        const {payload} =   yield take(entriesTypes.REMOVE_ENTRY)
        yield call(deleteEntry, payload.id)
        yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id} })
    }
}

const deleteEntry =async (id) => {
   await axios.delete(`http://localhost:5000/entries/${id}`);
   await axios.delete(`http://localhost:5000/values/${id}`);

}