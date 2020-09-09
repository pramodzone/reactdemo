import {ENCOUNTER } from "../Utils/Data";
import {ADD_ENCOUNTER} from "./ActionTypes";

const commonInitialState = {
    encounter: ENCOUNTER,
    transactions: []
}

export const commonReducer = (state = commonInitialState, action) => {
    switch (action.type) {
            case ADD_ENCOUNTER:
                return {
                    ...state,
                    encounter: [...state.encounter, action.data]
            }
        default:
            return state
    }
}