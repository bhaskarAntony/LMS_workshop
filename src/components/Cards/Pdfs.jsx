import React from 'react'
import pdfHtml from '../.././pdfs/html.pdf'
import pdfCss from '../.././pdfs/CSS.pdf'
import pdfJs from '../.././pdfs/JS.pdf'
import { Button } from '@mui/material'


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
function Pdfs() {
  return (
    <div>
        {
            pdfData.map((item, imdex)=>(
                <div className="small-pdf">
                    <div className="row align-items-center">
                        <div className="col-2">
                        <i class="bi bi-journal-text display-6"></i>
                        </div>
                        <div className="col-8">
                            <span className="d-block fs-5 title fw-bold">{item.title}</span>
                            <small className="d-block">{item.description}</small>
                        </div>
                        <div className="col-2">
                            <a href={`/pdfViewer/${item.id}`}><Button variant='contained' className='rounded-5 h-100'>View</Button></a>
                        </div>
                    </div>
                </div>
            ))
        }
      
    </div>
  )
}

export default Pdfs
