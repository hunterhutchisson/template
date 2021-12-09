import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { switchToEdit, deleteMarkdown, loadTemplate } from '../actions/markdownActions';
import Headings from './Headings';
import Code from './Code';
import HorizontalRule from './HorizontalRule';
import Paragraph from './Paragraph';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import Image from './Image';
import Link from './Link';
import UnOrderedList from './UnOrderedList'


const TemplateForm = () => {
    const dispatch = useDispatch();
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [markdownHTMLCombined, setMarkdownHTMLCombined] = useState("")
    const [markdownForm, setMarkdownForm] = useState(null)
    useEffect(() => {
        dispatch(loadTemplate())
    }, [])

    const displayEditComponent = (obj) => {
        switch(obj.name){
            case "Headings":
                return <Headings name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Code":
                return <Code name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Horizontal Rules":
                return <HorizontalRule name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Paragraphs":
                return <Paragraph name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Line Breaks":
                return <LineBreak name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Blockquotes":
                return <BlockQuote name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Images":
                return <Image name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Links":
                return <Link name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            case "Unordered Lists":
                return <UnOrderedList name={obj.name} markdownObjPassed={obj} markdownFormActive={setMarkdownForm}/>
            default:
                return <>no form yet</>
        }
    }
    
    return (
        <>
            {markdownObjList.map(markdownObj=>{
                return (<>
                {((!markdownObj.edit) 
                ?
                <>
                <div dangerouslySetInnerHTML={{__html: markdownObj.htmlOutput}}></div>
                <button className="button btn" onClick={()=>dispatch(switchToEdit(markdownObj))}>
                    <FontAwesomeIcon icon={["fas", "pencil-alt"]} color="gray" />
                </button>
                <button className="button btn" onClick={()=>dispatch(deleteMarkdown(markdownObj))}>
                    <FontAwesomeIcon icon={["fas", "trash"]} color="gray" />
                </button>
                </>
                :
                <>
                {displayEditComponent(markdownObj)}
                <button onClick={()=>dispatch(switchToEdit(markdownObj))}>cancel</button>
                </>
                )}
                </>)
            })}
        </>
    )
}

export default TemplateForm
