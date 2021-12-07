import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

const DisplayPreviews = () => {
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [markdownHTMLCombined, setMarkdownHTMLCombined] = useState("")
    useEffect(() => {
        let markdownHTML = ""
        markdownObjList.map(markdownObj=>
            markdownHTML += markdownObj.htmlOutput
            )
        setMarkdownHTMLCombined(markdownHTML)
    }, [markdownObjList])
    return (
        <>
            <div dangerouslySetInnerHTML={{__html : markdownHTMLCombined}}></div>
        </>
    )
}

export default DisplayPreviews
