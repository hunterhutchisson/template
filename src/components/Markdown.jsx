import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchOverallForm } from '../actions/infoAction'
import {Link} from 'react-router-dom'


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
            <div className="wrap" dangerouslySetInnerHTML={{__html: htmlBlock}}></div>
        )
    }
    return (
        <>
            <div class="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="overallForm-app d-flex justify-content-around text-center">
            <div className="row">
            <div className="col-12"><h1>MARKDOWN TYPE</h1></div>
            <div className="col-12 d-flex justify-content-around">
            <button className="btn btn-ocean" onClick={()=>dispatch(switchOverallForm("nonstructured"))}>NonStructured</button>
            <button className="btn btn-ocean" onClick={()=>dispatch(switchOverallForm("template"))}>Template</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="overallForm d-flex flex-column mx-auto">
            {overallFormState === "nonstructured" ? displayMarkdown(markdownObjList):displayMarkdown(templateObjList)}  
          </div>
        </div>
      </div>
      <div class="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="overallForm-app d-flex justify-content-around text-center">

            <div className="col-12 d-flex justify-content-around">
            <Link to="/" className="margin-zero"><button  className="btn btn-ocean" >Go Back To Edit</button></Link>
            <Link to="/preview" className="margin-zero"><button  className="btn btn-ocean" >View Preview</button></Link>
            </div>

          </div>
        </div>
      </div>
        </>
    )
}

export default Markdown
