import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import pdfHtml from '../pdfs/html.pdf'
import pdfCss from '../pdfs/CSS.pdf'
import pdfJs from '../pdfs/JS.pdf'

const pdfData = [
    {
      id:1,
      title:"HTML for Beginners",
      description:"Learn HTML from the scartch and get the exclusive insights of HTML ",
      link:pdfHtml
    },
    {
      id:2,
      title:"CSS for Beginners",
      description:"Style your HTML doccument with CSS skills",
      link:pdfCss
    },
    {
      id:3,
      title:"Javascript For Beginners",
      description:"Build your own logic with the help of Javascript",
      link:pdfJs
    }
    
  
  ]
function Pdfviewer() {
    const {id} = useParams()
    const [pdf, setPdf] = useState(null)
    if(id)

   
  return (
    <div>
     {
        pdfData.map((item, index)=>(
            id==item.id? (
                <iframe src={item.link} frameborder="0" width="100%" height="100%" className='pdf-view'></iframe>
            ):(
                null
            )
        ))
     }
    </div>
  )
}

export default Pdfviewer