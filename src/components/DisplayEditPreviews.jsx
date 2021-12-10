import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { switchToEdit, deleteMarkdown } from '../actions/markdownActions';
import Headings from './Headings';
import Code from './Code';
import HorizontalRule from './HorizontalRule';
import Paragraph from './Paragraph';
import LineBreak from './LineBreak';
import BlockQuote from './BlockQuote';
import Image from './Image';
import Link from './Link';
import UnOrderedList from './UnOrderedList';
import OrderedList from './OrderedList';



const DisplayPreviews = ({handleMarkdownFormState}) => {
    const dispatch = useDispatch();
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)

    const displayEditComponent = (obj) => {
        switch(obj.name){
            case "Headings":
                return <Headings markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Code":
                return <Code markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Horizontal Rules":
                return <HorizontalRule markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Paragraphs":
                return <Paragraph markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Line Breaks":
                return <LineBreak markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Blockquotes":
                return <BlockQuote markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Images":
                return <Image markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Links":
                return <Link markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Unordered Lists":
                return <UnOrderedList markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
            case "Ordered Lists":
                return <OrderedList markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
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

export default DisplayPreviews
