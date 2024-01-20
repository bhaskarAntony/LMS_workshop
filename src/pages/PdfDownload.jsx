import { Button } from '@mui/material'
import React, { useState } from 'react'
import pdfHtml from '../pdfs/html.pdf'
import pdfCss from '../pdfs/CSS.pdf'
import pdfJs from '../pdfs/JS.pdf'
import { useParams } from 'react-router-dom'

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


function PdfDownload() {
    const {id} = useParams()
    const [isData, setIsData] = useState(true)
    const downloader = (link)=>{
        const a = document.createElement('a')
        a.href = link;
        document.body.append(a);
        a.download()
        a.click()
        document.removeChild(a)
      }
      const noData = ()=>{
        alert('no pdf is found...')
      }
  return (
    <section className='no-data container-fluid p-3'>
        <div className="row d-flex align-items-center justify-content-center">
            <div className="col-12 col-md-4 text-center">
                <img src="https://img.freepik.com/free-vector/download-concept-illustration_114360-2857.jpg?size=626&ext=jpg&ga=GA1.1.874872603.1694171926&semt=ais" alt="noData-image" className="w-100" />
                <h1 className="fs-3">Hello Developer 👋</h1>
                <p>Thank you for Joining Our Workshop.<b> Download  PDF and matierials.</b></p>
              {
                pdfData.map((item, index)=>(
                    id==item.id?(
                        <a href='/recordings' download={item.link}> <Button variant="contained"  className='mt-3 p-3'>Download</Button></a>
                       
                    ):(
                        null
                    )
                ))
              }
            </div>
        </div>
    </section>
  )
}

export default PdfDownload
