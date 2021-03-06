import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {Form} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import TextEmphasis from "./TextEmphasis";
import { fetchHTML } from './utils'

const Headings = ({markdownFormActive, name, markdownObjPassed, overallForm}) => {
    const dispatch = useDispatch()
    const [currentlyChecked, setCurrentlyChecked] = useState(false)
    const [headingSize, setHeadingSize] = useState("")
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const isChecked = (checkedState, size, e) => {
        if(checkedState){
            if(parseInt(e.target.value) === size){
                setCurrentlyChecked(false)
            }
            e.target.checked = false
        } else {
            e.target.checked = true
            setCurrentlyChecked(true)
            setHeadingSize(parseInt(e.target.value))
        }
    }

    const addHashtags = (amount, text, e, empVal) => {
        let hashtags = "#"
        for (let i = 2; i <= amount; i++) {
            hashtags += "#"
        }
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
        return setCombinedInput(hashtags + " " + empText)
    }

    const handleSubmitHeading = (e) => {
        e.preventDefault()
        addHashtags(headingSize, textInput, e, textEmphasis)
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
            setHeadingSize(0)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitHeading}>
                <div key="inline-checkbox" className="mb-3" id="headingsize">
                <Form.Label>Heading Size: &nbsp;</Form.Label>
                    <Form.Check
                        inline
                        label="1"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-1"
                        value="1"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="2"
                        name="group1"
                        type="checkbox"
                        id="inline-checkbox-2"
                        value="2"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="3"
                        type="checkbox"
                        id="inline-checkbox-3"
                        value="3"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="4"
                        type="checkbox"
                        id="inline-checkbox-4"
                        value="4"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="5"
                        type="checkbox"
                        id="inline-checkbox-5"
                        value="5"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                    <Form.Check
                        inline
                        label="6"
                        type="checkbox"
                        id="inline-checkbox-6"
                        value="6"
                        onChange={e=>{
                            isChecked(currentlyChecked, headingSize, e)
                        }}
                    />
                </div>
                <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
                <Form.Group className="mb-3">
                <Form.Label>Heading:</Form.Label>
                <Form.Control type="text" placeholder="heading..." value={textInput} onChange={e=>setTextInput(e.target.value)}/>
            </Form.Group>
                <button className="btn btn-ocean">SUBMIT</button>                
        </Form>
    </>
    )
}

export default Headings