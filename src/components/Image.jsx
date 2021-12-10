import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import { fetchHTML } from './utils'

const Paragraph = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [altTextInput, setAltTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.altTextInput:"")
    const [srcInput, setSrcInput] = useState(()=>markdownObjPassed ? markdownObjPassed.srcInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")

    const combineImg = (altText, path) => {
        return setCombinedInput(`![${altText}](${path})`)
    }

    const handleSubmitImage = (e) => {
        e.preventDefault()
        combineImg(altTextInput, srcInput)
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
        <Form onSubmit={handleSubmitImage}>
            <Form.Group className="mb-3">
                <Form.Label>Path or URL</Form.Label>
                <Form.Control type="text" placeholder="Path or URL" value={srcInput} onChange={e=>setSrcInput(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>AltText</Form.Label>
                <Form.Control type="text" placeholder="AltText" value={altTextInput} onChange={e=>setAltTextInput(e.target.value)}/>
            </Form.Group>
            <button>submit</button> 
        </Form>
    </>
    )
}

export default Paragraph