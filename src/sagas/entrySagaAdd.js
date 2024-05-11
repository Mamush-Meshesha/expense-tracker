import { call, put, takeLatest } from "redux-saga/effects"
import entriesTypes from "../actions/entries.action"
import axios from "axios"
export function* entrySagaAdd() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
    console.log("entry added", payload)
    yield call(addEntry, payload)
    yield call(addEntryDetail, payload)
    yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload})
}
 
const addEntry = async({ id, description }) => {
    await axios.post("http://localhost:5000/entries", {
        id,
        description
    })
}

const addEntryDetail =async ({ id, isExpense, value }) => {
  await axios.post("http://localhost:5000/values", {
        id,
      isExpense,
        value
    })}