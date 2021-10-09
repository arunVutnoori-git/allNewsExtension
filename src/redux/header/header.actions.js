import { headerActionTypes } from "./header.types"

export const setCurrentLanguage = language => (
    {
        type : headerActionTypes.SET_CURRENT_LANGUAGE,
        payload : language
    }
)

export const setCurrentCountry = country => (
    {
        type : headerActionTypes.SET_CURRENT_COUNTRY,
        payload : country
    }
)

export const setCurrentCategory = category => (
    {
        type : headerActionTypes.SET_CURRENT_CATEGORY,
        payload : category
    }
)

export const setArticlesLimit = articlesNo => (
    {
        type : headerActionTypes.SET_ARTICLES_LIMIT,
        payload : articlesNo
    }
)