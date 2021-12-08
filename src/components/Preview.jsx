import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Preview() {
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const displayPreview = (list) => {
        let htmlBlock = ""
        list.forEach(item=>{
            htmlBlock += item.htmlOutput
        })
        return (
            <div dangerouslySetInnerHTML={{__html: htmlBlock}}></div>
        )
    }
    return (
        <>
            Preview page
            {displayPreview(markdownObjList)}
        </>
    )
}

export default Preview
