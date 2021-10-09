import React from 'react'
import ExtensionArticle from '../extension-article-preview/extension-article-preview.component'
import './article-preview.styles.scss'

const ArticlePreview = ({keyIndex,data}) => {

    const {title,image,content,publishedAt,url} = data

    // const date = publishedAt.slice(0,10)
    // const time = publishedAt.slice(11,19)

    const year = parseInt(publishedAt.slice(0,4))
    const month = parseInt(publishedAt.slice(5,7))
    const day = parseInt(publishedAt.slice(8,10))
    const hours = parseInt(publishedAt.slice(11,13)) + 5
    const minutes = parseInt(publishedAt.slice(14,16)) + 30
    const seconds = parseInt(publishedAt.slice(17,19))

    const nowYear = new Date().getFullYear()
    const nowMonth = new Date().getMonth() + 1
    const nowDay = new Date().getDate()
    const nowHours = new Date().getHours() 
    const nowMinutes = new Date().getMinutes()
    const nowSeconds = new Date().getSeconds()
    
    const nowTimeSeconds = new Date(nowYear,nowMonth,nowDay,nowHours,nowMinutes,nowSeconds).getTime()/1000;
    const publishedAtSeconds = new Date(year,month,day,hours,minutes,seconds).getTime()/1000;

    const hoursElapsed = (nowTimeSeconds-publishedAtSeconds)/3600;

    const hoursElapsedRounded = Math.abs(Math.round(hoursElapsed)) 

    const timeToPrint = (hoursElapsedRounded) => {

        if(hoursElapsedRounded>=24) {
            const daysGone = Math.round(hoursElapsedRounded/24)
            const hoursGone = hoursElapsedRounded%24
            if(daysGone===1)
            return daysGone + ' day and ' + hoursGone + ' hrs ago'
            if (daysGone>2)
            return daysGone + ' days and ' + hoursGone + ' hrs ago'
        }

        if(hoursElapsedRounded === 1) {
            return hoursElapsedRounded + ' hr ago'
        }
        
        else return hoursElapsedRounded + ' hrs ago'
    }

    const hoursAgo = timeToPrint(hoursElapsedRounded);


    return(
    
    // <div className='article-preview' onClick={
    //     () => window.open(url)
    // }>
    //     <div className='article-image-container'>
    //         <img src={image} alt='imagePreview'></img>
    //     </div>
    //     <div className='article-content-container'>
    //     <span className='article-title'>{title}</span>
    //         <br></br>           
    //         <span className='article-date'>{hoursAgo}</span>
    //         <p className='article-content-preview'>{content}</p>
    //     </div>
    // </div>
        <div>
            <ExtensionArticle keyIndex={keyIndex} url={url} imageUrl={image} title={title} timestamp={hoursAgo} content={content}></ExtensionArticle>
        </div>
    )
    }

export default ArticlePreview