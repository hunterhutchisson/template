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
import Link from './Link';
import UnOrderedList from './UnOrderedList'
import OrderedList from './OrderedList'


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
                return <Link name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm} overallForm={overallForm}/>
            case "Unordered Lists":
                return <UnOrderedList name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Ordered Lists":
                return <OrderedList name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            default:
                return <>no form yet</>
        }
    }
    
    return (
        <>
            {templateObjList.map(markdownObj=>{
                return (<>
                {((!markdownObj.edit) 
                ?
                <>
                <div dangerouslySetInnerHTML={{__html: markdownObj.htmlOutput}}></div>
                <button className="button btn" onClick={()=>dispatch(switchToEditTemplate(markdownObj))}>
                    <FontAwesomeIcon icon={["fas", "pencil-alt"]} color="gray" />
                </button>
                <button className="button btn" onClick={()=>dispatch(deleteMarkdownTemplate(markdownObj))}>
                    <FontAwesomeIcon icon={["fas", "trash"]} color="gray" />
                </button>
                </>
                :
                <>
                {displayEditComponent(markdownObj)}
                <button onClick={()=>dispatch(switchToEditTemplate(markdownObj))}>cancel</button>
                </>
                )}
                </>)
            })}
        </>
    )
}

export default TemplateForm
