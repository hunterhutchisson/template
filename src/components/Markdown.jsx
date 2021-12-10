import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchOverallForm } from '../actions/infoAction'

function Markdown() {
    const dispatch = useDispatch();
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const templateObjList = useSelector(state => state.templateReducer.templateObjList)
    const overallFormState = useSelector(state => state.infoReducer.overallFormState)
    const displayMarkdown = (list, state) => {
        let htmlBlock = ""
        list.forEach(item=>{
            htmlBlock += `
${item.combinedInput}<br/><br/>`
        })
        let codeBlock = `<pre><code>${htmlBlock}</code></pre>`
        return (
            <div dangerouslySetInnerHTML={{__html: htmlBlock}}></div>
        )
    }
    return (
        <>
            Markdown page
            <button onClick={()=>dispatch(switchOverallForm("nonstructured"))}>NonStructured</button>
            <button onClick={()=>dispatch(switchOverallForm("template"))}>Template</button>
            {overallFormState === "nonstructured" ? displayMarkdown(markdownObjList):displayMarkdown(templateObjList)}
        </>
    )
}

export default Markdown
