import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { switchToEdit, deleteMarkdown } from '../actions/markdownActions';
import Headings from './Headings';


const DisplayPreviews = ({handleMarkdownFormState}) => {
    const dispatch = useDispatch();
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [markdownHTMLCombined, setMarkdownHTMLCombined] = useState("")

    const displayEditComponent = (obj) => {
        switch(obj.name){
          case "Headings":
            return <Headings markdownObjPassed={obj} markdownFormActive={handleMarkdownFormState}/>
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
