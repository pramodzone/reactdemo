import {ADD_ENCOUNTER } from "./ActionTypes"

export const addEncounter = (encounterData) => {
    return {
        type: ADD_ENCOUNTER,
        data: encounterData
    }
}