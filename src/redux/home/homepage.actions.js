import {homePageActionTypes} from "./homepage.types"

export const setCurrentArticlesLimit = articlesLimit => ({
    
    type : homePageActionTypes.SET_CURRENT_ARTICLE_LIMIT,
    payload : articlesLimit

})

export const setCurrentPage = currentPage => ({
    type : homePageActionTypes.SET_CURRENT_PAGE,
    payload : currentPage
})

