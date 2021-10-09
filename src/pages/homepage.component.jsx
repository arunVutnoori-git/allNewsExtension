import React,{useState,useEffect} from 'react'
import './homepage.styles.scss'



import NewsContent from './homepage/news-content/news-content.component'

// import WithSpinner from '../components/with-spinner/with-spinner.component'

import {connect} from 'react-redux'
// import { setCurrentArticlesLimit } from '../redux/home/homepage.actions'


const HomePage = (props) => {

    const [articles,setArticles] = useState([]);
    const [errorState,setError] = useState('');
    // const [isLoading,setLoading] = useState(true);

    const {currentLanguage,currentCountry,currentCategory,currentArticlesLimit} = props

    // console.log(currentArticlesLimit,setCurrentArticlesLimit)

    useEffect(() => {
        
        fetch(`https://gnews.io/api/v4/top-headlines?
        topic=${currentCategory}&lang=${currentLanguage}
        &country=${currentCountry}&max=${20}&token=13ef31e30ef6019e0a9d90f469719c9a`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.articles);
            setArticles(data.articles)   
        }).catch(err => {
            setError(err.message)
        })

    },[currentLanguage,currentCountry,currentCategory,currentArticlesLimit])
    
    return (
        
        <div>
            {   
                (articles.length > 0) ?
                <NewsContent data={articles}
                pagelimit={currentArticlesLimit ? (Math.floor(articles.length/currentArticlesLimit)) : 5} datalimit={currentArticlesLimit ? parseInt(currentArticlesLimit,10) : 2}>
                {/* pagelimit={Math.floor(10/currentArticlesLimit)} datalimit={parseInt(currentArticlesLimit,10)}> */}
                                </NewsContent>                           
                :
                <h2>{errorState.message}</h2>
            }
        </div>
        
    )    
}

const mapStateToProps = state => ({
    currentLanguage : state.header.currentLanguage,
    currentCountry : state.header.currentCountry,
    currentCategory : state.header.currentCategory,
    currentArticlesLimit : state.home.currentArticlesLimit
})



export default connect(mapStateToProps)(HomePage)