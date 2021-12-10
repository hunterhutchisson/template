import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {Form, Button, Col} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { storeMarkdowns, editMarkdown } from "../actions/markdownActions";
import { editMarkdownTemplate } from "../actions/templateActions";
import ListItem from "./ListItem";
import TextEmphasis from "./TextEmphasis";

const OrderedList = ({isEdit, markdownFormActive, name, markdownObjPassed, overallForm}) => {
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
    const handleSubmitOrdered =  () => {
        let assembledFetch =``
        let assembledCombined=``
        listItems.forEach(item=>{
            assembledFetch += `
${item.itemTextForFetch}`
            assembledCombined+=`${item.itemTextForMarkdown}`
        })
        setCombinedInput(assembledCombined)
        fetchHTML(assembledFetch)

    }
    const handleDeleteItem = (itemObj) => {
        let copyListItems = [...listItems]
        let newList = copyListItems.filter(item=> item.id !== itemObj.id)
        console.log(newList)
        setListItems(newList)
    }
    const handleDeleteLastItem = () => {
        let copyListItems = [...listItems]
        copyListItems.pop()
        setListItems(copyListItems)
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
            (markdownObjPassed ? ((overallForm === "template") ? dispatch((editMarkdownTemplate(markdownObj))):dispatch(editMarkdown(markdownObj))):dispatch(storeMarkdowns(markdownObj)))
            markdownFormActive(false)
        }
    }, [htmlOutput])


    return (
    <>
        {(listItems.length > 0)
        ?
        <>
        {listItems.map((item, index)=>{
            return (<>
            <ListItem listItems={listItems} setListItems={setListItems} item={item} orderType="ordered" index={index}/>
            {/* <button onClick={()=>handleDeleteItem(item)}>delete item</button> */}
            </>)
        })}
        <ListItem listItems={listItems} setListItems={setListItems} orderType="ordered"/>
        </>
        :
        <ListItem listItems={listItems} setListItems={setListItems} orderType="ordered" index={0}/>
        }
        <br />
        <button onClick={()=>handleSubmitOrdered()}>submit</button>
        {(listItems.length > 0) ? <button onClick={()=>handleDeleteLastItem()}>delete last item</button>:null}
    </>
    )
}

export default OrderedList
