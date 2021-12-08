import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Markdown() {
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const displayMarkdown = (list) => {
        let htmlBlock = ""
        list.forEach(item=>{
            htmlBlock += `
${item.combinedInput}<br/>`
        })
        console.log(htmlBlock)
        return (
            <div dangerouslySetInnerHTML={{__html: htmlBlock}}></div>
        )
    }
    return (
        <>
            Preview page
            {displayMarkdown(markdownObjList)}
        </>
    )
}

export default Markdown