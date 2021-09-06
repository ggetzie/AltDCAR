import {
    SELECT_ENTRY
} from '../actions/types';

import entries from '../res/entries/data.json';

const entryMap = new Map();
for (entry of entries) {
  entryMap.set(entry.id, entry)
}

const initialState = {
    index: entryMap,
    selected: 0
}

export default function entryReducer(state=initialState, action) {
    switch (action.type) {
        case SELECT_ENTRY:
            return {
                ...state,
                selected: action.payload
            }
        default:
            return state
    }
}