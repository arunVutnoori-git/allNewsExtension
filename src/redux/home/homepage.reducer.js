import {homePageActionTypes} from "./homepage.types"

const INITIAL_STATE = {
    currentArticlesLimit : 2,
}

const homeReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){
        case homePageActionTypes.SET_CURRENT_ARTICLE_LIMIT : 
            return{
                ...state,
                currentArticlesLimit : action.payload
            }
        case homePageActionTypes.SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage : action.payload
            }
        default :
        return state
    }
}

export default homeReducer
