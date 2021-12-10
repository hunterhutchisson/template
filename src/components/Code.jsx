import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import { fetchHTML } from './utils'

const Code = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [currentlyChecked, setCurrentlyChecked] = useState(false)
    const [codeType, setCodeType] = useState(null)
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")

    const isChecked = (checkedState, type, e) => {
        if(checkedState){
            if(e.target.value === type){
                setCurrentlyChecked(false)
            }
            e.target.checked = false
        } else {
            e.target.checked = true
            setCurrentlyChecked(true)
            setCodeType(e.target.value)
        }
    }

    const formatTextCode = (text, type) => {
        switch(type){
            case "code":
                return setCombinedInput(`
${text}
`)
                break
            case "fenced":
                return setCombinedInput("```"+`
${text}
`  + "```")
                break
            case "enhanced":
                return setCombinedInput("```js"+`
${text}
`  + "```")
            default:
                return setCombinedInput("```js"+`
${text}
`  + "```")
        }
    }

    const handleSubmitCode = (e) => {
        e.preventDefault()
        formatTextCode(textInput, codeType)
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
        if(markdownObj.htmlOutput.length > 0){
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitCode}>
        <div key="inline-checkbox" className="mb-3" id="headingsize">
                    <Form.Check
                        inline
                        label="Code"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-1"
                        value="code"
                        onChange={e=>{
                            isChecked(currentlyChecked, codeType, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="Fenced Code"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-2"
                        value="fenced"
                        onChange={e=>{
                            isChecked(currentlyChecked, codeType, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="Enhanced Fenced Code"
                        type="checkbox"
                        id="inline-checkbox-3"
                        value="enhanced"
                        onChange={e=>{
                            isChecked(currentlyChecked, codeType, e)
                        }}
                    />
                </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Code:</Form.Label>
                <Form.Control as="textarea" rows={3}  value={textInput} onChange={e=>setTextInput(e.target.value)}/>
            </Form.Group>
            <button>submit</button>                
        </Form>
    </>
    )
}

export default Code