import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import TextEmphasis from "./TextEmphasis";
import { fetchHTML } from './utils'

const Link = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [altTextInput, setAltTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.altTextInput:"")
    const [srcInput, setSrcInput] = useState(()=>markdownObjPassed ? markdownObjPassed.srcInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const combineURL = (altText, path, empVal) => {
        let text = `[${altText}](${path})`
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
        return setCombinedInput(empText)
    }

    const handleSubmitLink = (e) => {
        e.preventDefault()
        combineURL(altTextInput, srcInput, textEmphasis)
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
            altTextInput,
            srcInput,
            combinedInput,
            htmlOutput,
            name: mdName,
            edit: false
        }
        if(markdownObj.htmlOutput.length > 0){
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitLink}>
            <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
            <Form.Group className="mb-3">
                <Form.Label>URL:</Form.Label>
                <Form.Control type="text" placeholder="URL..." value={srcInput} onChange={e=>setSrcInput(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>AltText:</Form.Label>
                <Form.Control type="text" placeholder="alttext..." value={altTextInput} onChange={e=>setAltTextInput(e.target.value)}/>
            </Form.Group>
            <button className="btn btn-ocean">SUBMIT</button> 
        </Form>
    </>
    )
}

export default Link