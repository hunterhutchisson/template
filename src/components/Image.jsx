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
    const [altTextInput, setAltTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.altTextInput:"")
    const [srcInput, setSrcInput] = useState(()=>markdownObjPassed ? markdownObjPassed.srcInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)

    const combineImg = (altText, path) => {
        return setCombinedInput(`![${altText}](${path})`)
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
    const handleSubmitImage = (e) => {
        e.preventDefault()
        combineImg(altTextInput, srcInput)
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
            altTextInput,
            srcInput,
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