import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchOverallForm } from '../actions/infoAction'
import {Link} from 'react-router-dom'



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
            <div class="row">
        <div className="col-lg-4 offset-lg-4">
          <div className="overallForm-app d-flex justify-content-around text-center">
            <div className="row">
            <div className="col-12"><h1>PREVIEW TYPE</h1></div>
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
          {overallFormState === "nonstructured" ? displayPreview(markdownObjList):displayPreview(templateObjList)}
          </div>
        </div>
      </div>
      <div class="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="overallForm-app d-flex justify-content-around text-center">

            <div className="col-12 d-flex justify-content-around">
            <Link to="/" className="margin-zero"><button  className="btn btn-ocean" >Go Back To Edit</button></Link>
            <Link to="/markdown" className="margin-zero"><button  className="btn btn-ocean" >View Markdown</button></Link>
            </div>

          </div>
        </div>
      </div>
        </>
    )
}

export default Preview
