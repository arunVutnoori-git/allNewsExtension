import React,{useState} from 'react'
import './news-content.styles.scss'
import ArticlePreview from '../../../components/article-preview/article-preview.component'

// import { connect } from 'react-redux'
// import { setCurrentPage } from '../../../redux/home/homepage.actions'

const NewsContent = ({data,pagelimit,datalimit}) => {


    const [pages] = useState(Math.round(data.length/datalimit))

    
    const [currentPage,setCurrentPage] = useState(1)

    const handleRemoveContent = () => {
        new Array(datalimit).fill().map((_,idx) => {
            console.log('here i am ' + idx)

            if(document.getElementById(`content${idx}`))
            {
                document.getElementById(`content${idx}`).remove()
                return idx
            }
                return idx            
            }
        
        )
    }
    function goToNextPage() {
        setCurrentPage(page => page +1)
        handleRemoveContent()
    }

    function goToPreviousPage() {
        setCurrentPage(page => page -1)
        handleRemoveContent()
    }
    
    function changePage(e) {
        

        const pageNumber = Number(e.target.textContent)
        setCurrentPage(pageNumber)

        handleRemoveContent()

        
    }
    
    const getPaginatedData = () => {
        const startIndex = (currentPage * datalimit) - datalimit
        const endIndex = startIndex + datalimit
        return data.slice(startIndex,endIndex)
    }

    const getPaginatedGroup = () => {
        let start = Math.floor((currentPage-1)/pagelimit)*pagelimit
        return new Array(pagelimit).fill().map((_,idx) => start + idx + 1)
    }

    return(
        <div className='homepage'>
            <div className='news-content'>
                    {   
                        getPaginatedData().map((article,idx) =>
                         <ArticlePreview key={idx} keyIndex={idx} data={article}></ArticlePreview>)
                        
                    }                   
            </div>

            <div className='pagination-tab'>

                <button 
                onClick={goToPreviousPage}
                className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                Prev
                </button>

                {
                    getPaginatedGroup().map((item,idx)=> (
                        <button
                        key={idx}
                        onClick={changePage}
                        className={`pagination-item ${currentPage===item ? 'active' : null}`}
                        >
                        <span>{item}</span>
                        </button>
                    ))
                }

                <button
                onClick={goToNextPage}
                className={`next ${currentPage===pages? 'disabled' : ''}`}
                >
                Next
                </button>

        </div>
        
        </div>
    )
}



export default NewsContent