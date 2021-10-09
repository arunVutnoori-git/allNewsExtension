import React from 'react'
import './new-homepage.styles.scss'
import ExtensionArticle from '../../components/extension-article-preview/extension-article-preview.component'


const NewHomePage = () => {
    
    const articles = [
        {
            imageUrl : "https://image.cnbcfm.com/api/v1/image/106931231-16294865342021-08-20t181946z_471648526_rc259p99iwxa_rtrmadp_0_afghanistan-conflict.jpeg?v=1629486609&w=740&h=416",
            title : "U.S. forces in Afghanistan look at alternative evacuation plans as ISIS threatens Kabul airport",
            timestamp : "1 hr ago",
            content : "U.S. defense officials say that the military is looking for alternative ways to get Americans, Afghans and third-country nationals safely to the airport in Kabul following threats from the Islamic State."
        },
        {
            imageUrl : "https://media.npr.org/assets/img/2021/08/21/gettyimages-1232163052-ced4a161a7479767729fc00283b959bc4ea1fd0e-s800-c85.webp",
            title : "Facebook's Most Viewed Article In Early 2021 Raised Doubt About COVID Vaccine",
            timestamp : "2 hrs ago",
            content : "A news story suggesting the COVID-19 vaccine may have been involved in a doctor's death was the most viewed link on Facebook in the U.S. in the first three months of the year."
        },
        {
            imageUrl : "https://images.indianexpress.com/2021/08/taliban-23.jpg",
            title : "Sunday Story: 5 days, 4 nights in Kabul",
            timestamp : "6 hrs ago",
            content : "From Delhi to Kabul’s Hamid Karzai International Airport, it’s a two-hour flight. Less than fifth of the seats are occupied this Friday the 13th, most of them businessmen or students, braving four government advisories against travel to Afghanistan."
        }
    ]

    return(
        <div className='new-homepage'>
            {
                articles.map(article => <ExtensionArticle imageUrl={article.imageUrl} title={article.title} timestamp={article.timestamp}></ExtensionArticle>)
            }
        </div>

    )
}

export default NewHomePage