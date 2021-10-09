import { headerActionTypes } from "./header.types"

const INITIAL_STATE = {
    currentLanguage : 'en',
    currentCountry : 'us',
    currentCategory : 'breaking-news',
}

const headerReducer = (state = INITIAL_STATE,action) => {
    switch(action.type) {
        case headerActionTypes.SET_CURRENT_LANGUAGE :
            return {
                ...state,
                currentLanguage : action.payload
            }
        case headerActionTypes.SET_CURRENT_COUNTRY :
            return {
                ...state,
                currentCountry : action.payload
            }
        case headerActionTypes.SET_CURRENT_CATEGORY :
            return {
                ...state,
                currentCategory : action.payload
            }
        default :
        return state
    }
}

export default headerReducer