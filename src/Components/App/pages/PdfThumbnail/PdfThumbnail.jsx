import React from 'react'
import style  from './PdfThumbnail.module.css'
import { useSelector } from 'react-redux'

export default function PdfThumbnail() {

    const memes = useSelector(s=>s.listes.memes);

  return (
    <div className={style.pdfThumbnail}>
        { memes.map((m,i) => 
        <div className={ style.pdfView } key={'pdf-' + i}>
            <div>{ m.titre }</div>
        </div>
        )}
    </div>
  )
}
