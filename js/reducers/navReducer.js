import {
    NAV_TO_SCREEN,
    NAV_BACK
} from "../actions/types";

import { HOME_SCREEN } from "../screens/types";

const initialState = {
    stack: [HOME_SCREEN]
}

export default function(state=initialState, action) {
    switch(action.type) {
        case NAV_TO_SCREEN:
            return {
                ...state,
                stack: [action.payload].concat(state.stack)
            }
        case NAV_BACK:
            return {
                ...state,
                stack: state.stack.slice(1)
            }
        default:
            return state
    }
}