import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import TextEmphasis from "./TextEmphasis";

const HorizontalRule = ({isEdit, markdownFormActive, name, markdownObjPassed}) => {
    const dispatch = useDispatch()
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")

    const handleSubmitCode = (e) => {
        e.preventDefault()
        setCombinedInput("---")
        setHtmlOutput("<hr/>")
    }
    useEffect(() => {
        let mdID = markdownObjPassed ? markdownObjPassed.id : uuidv4()
        let mdName = markdownObjPassed ? markdownObjPassed.name : name
        let markdownObj = {
            id: mdID,
            textInput,
            combinedInput,
            htmlOutput,
            name: mdName,
            edit: false
        }
        if(markdownObj.htmlOutput.length > 0){
            markdownObjPassed ? dispatch(editMarkdown(markdownObj)):dispatch(storeMarkdowns(markdownObj))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitCode}>
            <button>add horizontal rule</button>                
        </Form>
    </>
    )
}

export default HorizontalRule