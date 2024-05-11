import { call, fork, put, take } from "redux-saga/effects";
import entriesTypes, { populateEntries, populateEntryDetails } from "../actions/entries.action"
import axios from "axios";

function* getAllEntries() {
    yield take(entriesTypes.GET_ENTRIES)
    console.log("i need to get the entries now")

    const {data} = yield call(axios, "http://localhost:5000/entries")
    console.log(data)
    yield put (populateEntries(data))
} 

function* getEntryDetails(id) {
    const { data } = yield call(axios, `http://localhost:5000/values/${id}`)
    console.log(data)
    yield put(populateEntryDetails(id,data))
}

function* getAllEntriesDetails() {
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
    for (let index = 0; index < payload.length; index++){
        const entry = payload[index];
            yield fork(getEntryDetails, entry.id)
 
    }
}

export  {getAllEntries, getAllEntriesDetails}   