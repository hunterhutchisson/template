import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { switchToEditTemplate, deleteMarkdownTemplate, loadTemplate } from '../actions/templateActions';
import Headings from './Headings';
import Code from './Code';
import HorizontalRule from './HorizontalRule';
import Paragraph from './Paragraph';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import Image from './Image';
import LinkURL from './Link';
import UnOrderedList from './UnOrderedList'
import OrderedList from './OrderedList'
import {Link} from 'react-router-dom'



const TemplateForm = ({overallForm}) => {
    const dispatch = useDispatch();
    const templateObjList = useSelector(state => state.templateReducer.templateObjList)
    const [markdownForm, setMarkdownForm] = useState(null)

    const displayEditComponent = (obj) => {
        switch(obj.name){
            case "Headings":
                return <Headings name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Code":
                return <Code name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Horizontal Rules":
                return <HorizontalRule name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Paragraphs":
                return <Paragraph name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Line Breaks":
                return <LineBreak name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Blockquotes":
                return <BlockQuote name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Images":
                return <Image name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Links":
                return <LinkURL name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Unordered Lists":
                return <UnOrderedList name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Ordered Lists":
                return <OrderedList name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            default:
                return <>no form yet</>
        }
    }
    
    return (
        <>
                          <div class="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="overallForm d-flex flex-column mx-auto">
            {templateObjList.map(markdownObj=>{
                return (<>
                {((!markdownObj.edit) 
                ?
                <>
                <div className="padding-bottom hoverOver">
                <div dangerouslySetInnerHTML={{__html: markdownObj.htmlOutput}}></div>
                <div className="edit">
                <button className="btn btn-ocean" onClick={()=>dispatch(switchToEditTemplate(markdownObj))}>EDIT</button> &nbsp;
                <button className="btn btn-ocean" onClick={()=>dispatch(deleteMarkdownTemplate(markdownObj))}>DELETE</button>
                </div>
                </div>
                </>
                :
                <div>
                <div className="padding-bottom">
                {displayEditComponent(markdownObj)}
                </div>
                <button className="btn btn-ocean col-2" onClick={()=>dispatch(switchToEditTemplate(markdownObj))}>CANCEL</button>
                </div>
                )}
                </>)
            })}
                      </div>
        </div>
      </div>
            <div class="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="overallForm-app d-flex justify-content-around text-center">

            <div className="col-12 d-flex justify-content-around">
            <button  className="btn btn-ocean" onClick={()=>dispatch(loadTemplate())}>Reset Template</button>
            <Link to="/preview" className="margin-zero"><button  className="btn btn-ocean" >View Preview</button></Link>
            <Link to="/markdown" className="margin-zero"><button  className="btn btn-ocean" >View Markdown</button></Link>
            </div>

          </div>
        </div>
      </div>
        </>
    )
}

export default TemplateForm
