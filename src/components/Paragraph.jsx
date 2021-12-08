import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import TextEmphasis from "./TextEmphasis";

const Paragraph = ({isEdit, markdownFormActive, name, markdownObjPassed}) => {
    const dispatch = useDispatch()
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [currentlyChecked, setCurrentlyChecked] = useState(false)
    const [headingSize, setHeadingSize] = useState("")
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
        return setCombinedInput(empText)
    }
    const fetchHTML = async (markdown) => {
        let result = (await fetch('https://api.github.com/markdown', {
            method: 'POST',
            headers: {
                'authorization': "token " + process.env.REACT_APP_MYKEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'mode': 'markdown', 'text': markdown})
        }));
        let data = await result.text()
        setHtmlOutput(data);
    }
    const handleSubmitParagraph = (e) => {
        e.preventDefault()
        addEmp(textInput, textEmphasis)
    }
    useEffect(() => {
        if(combinedInput.length){
            fetchHTML(combinedInput)
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
            markdownObjPassed ? dispatch(editMarkdown(markdownObj)):dispatch(storeMarkdowns(markdownObj))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        <Form onSubmit={handleSubmitParagraph}>
            <TextEmphasis textEmphasis={textEmphasis} setEmp={setTextEmphasis}/>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter Paragraph</Form.Label>
                <Form.Control as="textarea" rows={3}  value={textInput} onChange={e=>setTextInput(e.target.value)}/>
            </Form.Group>
            <button>submit</button>                
        </Form>
    </>
    )
}

export default Paragraph