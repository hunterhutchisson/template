import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import TextEmphasis from "./TextEmphasis";
import { fetchHTML } from "./utils";

const BlockQuote = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const addEmp = (text, empVal) => {
        let empText
        switch(empVal){
            case 1:
                empText = "*"+text+"*"
                break
            case 2:
                empText = "**"+text+"**"
                break
            case 3:
                empText = "***"+text+"***"
                break
            case 4:
                empText = "~~"+text+"~~"
                break
            case 5:
                empText = "~~*"+text+"*~~"
                break
            case 6:
                empText = "~~**"+text+"**~~"
                break
            case 7:
                empText = "~~***"+text+"***~~"
                break
            default:
                empText = text
        }
        return setCombinedInput("> " + empText)
    }

    const handleSubmitCode = (e) => {
        e.preventDefault()
        addEmp(textInput, textEmphasis)
    }
    useEffect(() => {
        if(combinedInput.length){
            fetchHTML(combinedInput, setHtmlOutput)
        }
    }, [combinedInput])
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
        if(markdownObj.textInput.length > 0){
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitCode}>
            <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Blockquotes:</Form.Label>
                <Form.Control as="textarea" rows={3}  placeholder="blockquotes..." value={textInput} onChange={e=>setTextInput(e.target.value)}/>
            </Form.Group>
            <button className="btn btn-ocean">SUBMIT</button>                
        </Form>
    </>
    )
}

export default BlockQuote