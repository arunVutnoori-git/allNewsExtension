import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
// import { faMoon } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'

import './header.styles.scss'

import categories from '../../data/categories.data'
import languages from '../../data/languages.data'
import countries from '../../data/countries.data'

import { setCurrentLanguage } from '../../redux/header/header.actions'
import { setCurrentCountry } from '../../redux/header/header.actions'
import { setCurrentCategory } from '../../redux/header/header.actions'
import {setCurrentArticlesLimit} from '../../redux/home/homepage.actions'


const Header = (props) => {

    const [newsOptionsHidden,setNewsOptions] = useState(true)

    const [languagesList] = useState(languages)
    const [countriesList] = useState(countries)
    const [categoryList] = useState(categories)

    const {setCurrentLanguage,setCurrentCountry,setCurrentCategory,setCurrentArticlesLimit,
        currentLanguage,currentCountry,currentCategory,currentArticlesLimit} = props

    console.log(currentLanguage,currentCountry,currentCategory,currentArticlesLimit)

    const handleFilter = () => {
        
        setNewsOptions(!newsOptionsHidden)

    }

    

    return(
        <div className='header-container'>
            <div className='header'>
            
            <div className='logo'>
                A
            </div>
            {/* <div className='bar-icon'>
                <FontAwesomeIcon className='bar' icon={faBars} size="lg"></FontAwesomeIcon>
            </div>
            <div className='moon-icon'>
                <FontAwesomeIcon className='moon-icon' icon={faMoon} size="lg"></FontAwesomeIcon>
            </div> */}
            <div className='filter-icon' onClick={handleFilter}>
                <FontAwesomeIcon className='filter' icon={faFilter} size="lg"></FontAwesomeIcon>
            </div>
            <div className={`news-options ${newsOptionsHidden ? 'hidden' : ''}`}>
                <div className='select-category-div'>
                    <span className='category-span'>News : </span>
                        <select className='select-category' value={currentCategory ? currentCategory : 'all'} onChange={e => {
                            const {value} = e.target
                            setCurrentCategory(value)
                            handleFilter()
                        }}>
                            <option value='all'>All</option>
                            {   
                                categoryList.map((category,idx) => (
                                    <option key={idx} value={Object.values(category)[0]}>{Object.keys(category)[0]}</option>
                                ))
                            }
                        </select>
                </div>

                <div className='select-country-div'>
                    <span className='country-span'>Country : </span>
                        <select className='select-country' value={currentCountry ? currentCountry : 'all'} onChange={e => {
                            const {value} = e.target
                            setCurrentCountry(value)
                            handleFilter()
                        }}>
                            <option value='all'>All</option>
                            {
                                countriesList.map((country,idx) => (

                                    <option key={idx} value={Object.values(country)[0]}>{Object.keys(country)[0]}</option>
                                    
                                ))
                            }
                        </select>
                </div>
                
                <div className='select-language-div'>
                    <span className='language-span'>Language : </span>
                        <select className='select-language' value={currentLanguage ? currentLanguage : 'all'} onChange={e => {
                            const {value} = e.target
                            setCurrentLanguage(value)
                            handleFilter()
                        }}>
                            <option value='all'>All</option>
                            {
                                languagesList.map((language,idx) => (
                                
                                     <option key={idx} value={Object.values(language)[0]}>{Object.keys(language)[0]}</option>
                                ))
                            }
                        </select>
                </div>
                <div className='article-selector'>
                <span className='articles-limit-label'>Articles : </span>
                <select className='articles-limit' value={currentArticlesLimit ? currentArticlesLimit : 5} onChange={e => {
                                const {value} = e.target
                                setCurrentArticlesLimit(value)
                                handleFilter()
                                }}>
                                    
                    <option value='2'>2</option>
                    
                </select>
            </div>
                {/* <Link to='/trending'><div className='trending-header'>Trending</div></Link>           */}
                {/* <div className='login-header'>Log in</div> */}
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentLanguage : state.header.currentLanguage,
    currentCountry : state.header.currentCountry,
    currentCategory : state.header.currentCategory,
    currentArticlesLimit : state.home.currentArticlesLimit
})

const mapDispatchToProps = dispatch => ({
    setCurrentLanguage : language => dispatch(setCurrentLanguage(language)),
    setCurrentCountry : country => dispatch(setCurrentCountry(country)),
    setCurrentCategory : category => dispatch(setCurrentCategory(category)),
    setCurrentArticlesLimit : articlesLimit => dispatch(setCurrentArticlesLimit(articlesLimit))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);