// /* global chrome */
import React from 'react'

import {connect} from 'react-redux'
// import reactDom from 'react-dom'
import './extension-article-preview.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
// import { useEffect } from 'react'


const ExtensionArticle = (props) => {
    
    const {imageUrl,title,timestamp,content,url,currentArticlesLimit} = props
    const [contentHidden,setContentHidden] = useState(true)

    
    const handleContent = () => {

        setContentHidden(!contentHidden)

        // const contentElement = document.getElementById(`extension-article-content${keyIndex}`)

        // contentElement.innerHTML = `<div id='content${keyIndex}'>${content} <a href=${url} target='_blank' style='color:red'>Read more</a></div>`

        // const fontIcon = document.getElementsByTagName(<FontAwesomeIcon></FontAwesomeIcon>)
        
    }

    if(currentArticlesLimit === 1){ 
        setContentHidden(false)
        console.log("here again")
    }


    return(
        <div className='extension-article'>
            <div className='image-container'>
                <img src={imageUrl} alt={'news'}>
                </img>
                <div className='title' onClick={
                () =>{
                    // const urlLink = url;
                    // chrome.app.window.create(
                    //     'webview.html',
                    //     {hidden: true},   // only show window when webview is configured
                    //     function(appWin) {
                    //       appWin.contentWindow.addEventListener('DOMContentLoaded',
                    //         function(e) {
                    //           // when window is loaded, set webview source
                    //           var webview = appWin.contentWindow.document.querySelector('webview');
                    //           webview.src = urlLink;
                    //           // now we can show it:
                    //           appWin.show();
                    //         }
                    //       );
                    //     });
                    window.open(url)
                }}>
                    <span>{title}</span>
                </div>
                <div className='timestamp'>
                    <span>{timestamp}</span>    
                </div>     
                <div className='show-content' onClick={handleContent} >
                    <FontAwesomeIcon className='down-arrow' icon={contentHidden ? faChevronDown : faChevronUp} size='lg'></FontAwesomeIcon>
                </div>        
            </div>
            <div className={`extension-article-content ${contentHidden ? 'hidden' : ''}`}>
                   <p>{content}</p>
                   <span onClick={() => window.open(url)}>Read more</span>
            </div>
        </div>

    )
}

const mapStateToProps = state => (
    {
        currentArticlesLimit : state.home.currentArticlesLimit
    }
)

export default connect(mapStateToProps)(ExtensionArticle)