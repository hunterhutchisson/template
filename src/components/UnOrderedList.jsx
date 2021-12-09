import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import ListItem from "./ListItem";
import TextEmphasis from "./TextEmphasis";

const UnorderedList = ({isEdit, markdownFormActive, name, markdownObjPassed}) => {
    const dispatch = useDispatch()
    const markdownObjList = useSelector(state => state.markdownReducer.markdownObjList)
    const [currentlyChecked, setCurrentlyChecked] = useState(false)
    const [headingSize, setHeadingSize] = useState("")
    const [textInput, setTextInput] = useState(()=>markdownObjPassed ? markdownObjPassed.textInput:"")
    const [htmlOutput, setHtmlOutput] = useState("")
    const [combinedInput, setCombinedInput] = useState("")
    const [textEmphasis, setTextEmphasis] = useState(0)
    const [listItems, setListItems] = useState(()=>markdownObjPassed ? markdownObjPassed.listItems:[])

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
    const handleSubmitUnOrdered =  () => {
        let assembledFetch =``
        let assembledCombined=``
        listItems.forEach(item=>{
            assembledFetch += `
${item.itemTextForFetch}`
            assembledCombined+=`${item.itemTextForMarkdown}`
        })
        setCombinedInput(assembledCombined)
        console.log(assembledFetch)
            fetchHTML(assembledFetch)

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
            listItems,
            edit: false
        }
        if(markdownObj.htmlOutput.length > 0){
            markdownObjPassed ? dispatch(editMarkdown(markdownObj)):dispatch(storeMarkdowns(markdownObj))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        
            {(listItems.length > 0)
            ?
            <>
            {listItems.map(item=>{
                return <ListItem listItems={listItems} setListItems={setListItems} item={item}/>
            })}
            <ListItem listItems={listItems} setListItems={setListItems}/>
            </>
            :
            <ListItem listItems={listItems} setListItems={setListItems}/>
        }
            <button onClick={()=>handleSubmitUnOrdered()}>submit</button>                
        
    </>
    )
}

export default UnorderedList
