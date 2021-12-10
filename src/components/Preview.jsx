import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchOverallForm } from '../actions/infoAction'


function Preview() {
    const dispatch = useDispatch();
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const templateObjList = useSelector(state => state.templateReducer.templateObjList)
    const overallFormState = useSelector(state => state.infoReducer.overallFormState)
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
            <button onClick={()=>dispatch(switchOverallForm("nonstructured"))}>NonStructured</button>
            <button onClick={()=>dispatch(switchOverallForm("template"))}>Template</button>
            {overallFormState === "nonstructured" ? displayPreview(markdownObjList):displayPreview(templateObjList)}
        </>
    )
}

export default Preview
